import React from 'react';
import { StyledMenuButtonContainer} from '../styled/Menu.styled';

function DishTypes({ currentType, handleTypeChange }) {
    return (
        <StyledMenuButtonContainer>
            <button className="button" 
                onClick={() => handleTypeChange('Appetizers')}
            >
                Appetizers
            </button>
            
            <button className="button"
                onClick={() => handleTypeChange('Entrees')}
            >Entrees</button>
            <button className="button"
                onClick={() => handleTypeChange('Desserts')}
            >Desserts</button>
            <button className="button"
                onClick={() => handleTypeChange('Pasta')}
            >Pasta</button>
            <button className="button"
                onClick={() => handleTypeChange('Pizza')}
            >Pizza</button>

            <button className="button"
                onClick={() => handleTypeChange('Drinks')}
            >Drinks</button>

        </StyledMenuButtonContainer>

    );
}

export default DishTypes;