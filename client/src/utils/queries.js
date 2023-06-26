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
query getReviews{
    reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
    }
}
`