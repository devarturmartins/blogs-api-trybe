const { validateToken } = require('../auth/validateJWT');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ message: 'missing auth token' });
    }
    
    
    const isValid = validateToken(authorization);
    
    if (!isValid) {
        return res.status(401).json({ message: isValid });
    }
    
    next();
    }

module.exports = authMiddleware;