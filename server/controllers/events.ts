import { Request, Response } from 'express';
import prisma from '../../lib';

export default {
  /**
   * Gets events tailored to `user_id` within `distance` miles range.
   * ```
   * {
   *  id: string,
   *  name: string,
   *  startDate: string,
   *  picture: string,
   *  latitude: number,
   *  longitude: number,
   *  friendsGoing: { id: string, username: string, pictures: string[] }[]
   *  attendees: number,
   * }[]
   * ```
   * Request query parameters:
   * - `distance` - either a number (representing miles) or a string `'all'`
   * - `startDate` - any DateTime object less than `endDate`
   * - `endDate` - any DateTime object greater than `startDate`
   * - `page` - any non-negative integer
   * - `count` - any non-negative integer
   */
  getEvents: async (req: Request, res: Response) => {
    const distance: number | 'all' =
      req.query.distance === 'all'
        ? 'all'
        : parseInt(req.query.distance as string);

    const startDate = req.query.startDate
      ? new Date(req.query.startDate as string)
      : new Date(0);
    const endDate = req.query.endDate
      ? new Date(req.query.endDate as string)
      : new Date();
    const page = parseInt(req.query.page as string, 10) || 0;
    const count = parseInt(req.query.count as string, 10) || 10;
    const userId = req.params.user_id;

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          latitude: true,
          longitude: true,
        },
      });

      if (!user) return res.sendStatus(404);
      const events = await prisma.$queryRaw`
          SELECT e."id", e."name", e."startDate", e."picture", e."latitude", e."longitude",
          (
            SELECT jsonb_agg(jsonb_build_object('id', u."id", 'username', u."username", 'pictures', u."pictures"))
            FROM "_AttendingEvents"
            JOIN "User" u ON u."id" = "_AttendingEvents"."B"
            JOIN "Friend" f ON (f."senderId" = ${userId} AND f."recieverId" = u."id") OR (f."recieverId" = ${userId} AND f."senderId" = u."id")
            WHERE "_AttendingEvents"."A" = e."id"
          ) AS "friendsGoing",
          (
            SELECT CAST(COUNT(*) AS INT)
            FROM "_AttendingEvents"
            WHERE "_AttendingEvents"."A" = e."id"
          ) AS attendees
          FROM "Event" e
          WHERE e."startDate" >= ${startDate} AND e."startDate" <= ${endDate}
          AND (
            ${
              distance === 'all'
            } OR (ST_DistanceSphere(ST_GeomFromText('POINT(' || e.longitude || ' ' || e.latitude || ')'),
          ST_GeomFromText(${`POINT(${user.longitude} ${user.latitude})`})) <= ${
        Number(distance) * 1609
      }))
          LIMIT ${count} OFFSET ${page * count}
        `;

      return res.status(200).json(events);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'An error occurred while fetching events' });
    }
  },

  /**
   * Gets the events that the user `user_id` is currently going to.
   * ```
   * {
   *  id: string,
   *  name: string,
   *  startDate: string,
   *  picture: string,
   *  latitude: number,
   *  longitude: number,
   * }[]
   * ```
   * - `page` - any non-negative integer
   * - `count` - any non-negative integer
   */
  getUserEvents: async (req: Request, res: Response) => {
    try {
      const userId = req.params.user_id;
      const page = parseInt(req.query.page as string) || 0;
      const count = parseInt(req.query.count as string) || 10;

      const userEvents = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          eventsAttending: {
            select: {
              id: true,
              name: true,
              startDate: true,
              picture: true,
              latitude: true,
              longitude: true,
            },
            orderBy: {
              startDate: 'asc',
            },
            skip: page * count,
            take: count,
          },
        },
      });

      if (!userEvents) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(userEvents.eventsAttending);
    } catch (error) {
      console.error('Error retrieving user events:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * Get the event with `event_id`
   * ```
   * {
   *  id: string,
   *  name: string,
   *  startDate: string,
   *  picture: string,
   *  latitude: number,
   *  longitude: number,
   *  locationString: string,
   * }
   * ```
   *
   * Request query parameters: none
   */
  getEvent: async (req: Request, res: Response) => {
    try {
      const eventId = req.params.event_id;

      const event = await prisma.event.findUnique({
        where: {
          id: eventId,
        },
        select: {
          id: true,
          name: true,
          startDate: true,
          picture: true,
          latitude: true,
          longitude: true,
          locationString: true,
        },
      });

      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      res.status(200).json(event);
    } catch (error) {
      console.error('Error retrieving event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * RSVPs for an event with the specified ID.
   *
   * Request parameters:
   * - event_id: string representing the ID of the event to RSVP for
   *
   * Request query parameters:
   * - user_id: string representing the ID of the user sending the RSVP
   */
  rsvpEvent: async (req, res) => {
    try {
      const { event_id } = req.params;
      const { user_id } = req.query;

      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: {
          accountId: user_id,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the event exists
      const event = await prisma.event.findUnique({
        where: {
          id: event_id,
        },
      });

      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      // Connect the user to the event's attendees
      await prisma.event.update({
        where: {
          id: event_id,
        },
        data: {
          attendees: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      res.status(200).json({ message: 'RSVP successful' });
    } catch (error) {
      console.error("Error RSVP'ing for the event:", error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * Has user `user_id` create a new event and RSVP for it
   *
   * Request query parameters:
   * - locationString: a string representing location
   * - longitude: a float
   * - latitude: a float
   * - startDate: a date
   * - bio: a string
   * - name: a string
   * - picture: a string
   */
  createEvent: async (req: Request, res: Response) => {
    try {
      const userId = req.params.user_id as string;
      const {
        locationString,
        longitude,
        latitude,
        startDate,
        bio,
        name,
        picture,
      } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const createdEvent = await prisma.event.create({
        data: {
          locationString,
          longitude,
          latitude,
          startDate,
          endDate: startDate,
          description: bio,
          name,
          picture,
          creator: {
            connect: {
              id: userId,
            },
          },
          attendees: {
            connect: {
              id: userId,
            },
          },
        },
      });

      res.status(200).json(createdEvent);
    } catch (error) {
      console.error("Error creating event and RSVP'ing:", error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * Deletes an event with the specified ID.
   *
   * Request parameters:
   * - event_id: string representing the ID of the event to be deleted
   */
  deleteEvent: async (req, res) => {
    try {
      const eventId = req.params.event_id;

      // Check if the event exists
      const event = await prisma.event.findUnique({
        where: {
          id: eventId,
        },
      });

      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      // Delete the event
      await prisma.event.delete({
        where: {
          id: eventId,
        },
      });

      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
