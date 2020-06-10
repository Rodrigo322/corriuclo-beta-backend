const mongoose = require('../database');

const ReservaSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
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

const User = mongoose.model('Reserva', ReservaSchema);

module.exports = User;

