import styled from 'styled-components';

export const StyledCustomer = styled.div`
height: 100vh;
display: flex;
flex-direction: row;


`;
export const StyledCustomerRight = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
padding: 1em;

`;
export const CustomerReview = styled.div`

form{
    display: flex;
    flex-direction: column;
    gap: 1em;
} 
textarea{
    border: 2px solid ${({theme}) => theme.colors.navy};
    border-radius: 5px;
    padding: 1em;
}

`;


export const CustomerMappedReviews = styled.div`

`;