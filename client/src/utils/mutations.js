import {gql} from '@apollo/client';

//Login
export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

//Signup
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

//Add a review
export const ADD_REVIEW = gql`
mutation addReview($reviewText: String!){
    addReview(reviewText: $reviewText){
            _id
            reviewText
            reviewAuthor
            createdAt
    }
}
`;

//Add a reservation
export const ADD_RESERVATION = gql`
mutation addReservation($reservationDate: String!, $reservationNumber: String!, $reservationTime: String!){
    addReservation(reservationDate: $reservationDate, reservationNumber: $reservationNumber, reservationTime: $reservationTime){
        _id
        reservationName
        reservationDate
        reservationNumber
        reservationTime
    }
}
`;

//Delete a review
export const DELETE_REVIEW = gql`
mutation deleteReview($reviewId: ID!){
    deleteReview(reviewId: $reviewId){
        _id
        reviewText
        reviewAuthor
        createdAt
    }
}
`
//Delete a reservation
