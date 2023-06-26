import img8 from '../images/food/img8.jpg';
import Dishes from '../components/Dishes';
import { StyledMenuButtonContainer, StyledMenuContainer, StyledDishesContainer } from '../styled/Menu.styled';
import DishTypes from '../components/DishTypes';

const MenuPage = () => {


    return (
         <StyledMenuContainer>
            <div className='menuPictureDiv'>
                <img src={img8} alt='food' className='responsiveImg3'></img>
                <div className="menuBorder">
                <h2>Menu</h2>
                </div>
            </div>
            {/* <StyledMenuButtonContainer>
                <button className="button" onClick={() => handleTypeChange('Appetizers')}>Appetizers</button>
                <button className="button">Entrees</button>
                <button className="button">Desserts</button>
                <button className="button">Pasta</button>
                <button className="button">Pizza</button>
                <button className="button">Drinks</button>
                
            </StyledMenuButtonContainer> */}
            {/* <DishTypes /> */}

            <StyledDishesContainer>
                <Dishes />
            </StyledDishesContainer>




         </StyledMenuContainer>
        
        
        
        );
}
 
export default MenuPage;