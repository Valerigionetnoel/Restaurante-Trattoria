const { AuthenticationError } = require('apollo-server-express');
const { User, Review} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async(parent, args, context) => {
            if(context.user){
              const user = await User.findById({_id: context.user._id}).populate('reviews');
              return user;
            } 
                throw new AuthenticationError('User is not logged in')
        
        },
        reviews: async (parent, args, context) => {
          console.log('Getting all of the reviews!');
          const reviews = await Review.find().sort({createdAt: -1});
          console.log(reviews);
          return reviews;
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
          addReservation: async (parent, args, context) => {
            console.log('Adding a reservation', args);
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
          deleteReview: async (parent, { reviewId }) => {
            console.log('Deleting a review', reviewId);
            return Review.findOneAndDelete({ _id: reviewId });
          },
      
      
    }
};

module.exports = resolvers