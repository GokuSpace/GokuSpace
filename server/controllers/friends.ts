import { Request, Response } from 'express';
import prisma from '../../lib';

type StatusType = 'PENDING' | 'ACCEPTED' | 'REJECTED';
const getStatus = (req: Request): StatusType => {
  return typeof req.query.status === 'string'
    ? (req.query.status.toUpperCase() as StatusType)
    : 'PENDING';
};

export default {
  /**
   * Gets friends of user `user_id` with status `status`.
   * ```
   * {
   *  id: string,
   *  username: string,
   *  pictures: string[],
   *  latitude: number,
   *  longitude: number,
   * }[]
   * ```
   * Request query parameters:
   * - `status` - either `PENDING`, `ACCEPTED`, or `REJECTED`
   * - `page` - any non-negative integer
   * - `count` - any non-negative integer
   */
  getFriends: async (req: Request, res: Response) => {
    try {
      const status = getStatus(req);
      const page: number = Number.parseInt(req.query.page as string) || 0;
      const count: number = Number.parseInt(req.query.count as string) || 2;

      const friends = await prisma.user.findMany({
        where: {
          sendFriendRequests: {
            some: {
              recieverId: req.params.user_id,
              status,
            },
          },
        },
        select: {
          id: true,
          username: true,
          pictures: true,
          latitude: true,
          longitude: true,
        },
        skip: page * count,
        take: count,
      });

      res.status(200).json(friends);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  /**
   * Creates a new friendship connection with default status of `PENDING`.
   */
  createFriend: async (req: Request, res: Response) => {
    try {
      await prisma.friend.createMany({
        data: {
          senderId: req.params.sender_id,
          recieverId: req.params.receiver_id,
          status: 'PENDING',
        },
      });

      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  /**
   * Sets status of friends.
   * - `status` - either `PENDING`, `ACCEPTED`, or `REJECTED`
   */
  setStatus: async (req: Request, res: Response) => {
    try {
      const status = getStatus(req);
      await prisma.friend.updateMany({
        where: {
          AND: {
            senderId: req.params.sender_id,
            recieverId: req.params.receiver_id,
          },
        },
        data: {
          status,
        },
      });

      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  /**
   * Removes a friendship connection. Note that doing this deletes the connection as opposed to setting friendship status as `REJECTED`.
   */
  removeFriend: async (req: Request, res: Response) => {
    try {
      await prisma.friend.deleteMany({
        where: {
          AND: {
            senderId: req.params.sender_id,
            recieverId: req.params.receiver_id,
          },
        },
      });

      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};
