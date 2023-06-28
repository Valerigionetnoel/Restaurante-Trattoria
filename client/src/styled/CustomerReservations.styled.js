import styled from 'styled-components';

export const CustomerResDiv = styled.div`
display: flex;
flex-direction: column;
margin: 2em;
`;

export const CustomResEach = styled.div`
border: 2px solid ${({theme}) => theme.colors.orange};
border-radius: 5px;
padding: 1em;
margin: 1em;
`;
