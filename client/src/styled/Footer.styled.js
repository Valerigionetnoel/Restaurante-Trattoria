import styled from 'styled-components';

export const StyledFooter = styled.footer`
background-color: ${({theme}) => theme.colors.navy};
display: flex;
flex-direction: row;
color: white;
padding: 1em;
height: 100px;
width: 100%;
@media (max-width: 800px){
    position: fixed;
}
`;

