const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
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
}