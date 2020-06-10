const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const { cargo } = req.query;

        const cargos = await Spot.find({ cargos: cargo });

        return res.json(cargos)
    },


    async store(req, res) {
        const { filename } = req.file;
        const { empresa, cargos, salario } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user) {
            return res.status(400).json({error: 'user not found'})
        }

        const spot = await Spot.create({
            user: user_id,
            img: filename,
            empresa,
            cargos: cargos.split(',').map(cargo => cargo.trim()),
            salario
        });
        
        return res.json(spot);
    }
};