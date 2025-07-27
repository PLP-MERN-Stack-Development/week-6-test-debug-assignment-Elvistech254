const auth = require('../../src/middleware/auth');

test('auth returns 401 if no token', () => {
  const req = { header: jest.fn().mockReturnValue(null) };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();

  auth(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
});

test('auth allows valid token', () => {
  const req = { header: jest.fn().mockReturnValue('Bearer test-token') };
  const res = {};
  const next = jest.fn();

  auth(req, res, next);
  expect(req.user).toEqual({ id: '12345', name: 'Test User' });
  expect(next).toHaveBeenCalled();
});
