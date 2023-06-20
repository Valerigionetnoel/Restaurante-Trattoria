import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
    background-color: ${({theme}) => theme.colors.header};
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;

`; 

export const LeftNavbar = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;;
background-color: orange;
`;

export const RightNavbar = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 5%;
background-color: pink;

`;

export const ExtendedNavbar = styled.div`

`;

export const InnerNavbar = styled.div`
width: 100%;
height: 80px;
display: flex;

`;

export const NavbarLink = styled.div`
display: flex;
`;

export const NavbarSingleLink = styled(Link)`
color: white;
font-size: x-large;
text-decoration: none;
margin:10px;
`;