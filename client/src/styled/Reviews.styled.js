import styled from 'styled-components';


export const ReviewDiv = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
justify-content: start;
align-items: center;
height: 100vh;
h3{
    margin-block: 1em;
}
`;

export const EachReview = styled.div`
padding: 1.5em;
margin: 1em;
gap: 1em;
border: none;
box-shadow: 5px 5px 5px 5px ${({theme}) => theme.colors.lightGrey};
border-radius: 5px;
width: 80%;
h5{
    font-size: 1.3em;
}
h6{
    font-size: 1em;
    padding-top: 1em;
    color: ${({theme}) => theme.colors.darkGrey};
}
`;
