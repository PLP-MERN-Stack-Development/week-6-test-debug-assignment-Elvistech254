const mongoose = require('mongoose');
const User = require('../../src/models/User');

describe('User model', () => {
  it('creates a user instance', () => {
    const user = new User({ name: 'Alice', email: 'alice@example.com' });
    expect(user.name).toBe('Alice');
    expect(user.email).toBe('alice@example.com');
  });
});
