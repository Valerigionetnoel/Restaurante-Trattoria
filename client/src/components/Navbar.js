import { StyledNavbar, LeftNavbar, RightNavbar, ExtendedNavbar, InnerNavbar, NavbarLink, NavbarSingleLink, OpenLinksButton, NavbarExtendedLink, NavbarSingleLinkHome } from "../styled/Navbar.styled";
import { useState } from "react";
import Auth from '../utils/auth';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return ( 
        <>
        {Auth.loggedIn() ?
        (
            <>
            <StyledNavbar>
             <InnerNavbar>
             <LeftNavbar>
             <NavbarSingleLinkHome to='/' className='logo'>Restaurant</NavbarSingleLinkHome>
             </LeftNavbar>
             <RightNavbar>
                 <NavbarLink>
                     <NavbarSingleLink to='/menu'>Menu</NavbarSingleLink>
                     <NavbarSingleLink to='/reviews'>Reviews</NavbarSingleLink>
                     <NavbarSingleLink to='/contact'>Contact Us</NavbarSingleLink>
                     <NavbarSingleLink to='/location'>Location</NavbarSingleLink>
                     <NavbarSingleLink to='/customer'>Profile</NavbarSingleLink>
                     <NavbarSingleLink to='/' onClick={Auth.logout}>Logout</NavbarSingleLink>
                     <OpenLinksButton onClick={() => setNavbar((curr) => !curr)}>
                         {navbar ? <> &#10005; </> : <> &#8801; </>}
                         </OpenLinksButton>
                 </NavbarLink>
             </RightNavbar>
             </InnerNavbar>
             {navbar  && (
             <ExtendedNavbar>
             <NavbarExtendedLink to='/menu'>Menu</NavbarExtendedLink>
             <NavbarExtendedLink to='/reviews'>Reviews</NavbarExtendedLink>
             <NavbarExtendedLink to='/contact'>Contact Us</NavbarExtendedLink>
             <NavbarExtendedLink to='/location'>Location</NavbarExtendedLink>
             <NavbarExtendedLink to='/customer'>Profile</NavbarExtendedLink>
             <NavbarExtendedLink to='/' onClick={Auth.logout}>Logout</NavbarExtendedLink>
             </ExtendedNavbar>)
     }
             </StyledNavbar>
             </>
       
        ) : (
            <>
            <StyledNavbar>
             <InnerNavbar>
             <LeftNavbar>
             <NavbarSingleLinkHome to='/' className='logo'>Restaurant</NavbarSingleLinkHome>
             </LeftNavbar>
             <RightNavbar>
                 <NavbarLink>
                     <NavbarSingleLink to='/menu'>Menu</NavbarSingleLink>
                     <NavbarSingleLink to='/reviews'>Reviews</NavbarSingleLink>
                     <NavbarSingleLink to='/reservation'>Reservation</NavbarSingleLink>
                     <NavbarSingleLink to='/contact'>Contact Us</NavbarSingleLink>
                     <NavbarSingleLink to='/location'>Location</NavbarSingleLink>
                     <NavbarSingleLink to='/login'>Login</NavbarSingleLink>
                     <OpenLinksButton onClick={() => setNavbar((curr) => !curr)}>
                         {navbar ? <> &#10005; </> : <> &#8801; </>}
                         </OpenLinksButton>
                 </NavbarLink>
             </RightNavbar>
             </InnerNavbar>
             {navbar  && (
             <ExtendedNavbar>
                     <NavbarExtendedLink to='/menu'>Menu</NavbarExtendedLink>
                     <NavbarExtendedLink to='/reviews'>Reviews</NavbarExtendedLink>
                     <NavbarExtendedLink to='/reservation'>Reservation</NavbarExtendedLink>
                     <NavbarExtendedLink to='/contact'>Contact Us</NavbarExtendedLink>
                     <NavbarExtendedLink to='/location'>Location</NavbarExtendedLink>
                     <NavbarExtendedLink to='/login'>Login</NavbarExtendedLink>
             </ExtendedNavbar>)}
             </StyledNavbar>
             </>
        )
        }
        </>
        );
}
 
export default Navbar;