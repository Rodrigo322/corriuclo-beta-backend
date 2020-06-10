const mongoose = require('../database');

const spotSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    empresa: {
        type: String,
    },
    salario: {
        type: Number,
    },
    cargos: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('Spot', spotSchema);

module.exports = User;

