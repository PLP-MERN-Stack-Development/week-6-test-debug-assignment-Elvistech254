const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/profile', () => {
  it('returns 401 if no token is provided', async () => {
    const res = await request(app).get('/api/profile');
    expect(res.statusCode).toBe(401);
  });

  it('returns user data if token is valid', async () => {
    const res = await request(app)
      .get('/api/profile')
      .set('Authorization', 'Bearer test-token');

    expect(res.statusCode).toBe(200);
    expect(res.body.user).toEqual({ id: '12345', name: 'Test User' });
  });
});
