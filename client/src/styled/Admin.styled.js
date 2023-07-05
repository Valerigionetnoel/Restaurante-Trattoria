import styled from 'styled-components';

export const AdminContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
margin-block: 0.5em;
text-align: center;
`;

export const AdminButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 1em;
margin: 1em;
button{
    width: 20%;
}
button:hover{
    width: 20%;
}
`;

export const AdminInfoContainer = styled.div`
border: 2px solid pink;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;
`;

export const AdminInfoDiv = styled.div`
gap: 1em;
border: none;
box-shadow: 5px 5px 5px 5px ${({theme}) => theme.colors.lightGrey};
border-radius: 5px;
width: 80%;
padding: 1em;
h5{
    font-size: 1em;
    text-align: left;
}

`;
