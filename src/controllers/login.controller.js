const { loginService } = require('../services');

const loginss = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginService.login(email, password);
        
        if (user.token) {
            return res.status(user.status).json({ token: user.token });
        }
        return res.status(user.status).json({ message: user.message });
    } catch (e) {
        return { status: 400, message: e.message };
    }
};
 
module.exports = {
    loginss,
};