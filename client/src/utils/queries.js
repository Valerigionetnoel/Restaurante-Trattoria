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