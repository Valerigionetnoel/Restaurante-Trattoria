const { Schema, model } = require('mongoose');

const reservationSchmea = new Schema({
    reservationName: {
        type: String,
        required: true,
        minlength: 3,
    },
    reservationDate : {
        type: Date,
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