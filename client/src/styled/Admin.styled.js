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
`;
