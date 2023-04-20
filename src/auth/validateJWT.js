const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret, jwtConfig);

    return token;
};

const validateToken = (token) => {
    if (!token) {
        return { status: 401, message: 'Token not found' };
    }

    const isValid = jwt.verify(token, secret);

    // if (!isValid) {
    //     return { status: 401, message: 'Expired or invalid token' }
    // }
    
    return isValid;
};

module.exports = {
    generateToken,
    validateToken,
};