const { User } = require('../models');
const { generateToken } = require('../auth/validateJWT');

// const validacao = (displayName, email, password) => {
//     const regexEmail = /\S+@\S+\.\S+/;
//     if (displayName.length < 8) {
//         return {
//             status: 400,
//             message: '"displayName" length must be at least 8 characters long',
//         };
//     }
//     if (!regexEmail.test(email)) {
//         return { status: 400, message: '"email" must be a valid email' };
//     }
//     if (password.length < 6) {
//         return {
//             status: 400,
//             message: '"password" length must be at least 6 characters long',
//         };
//     }
// };

const addUser = async (displayName, email, password, image) => {
    const findOne = await User.findOne({ where: { email } });
    if (findOne) {
        return { status: 409, message: 'User already registered' };
    }
    // validacao(displayName, email, password);
    const regexEmail = /\S+@\S+\.\S+/;
    if (displayName.length < 8) {
        return {
            status: 400,
            message: '"displayName" length must be at least 8 characters long',
        };
    }
    if (!regexEmail.test(email)) {
        return { status: 400, message: '"email" must be a valid email' };
    }
    if (password.length < 6) {
        return {
            status: 400,
            message: '"password" length must be at least 6 characters long',
        };
    }
    const user = await User.create({ displayName, email, password, image });
    const token = generateToken({ data:
        { 
            id: user.id,
            name: user.displayName,
            email: user.email,
            password: user.password,
            image: user.image,
        },
    });
    return { status: 201, token };
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserById = async (id) => {
    const userId = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return userId;
};

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
};