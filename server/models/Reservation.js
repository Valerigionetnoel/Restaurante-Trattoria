const { Schema, model } = require('mongoose');

const reservationSchmea = new Schema({
    reservationName: {
        type: String,
        required: true,
        trim: true
    },
    reservationDate: {
        type: String,
        required: true,
        default: Date.now,
    },
    reservationNumber: {
        type: String,
        required: true
    },
    reservationTime: {
        type: String,
        required: true
    }, 
});

const Reservation = model('Reservation', reservationSchmea);

module.exports = Reservation;