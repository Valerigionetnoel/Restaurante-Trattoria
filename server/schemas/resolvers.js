const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Reservation} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('reviews');
        },
        user: async(parent, args, context) => {
            if(context.user){
              const user = await User.findById({_id: context.user._id});
              return user;
            } 
                throw new AuthenticationError('User is not logged in')
        
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
    },
};

module.exports = resolvers