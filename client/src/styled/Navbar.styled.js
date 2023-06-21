import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
    background-color: ${({theme}) => theme.colors.navy};
    width: 100%;
    color: white;
    height: ${(props) => (props.extended ? '100vh': '80px')};
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        height: 80px;
    }
`; 

export const LeftNavbar = styled.div`
flex: 30%;
display: flex;
align-items: center;
padding-left: 2%;
`;

export const RightNavbar = styled.div`
flex: 70%;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 5%;
`;

export const ExtendedNavbar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 700px){
    display: none;
}
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
@media (max-width: 700px){
    display: none;
}
`;

export const NavbarExtendedLink = styled(Link)`
color: white;
font-size: x-large;
text-decoration: none;
margin:10px;
`;
export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: white;
font-size: 2em;
cursor: pointer;
@media (min-width: 700px) {
    display: none;
}
`;