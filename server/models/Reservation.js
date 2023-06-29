const { Schema, model } = require('mongoose');

const reservationSchmea = new Schema({
    reservationName: {
        type: String,
    },
    reservationDate: {
        type: String,
        default: Date.now,
    },
    reservationNumber: {
        type: Number,
        required: true
    },
    reservationTime: {
        type: String,
        required: true
    }, 
});

const Reservation = model('Reservation', reservationSchmea);

module.exports = Reservation;