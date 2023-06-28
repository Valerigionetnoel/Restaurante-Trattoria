import styled from 'styled-components';

export const StyledReservationContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: 2px solid red;


`;

export const StyledReservationParent = styled.div`
  width: 50%;
img{
  height: 100vh;

}

`

export const StyledReservationForm = styled.form`
width: 50%;
height: 100vh;
border: 2px solid ${({theme}) => theme.colors.orange};
`