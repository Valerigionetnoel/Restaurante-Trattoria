const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        reviews: [Review]
        reservations: [Reservation]
    }
    type Review {
        _id: ID
        reviewText: String
        reviewAuthor: String
        createdAt: String
    }
    type Reservation {
        _id: ID
        reservationName: String
        reservationDate: String
        reservationNumber: String
        reservationTime: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReview(reviewText: String!): Review 
        addReservation(reservationDate: String!, reservationNumber: String!, reservationTime: String!): Reservation
        deleteReview(reviewId: ID!): Review
        deleteReservation(reservationId: ID!): Reservation
    }
    type Query {
        user: User
        userReservations: [Reservation]
        reviews: [Review]
        allReservations: [Reservation]
        allUsers: [User]
        singleReview(reviewId: ID!): [Review]
        checkout(fullName: String!, amount: Int!): Checkout
    } 

    type Checkout {
        session: ID
      }
`;

module.exports = typeDefs;