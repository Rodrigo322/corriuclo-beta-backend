const Reserva = require('../models/Reserva');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const reserva = await Reserva.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await reserva.populate('spot').populate('user').execPopulate();

        return res.json(reserva)
    }
};