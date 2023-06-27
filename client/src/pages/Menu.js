import img8 from '../images/food/img8.jpg';
import Dishes from '../components/Dishes';
import {StyledMenuContainer, StyledDishesContainer } from '../styled/Menu.styled';

const MenuPage = () => {

    return (
         <StyledMenuContainer>
            <div className='menuPictureDiv'>
                <img src={img8} alt='food' className='responsiveImg3'></img>
                <div className="menuBorder">
                <h2>Menu</h2>
                </div>
            </div>
            <StyledDishesContainer>
                <Dishes />
            </StyledDishesContainer>
         </StyledMenuContainer>
        );
}
 
export default MenuPage;