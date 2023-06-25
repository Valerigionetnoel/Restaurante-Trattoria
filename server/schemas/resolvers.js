const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async(parent, args, context) => {
            if(context.user){
              const user = await User.findById({_id: context.user._id});
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
        addReview: async (parent, {reviewText}, context) => {
            console.log('ADDING A REVIWEW ARGS', args);
            if(context.user){
                const user = await User.findOneAndUpdate({_id: context.user._id},
                    {$push: {reviews: reviewText}}, {new: true});
                 return user;
               }
               throw new AuthenticationError('You need to be logged to create a review');
        },
    }
};

module.exports = resolvers