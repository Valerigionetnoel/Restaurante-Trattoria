import {gql} from '@apollo/client';

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