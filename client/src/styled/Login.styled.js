import styled from 'styled-components';

export const StyledLogin = styled.form`
display: flex;
flex-direction: column;
gap: 0.5em;
 input{
    border: 1px solid ${({theme}) => theme.colors.orange};
    width: 70%;
    border-radius: 5px;
    padding: 0.4em;
 }
`;




