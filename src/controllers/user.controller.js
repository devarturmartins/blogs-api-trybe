const { userService } = require('../services');

const addUser = async (req, res) => {

    const { displayName, email, password, image } = req.body;

    try {

        const user = await userService.addUser(displayName, email, password, image);

        if (user.status === 400 || user.status === 409) {
                
            return res.status(user.status).json({ message: user.message });
        }

        return res.status(user.status).json({ token: user.token });

    } catch(e) {

        return res.status(400).json({ message: e.message });
    }
};

module.exports = {
    addUser,
};