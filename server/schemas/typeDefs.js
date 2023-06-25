const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        reviews: [Review]
    }
    type Review {
        _id: ID
        reviewText: String
        reviewAuthor: String
        createdAt: String
    }
    type Auth {
        token: ID!
        user: User
    }
   
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReview(reviewText: String!): Review 
    }

    type Query {
        user: User
    } 
`;

module.exports = typeDefs;