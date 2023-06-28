import styled from 'styled-components';

export const StyledReservationContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width: 750px){
  display: flex;
  flex-direction: column-reverse;
}

`;

export const StyledReservationParent = styled.div`
  width: 50%;
img{
  height: 100vh;

}
@media (max-width: 750px){
  width: 100%;
}

`

export const StyledReservationForm = styled.form`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 2em;
justify-content: center;
h2{
  text-align: center;
}
input, .input{
  border: 2px solid ${({theme}) => theme.colors.orange};
  padding: 1.2em;
  border-radius: 5px;
  width: 20em;
}
@media (max-width: 750px){
  button{
    width: 60%;
  }
}
`;