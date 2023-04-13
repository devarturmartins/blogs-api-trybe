const login = require('../services/login.service');

const loginss = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        
        if (user.token) {
        
            return res.status(user.status).json({ token: user.token })

        }

        return res.status(user.status).json({ message: user.message });

    } catch(e) {
        return { status: 400, message: e.message }
    }
}
 
module.exports = {
    loginss,
};