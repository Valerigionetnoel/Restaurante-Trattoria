import { StyledNavbar, LeftNavbar, RightNavbar, ExtendedNavbar, InnerNavbar, NavbarLink, NavbarSingleLink, OpenLinksButton, NavbarExtendedLink } from "../styled/Navbar.styled";
import { useState } from "react";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);




    return ( <StyledNavbar extended={navbar}>
        <InnerNavbar>
        <LeftNavbar>
        <h1>Welcome to our project</h1>

        </LeftNavbar>
        <RightNavbar>
            <NavbarLink>
                <NavbarSingleLink to='/'>Home</NavbarSingleLink>
                <OpenLinksButton onClick={() => setNavbar((curr) => !curr)}>
                    {navbar ? <> &#10005; </> : <> &#8801;</>}
                    </OpenLinksButton>
            </NavbarLink>

        </RightNavbar>
        </InnerNavbar>
        {navbar && (
        <ExtendedNavbar>
        <NavbarExtendedLink to='/'>Home</NavbarExtendedLink>
        </ExtendedNavbar>)
}
        
    </StyledNavbar>
        );
}
 
export default Navbar;