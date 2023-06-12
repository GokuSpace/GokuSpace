import request from 'supertest';
import app from '../';
import prisma from '../../lib';

describe('GET /users/:user_id/events', () => {
  let server;
  const agent = request(app);

  beforeEach(() => {
    prisma.$connect();
    server = app.listen(3000);
  });

  afterEach((done) => {
    prisma.$disconnect();
    server.close(done);
  });
  it('should respond with 200 and events if user exists', async () => {
    const res = await agent
      .get('/users/clisl6cec0000jae236bin7ic/events')
      .query({
        distance: 'all',
        startDate: '2023-06-14T00:00:00Z',
        endDate: '2023-06-16T00:00:00Z',
        page: '0',
        count: '10',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toMatchObject({
      id: '1',
      name: 'NYC Meeting',
      latitude: 40.712776,
      longitude: -74.005974,
      startDate: '2023-06-15T10:00:00.000Z',
      picture: '',
      friendsGoing: [
        {
          id: 'clisl6ced0002jae2l4lpoc6m',
          username: 'janedoe',
          pictures: [],
        },
        {
          id: 'clisl6ced0004jae2qso5v4c2',
          username: 'alicesmith',
          pictures: [],
        },
      ],
      attendees: 3,
    });
  });

  it('should not return events that are outside date range', async () => {
    const response = await request(app)
      .get(`/users/clisl6cec0000jae236bin7ic/events`)
      .query({
        distance: 'all',
        startDate: '2023-06-14T00:00:00Z',
        endDate: '2023-06-14T00:00:00Z',
        page: '0',
        count: '10',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should query by values for distance', async () => {
    // Checks that far away events will not be selected by short distances
    let response = await request(app)
      .get('/users/clisl6ced0002jae2l4lpoc6m/events')
      .query({
        distance: 50,
        startDate: '2023-06-14T00:00:00Z',
        endDate: '2023-06-16T00:00:00Z',
        page: '0',
        count: '10',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);

    // But that those far away events will get properly selected still
    response = await request(app)
      .get('/users/clisl6ced0002jae2l4lpoc6m/events')
      .query({
        distance: 5000,
        startDate: '2023-06-14T00:00:00Z',
        endDate: '2023-06-16T00:00:00Z',
        page: '0',
        count: '10',
      });

    expect(response.status).toBe(200);
    expect(response.body[0]).toEqual({
      id: '1',
      name: 'NYC Meeting',
      latitude: 40.712776,
      longitude: -74.005974,
      startDate: '2023-06-15T10:00:00.000Z',
      picture: '',
      friendsGoing: [
        {
          id: 'clisl6cec0000jae236bin7ic',
          username: 'johndoe',
          pictures: [],
        },
        {
          id: 'clisl6ced0004jae2qso5v4c2',
          username: 'alicesmith',
          pictures: [],
        },
      ],
      attendees: 3,
    });
  });

  it('should respond with 404 if user does not exist', async () => {
    const res = await agent.get('/users/9999/events');
    expect(res.statusCode).toEqual(404);
  });
});
