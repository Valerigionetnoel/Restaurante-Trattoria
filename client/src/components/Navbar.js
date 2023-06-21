import { StyledNavbar, LeftNavbar, RightNavbar, ExtendedNavbar, InnerNavbar, NavbarLink, NavbarSingleLink, OpenLinksButton, NavbarExtendedLink } from "../styled/Navbar.styled";
import { useState } from "react";

//The rest of the links need to be imported on both sections here:

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return ( <StyledNavbar extended={navbar}>
        <InnerNavbar>
        <LeftNavbar>
        <NavbarSingleLink to='/' className='logo'>Restaurant</NavbarSingleLink>
        </LeftNavbar>
        <RightNavbar>
            <NavbarLink>
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

        {navbar  && (
        <ExtendedNavbar>
        <NavbarExtendedLink to='/' className="logo">Restaurant</NavbarExtendedLink>
        <NavbarExtendedLink to='/contact'>Contact Us</NavbarExtendedLink>
        <NavbarExtendedLink to='/location'>Location</NavbarExtendedLink>
        <NavbarExtendedLink to='/menu'>Menu</NavbarExtendedLink>
        <NavbarExtendedLink to='/login'>Login</NavbarExtendedLink>
        </ExtendedNavbar>)
}
    </StyledNavbar>
        );
}
 
export default Navbar;