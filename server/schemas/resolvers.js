const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById({ _id: context.user._id }).populate('reviews');
                return user;
            }
            throw new AuthenticationError('User is not logged in')
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            console.log('Logging in')
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

        addReview: async (parent, { reviewText }, context) => {
            if (context.user) {
                console.log('Creating the review', reviewText);
                const review = await Review.create({
                    reviewText,
                    reviewAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { reviews: review._id } }
                );
                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        //This needs to be completed
        addReservation: async (parent, { reservationName, reservationDate, reservationNumber, reservationTime }, context) => {
            console.log('Adding a reservation', { reservationName, reservationDate, reservationNumber, reservationTime });
            if (context.user) {
                console.log('Creating the reservation', reservationName);
                const reservation = await Reservation.create({
                    reservationName,
                    reservationDate,
                    reservationNumber,
                    reservationTime
                });
                return reservation;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteReview: async (parent, { reviewId }) => {
            console.log('Deleting a review', reviewId);
            return Review.findOneAndDelete({ _id: reviewId });
        },

        deleteReservation: async (parent, { reservationId }) => {
            console.log('Deleting reservation', reservationId);
            return Reservation.findOneAndDelete({ _id: reservationId })
        },

        // Not sure if this is the way to do this ＞﹏＜
        updateReview: async (parent, args, context) => {
            if (context.user) {
                console.log('Review Updated!')
                const review = Review.findByIdAndUpdate(
                    { _id: context.review._id },
                    { reviewText }
                )
                return review
            }
        }
    },
};

module.exports = resolvers