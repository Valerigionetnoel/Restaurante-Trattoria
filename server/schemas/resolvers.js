const { AuthenticationError } = require("apollo-server-express");
const { User, Review, Reservation } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log('Getting the user', context.user);
      if (context.user) {
        const user = await User.findById({ _id: context.user._id }).populate("reviews");
        return user;
      }
      throw new AuthenticationError("User is not logged in");
    },
    reviews: async (parent, args, context) => {
      console.log('Getting the reviews');
      const reviews = await Review.find().sort({ createdAt: -1 });
      console.log(reviews);
      return reviews;
    },
    singleReview: async (parent, args, context) => {
      console.log("Getting one review", args);
      const review = await Review.findById({ _id: args.reviewId });
      console.log("Returned review", review);
      return review;
    },
    userReservations: async (parent, args, context) => {
      console.log("Getting the reservations for", context.user.username);
      if (context.user) {
        const reservations = await Reservation.find({reservationName: context.user.username});
        console.log('RES', reservations);
        return reservations;
      }
      throw new AuthenticationError("Not able to get the reservations");
    },
  
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;

      // add this new Donation to the database using Donation model

      // const order = new Order({ products: args.products });
      // const line_items = [];

      // const { products } = await order.populate('products');

      // for (let i = 0; i < products.length; i++) {
      //   const product = await stripe.products.create({
      //     name: products[i].name,
      //     description: products[i].description,
      //     images: [`${url}/images/${products[i].image}`]
      //   });

      //   const price = await stripe.prices.create({
      //     product: product.id,
      //     unit_amount: products[i].price * 100,
      //     currency: 'usd',
      //   });

      //   line_items.push({
      //     price: price.id,
      //     quantity: 1
      //   });
      // }

      // dummy data
      const product = await stripe.products.create({
        name: "Donation",
        description: "Description of donation!",
        // images: [`${url}/images/${products[i].image}`]
      });

      const price = await stripe.prices.create({
        product: 123,
        unit_amount: args.amount * 100,
        currency: "usd",
      });

      const line_items = [
        {
          price: price.id,
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('Adding a user')
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log('Logging in a user');
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, { reviewText }, context) => {
      console.log('Adding a review', reviewText);
      if (context.user) {
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
      throw new AuthenticationError("You need to be logged in!");
    },
    addReservation: async (parent, { reservationName, reservationDate, reservationNumber , reservationTime }, context) => {
      console.log('Adding a reservation for ', reservationName);
      if (context.user) {
        const reservation = await Reservation.create({
          reservationName: context.user.username,
          reservationDate, reservationNumber , reservationTime
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reservations: reservation._id } }
        );
        return reservation;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    deleteReview: async (parent, { reviewId }) => {
      console.log("Deleting a review", reviewId);
      return Review.findOneAndDelete({ _id: reviewId });
    },
    deleteReservation: async (parent, args, context) => {
      console.log('Deleting reservation', args);
      const res = await Reservation.findByIdAndDelete({_id: args.reservationId});
      return res;
  },
  },
  
//These one's I'm still not sure if they work -V
//     updateReview: async (parent, args, context) => {
//       if (context.user) {
//           console.log('Review Updated!')
//           const review = Review.findByIdAndUpdate(
//               { _id: context.review._id },
//               { reviewText }
//           )
//           return review
//       }
//   },
 

};

module.exports = resolvers;
