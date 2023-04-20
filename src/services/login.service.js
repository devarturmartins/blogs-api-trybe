const { generateToken } = require('../auth/validateJWT');
const { User } = require('../models');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!email || !password) {
        return { status: 400, message: 'Some required fields are missing' };
    }

    if (!user || user.password !== password) {
        return { status: 400, message: 'Invalid fields' };
    }

    const token = generateToken({ data: { id: user.id, email: user.email } });
    return { status: 200, token };
};

module.exports = {
    login,
};