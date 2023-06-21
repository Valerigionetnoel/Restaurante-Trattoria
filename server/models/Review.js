const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    reviewText: {
        type: String,
        required: 'You need to leave a review!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    reviewAuthor: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Review = model('Review', reviewSchema);

module.exports = Review;