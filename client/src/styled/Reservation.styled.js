import styled from 'styled-components';

export const StyledReservationContainer = styled.div`
display: flex;
flex-direction: column;
border-box;
margin : 2em;
align-items: center;
text-align: center;
// min-height: 100vh;
padding-bottom: 50px;
`;

// export const StyledReservationCards = styled.div`
// display: grid;
// grid-template-columns: 420px;
// `;

// export const StyledReservationRight = styled.div`
// text align: center;
// color: black;
// padding: 25px 0 10px 0;
// font-size: 26px;
// font-weight: 500;
// `

export const StyledReservationParent = styled.div`
display: flex;
flex-direction: row;
`

export const StyledReservationForm = styled.form`
input, textarea, select, button {
  width: 55%;
  margin: 1em;
  padding: 1.2rem;
  border-radius: 0.5rem;
  border: 2px solid ${({theme}) => theme.colors.orange};
  background-color: none;
  resize: none;

  // display: flex;
  // flex-direction: column;
  // flex-wrap: no-wrap;

`