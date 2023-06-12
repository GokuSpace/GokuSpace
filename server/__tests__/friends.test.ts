import request from 'supertest';
import app from '../';
import prisma from '../../lib';

describe('Friends API Routes', () => {
  let server;
  const agent = request(app);

  beforeEach(() => {
    prisma.$connect();
    server = app.listen(3001);
  });

  afterEach((done) => {
    prisma.$disconnect();
    server.close(done);
  });

  it('should get be able to create a new friendship connection', async () => {
    await agent.post('/friends/test/test2').expect(201);

    const response = await agent.get('/users/test2/friends').expect(200);
    expect(response.text).toBeDefined();

    expect(JSON.parse(response.text)).toEqual([
      {
        id: 'test',
        username: 'test',
        pictures: [],
        latitude: 0,
        longitude: 0,
      },
    ]);
  });

  it('should be able to change status of friendship', async () => {
    // changes status to ACCEPTED and checks that it exists and PENDING friends are no more
    await agent
      .put('/friends/status/test/test2')
      .query({ status: 'ACCEPTED' })
      .expect(204);

    let response = await agent
      .get('/users/test2/friends')
      .query({ status: 'ACCEPTED' })
      .expect(200);
    expect(JSON.parse(response.text)).toEqual([
      {
        id: 'test',
        username: 'test',
        pictures: [],
        latitude: 0,
        longitude: 0,
      },
    ]);
    response = await agent
      .get('/users/test2/friends')
      .query({ status: 'PENDING' })
      .expect(200);
    expect(JSON.parse(response.text)).toHaveLength(0);

    // changes status to REJECTED and chacks that it exists and ACCEPTED friends are no more
    await agent
      .put('/friends/status/test/test2')
      .query({ status: 'REJECTED' })
      .expect(204);
    response = await agent
      .get('/users/test2/friends')
      .query({ status: 'REJECTED' })
      .expect(200);
    expect(JSON.parse(response.text)).toEqual([
      {
        id: 'test',
        username: 'test',
        pictures: [],
        latitude: 0,
        longitude: 0,
      },
    ]);
    response = await agent
      .get('/users/test2/friends')
      .query({ status: 'ACCEPTED' })
      .expect(200);
    expect(JSON.parse(response.text)).toHaveLength(0);
  });

  it('should remove friendship connection', async () => {
    await agent.delete('/friends/status/test/test2').expect(204);

    const response = await agent
      .get('/users/test2/friends')
      .query({ status: 'REJECTED' })
      .expect(200);
    expect(JSON.parse(response.text)).toEqual([]);
  });

  it('should respond with errors at invalid endpoints', async () => {
    await agent
      .get('/users/test2/friends')
      .query({ status: 'FAKE_STATUS' })
      .expect(500);
    await agent
      .put('/friends/status/test/test2')
      .query({ status: 'FAKE_STATUS' })
      .expect(500);
  });
});
