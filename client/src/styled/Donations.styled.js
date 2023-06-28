import styled from 'styled-components';

export const DonationsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
margin: 3em;
`;

export const DonationsForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5em;
width: 60%;
h3{
    text-align: center;
}
.inputBox{
    padding: 1em;
}
span{
    padding: 1em;
    text-align: left;
}
input{
    padding: 1em;
    border: 1px solid ${({theme}) => theme.colors.orange};
    border-radius: 5px;
}
`;
