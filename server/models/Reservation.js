const { Schema, model } = require('mongoose');

const reservationSchmea = new Schema({
    reservationName: {
        type: String,
        required: true,
        minlength: 3,
    },
    reservationDate : {
        type: String,
        required: true
    },
    reservationNumber: {
        type: Number,
        required: true
    },
    reservationTime: {
        type: Date,
        default: Date.now,
    }, 
});

const Reservation = model('Reservation', reservationSchmea);

module.exports = Reservation;