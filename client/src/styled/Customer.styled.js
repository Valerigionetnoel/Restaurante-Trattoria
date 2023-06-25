import styled from 'styled-components';

export const StyledCustomer = styled.div`
height: 100vh;
display: flex;
flex-direction: row;
@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    img{
        max-width: 100%;
    }
}
`;

export const StyledCustomerRight = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
padding: 1em;

`;
export const CustomerReview = styled.div`
h2{
    padding-block: 0.5em;
}
h3{
    padding-block: 0.5em;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1em;
} 
textarea{
    border: 1px solid ${({theme}) => theme.colors.navy};
    border-radius: 5px;
    padding: 1.5em;
}

`;
export const OverflowMapped = styled.div`
overflow-x: scroll;
`;

export const CustomerMappedReviews = styled.div`
 border: none;
 box-shadow: 5px 5px 5px 5px ${({theme}) => theme.colors.lightGrey};
 padding: 2em;
 border-radius: 5px;
 

 margin: 1em;
 button {
    margin: 1em;
    width: 30%;
 }

`;