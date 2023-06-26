import img8 from '../images/food/img8.jpg';
import { StyledMenuButtonContainer, StyledMenuContainer } from '../styled/Menu.styled';

const MenuPage = () => {

    return (
         <StyledMenuContainer>
            <div className='menuPictureDiv'>
                <img src={img8} alt='food' className='responsiveImg3'></img>
                <div className="menuBorder">
                <h2>Menu</h2>
                </div>
            </div>
            <StyledMenuButtonContainer>
                <button className="button">Appetizers</button>
                <button className="button">Entrees</button>
                <button className="button">Desserts</button>
                <button className="button">Pasta</button>
                <button className="button">Pizza</button>
                
            </StyledMenuButtonContainer>




         </StyledMenuContainer>
        
        
        
        );
}
 
export default MenuPage;