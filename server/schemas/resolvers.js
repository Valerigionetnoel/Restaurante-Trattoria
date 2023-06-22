const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Reservation} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('reviews');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('reviews');
        },
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Review.find(params).sort({ createdAt: -1 });
        },
        review: async (parent, { reviewId }) => {
            return Review.findOne({ _id: reviewId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);

            return { token, user };
        },
        addReview: async (parent, { reviewText, reviewAuthor}) => {
            const review = await Review.create({ reviewText, reviewAuthor });

            await User.findOneAndUpdate(
                { username: reviewAuthor },
                { $addToSet: {reviews: review._id } }
            );
            return review;
        },
        addReservation: async(parent, { reservationName, reservationDate, reservationNumber, reservationTime }) => {
            const reservation = await Reservation.create({reservationName, reservationDate, reservationNumber, reservationTime});

            // await User.findOneAndUpdate(
            //     {username: reservationName},
            //     { $addToSet: {reservations: reservation._id}}
            // );
            return reservation;
        },
        updateReview: async(parent, {}) => {

        },
        deleteReview: async(parent, {reviewId}, context) => {
            if (context.user) {
                const review = await Review.findByIdAndDelete({
                    _id: reviewId,
                    reviewAuthor: context.user.username
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { reviews: review._id}}
                );

                return review;
            }
        },
        deleteReservation: async(parent, {}) => {

        },
    },
};

module.exports = resolvers