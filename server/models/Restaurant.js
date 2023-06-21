const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    reservation: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant