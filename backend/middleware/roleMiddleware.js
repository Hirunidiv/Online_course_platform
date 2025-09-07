// middleware/roleMiddleware.js
module.exports = function requireRole(...allowedRoles) {
  return (req, res, next) => {
    const user = req.user; // injected by authMiddleware after verifying JWT
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' });
    }
    next();
  };
};
