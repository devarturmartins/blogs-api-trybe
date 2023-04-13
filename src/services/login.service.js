const { generateToken } = require('../auth/validateJWT');
const { User } = require('../models');

const login = async (username, password) => {

    const user = await User.findOne({ where: { username } });

    if (!username || !password) {
        return res.status(400).json({ status: 400,  message: 'Some required fields are missing' });
    }

    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' })
    }

    const token = generateToken({ id: user.id, email: user.email });

    return { status: 200, token };
};

module.exports = login;
