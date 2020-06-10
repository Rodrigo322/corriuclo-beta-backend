const mongoose = require('../database');

const useSchema = new mongoose.Schema({
    email: {
        type: String,
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

const User = mongoose.model('User', useSchema);

module.exports = User;

