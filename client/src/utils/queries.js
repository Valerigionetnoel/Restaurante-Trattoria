import {gql} from '@apollo/client';

//Gets a single user
export const GET_USER = gql`
    query {
        user {
            _id
            username
            email
            reviews {
                _id
                reviewText
                createdAt
            }  
        }
    }
`;

//Gets all the reviews
export const GET_REVIEWS = gql`
query {
    reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
    }
}
`;

//Gets a single review
export const GET_SINGLE_REVIEW = gql`
query ($reviewId: ID!){
    singleReview(id: $reviewId) {
       reviews {
         _id
         reviewText
         reviewAuthor
         createdAt
       }
    }
}
`;


//Gets all the reservations for one user
export const GET_RESERVATIONS = gql `
query{     
    userReservations {
        _id
        reservationName
        reservationDate
        reservationTime
        reservationNumber
    }
}
`;

//For the donations page:
export const QUERY_CHECKOUT = gql`
query ($fullName: String!, $amount: Int!) {
    checkout (fullName: $fullName, amount: $amount)  {
        session
    }
}
`;

