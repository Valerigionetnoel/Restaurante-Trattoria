import { StyledNavbar, LeftNavbar, RightNavbar, ExtendedNavbar, InnerNavbar, NavbarLink, NavbarSingleLink } from "../styled/Navbar.styled";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <StyledNavbar>
        <InnerNavbar>
        <LeftNavbar>
        <h1>Welcome to our project</h1>

        </LeftNavbar>
        <RightNavbar>
            <NavbarLink>
                <NavbarSingleLink to='/'>Home</NavbarSingleLink>
            </NavbarLink>

        </RightNavbar>
        </InnerNavbar>
        <ExtendedNavbar>

        </ExtendedNavbar>
        
    </StyledNavbar>
        );
}
 
export default Navbar;