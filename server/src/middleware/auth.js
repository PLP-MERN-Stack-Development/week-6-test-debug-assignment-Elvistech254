const auth = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token || token !== 'Bearer test-token') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Simulate user data attached to request
    req.user = { id: '12345', name: 'Test User' };
    next();
  };
  
  module.exports = auth;
  