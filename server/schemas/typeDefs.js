const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        userReviews: [Review]
        userReservations: [Reservation]
    }

    type Review {
        _id: ID
        reviewText: String!
        reviewAuthor: [User]!
        createdAt: String
    }

    type Reservation {
        _id: ID
        reservationName: String
        reservationDate: String
        reservationNumber: Int
        reservationTime: String
    }

    type ReservationInput {
        _id: String
        reservationName: String
        reservationDate: String
        reservationNumber: Int
        reservationTime: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReview(reviewText: String!, reviewAuthor: String!): User
    }

    type Query {
        users: [User]
        user(username: String!): User
        reviews(username: String): [Review]
        review(reviewId: ID!): Review
    } 
`;

module.exports = typeDefs;