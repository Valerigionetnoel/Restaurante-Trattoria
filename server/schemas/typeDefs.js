const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        review: [Review]
        reservation: [Restaurant]
    }

    type Review {
        _id: ID
        reviewText: String
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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        reviews(username: String): [Review]
        review(reviewId: ID!): Review
    }
    
    type Mutation {
        
    }
`;

module.exports = typeDefs;