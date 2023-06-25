import styled from 'styled-components';

export const StyledContactContainer = styled.div`
display: flex;
flex-direction: column;
margin : 2em;
align-items: center;
text-align: center;
`;

export const StyledContactForm = styled.div`
input, textarea {
  width: 55%;
  margin: 1em;
  padding: 1.2rem;
  border-radius: 0.5rem;
  border: 2px solid ${({theme}) => theme.colors.orange};
  background-color: none;
  resize: none;
}
`;

export const StyledContactBottom = styled.div`
display: flex;
flex-direction: row;
width: 50%;
justify-content: space-around;
margin-top: 2em;
a{
    text-decoration: none;
    color: ${({theme}) => theme.colors.navy};
}
a:hover{
    color: ${({theme}) => theme.colors.darkOrange};
}
`;
