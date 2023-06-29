const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    donationFullName: {
        type: String,
        required: true,
    },
    donationEmail : {
        type: String,
        required: true
    },
    donationAddress: {
        type: String,
        required: true
    },
    donationCity: {
        type: String,
        required: true
    },
    donationState: {
        type: String,
        required: true
    },
    donationZipCode: {
        type: Number,
        required: true
    },
    donationAmount: {
        type: Number,
        required: true
    },
});

const Donation = model('Donation', donationSchema);

module.exports = Donation;