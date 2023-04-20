const { userService } = require('../services');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    try {
        const user = await userService.addUser(displayName, email, password, image);
        if (user.status === 400 || user.status === 409) {
            return res.status(user.status).json({ message: user.message });
        }
        return res.status(user.status).json({ token: user.token });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
};
