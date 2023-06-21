import { StyledNavbar, LeftNavbar, RightNavbar, ExtendedNavbar, InnerNavbar, NavbarLink, NavbarSingleLink, OpenLinksButton, NavbarExtendedLink } from "../styled/Navbar.styled";
import { useState } from "react";

//The rest of the links need to be imported on both sections here:

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return ( <StyledNavbar extended={navbar}>
        <InnerNavbar>
        <LeftNavbar>
        <h1>Restaurant</h1>
        </LeftNavbar>
        <RightNavbar>
            <NavbarLink>
                <NavbarSingleLink to='/'>Home</NavbarSingleLink>
                <NavbarSingleLink to='/contact'>Contact Us</NavbarSingleLink>
                <NavbarSingleLink to='/location'>Location</NavbarSingleLink>
                <NavbarSingleLink to='/menu'>Menu</NavbarSingleLink>
                <NavbarSingleLink to='/login'>Login</NavbarSingleLink>
                <OpenLinksButton onClick={() => setNavbar((curr) => !curr)}>
                    {navbar ? <> &#10005; </> : <> &#8801; </>}
                    </OpenLinksButton>
            </NavbarLink>
        </RightNavbar>
        </InnerNavbar>


        {navbar && (
        <ExtendedNavbar>
        <NavbarExtendedLink to='/'>Home</NavbarExtendedLink>
        <NavbarSingleLink to='/contact'>Contact Us</NavbarSingleLink>
        <NavbarSingleLink to='/location'>Location</NavbarSingleLink>
        <NavbarSingleLink to='/menu'>Menu</NavbarSingleLink>
        <NavbarSingleLink to='/login'>Login</NavbarSingleLink>
        </ExtendedNavbar>)
}
    </StyledNavbar>
        );
}
 
export default Navbar;