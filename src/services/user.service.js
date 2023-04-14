const { User } = require('../models');
const { generateToken } = require('../auth/validateJWT');

const addUser = async (displayName, email, password, image) => {

    const findOne = await User.findOne({ where: { email } })
    console.log(findOne);

    if (findOne) {
        return { status: 409, message: "User already registered" };
    }

    const regexEmail = /\S+@\S+\.\S+/;

    if (displayName.length < 8) {
        return { status: 400, message: "\"displayName\" length must be at least 8 characters long" };
    }

    if (!regexEmail.test(email)) {
        return { status: 400, message: "\"email\" must be a valid email" };
    }

    if (password.length < 6) {
        return { status: 400, message: "\"password\" length must be at least 6 characters long" };
    };

    const user = await User.create({ displayName, email, password, image });
    
    const token = generateToken({ data:
        { 
            id: user.id,
            name: user.displayName,
            email: user.email,
            password: user.password,
            image: user.image,
        }
    });

    return { status: 201, token };
}

module.exports = {
    addUser
};

