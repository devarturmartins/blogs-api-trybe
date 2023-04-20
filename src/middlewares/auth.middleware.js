const { validateToken } = require('../auth/validateJWT');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
    
    try {
        const isValid = validateToken(authorization);
        req.user = isValid.data;

        if (!isValid) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = authMiddleware;