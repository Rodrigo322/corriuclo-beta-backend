const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }
         
        return res.json({ user });
    },

    async index(req, res) {
        const users = await User.find();

        return res.json({ users });
    },

    async update(req, res) {
        const { email } = req.body;
        const { id } = req.params;

        const user = await User.updateOne({ email }, { where: { id } });

        return res.json({ user });
    }
};