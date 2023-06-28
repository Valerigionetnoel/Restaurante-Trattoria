import { useState } from 'react';
import DishTypes from './DishTypes';
import Appetizers from '../dishPages/Appetizers';
import Pasta from '../dishPages/Pasta';
import Entrees from '../dishPages/Entrees';
import Pizza from '../dishPages/Pizza';
import Desserts from '../dishPages/Desserts';
import Drinks from '../dishPages/Drinks';


export default function Dishes() {

    const [currentType, setCurrentPage] = useState('Appetizers');

    const renderType = () => {

        if (currentType === 'Appetizers') {
            return <Appetizers />;

        }
        if (currentType === 'Entrees') {
            return <Entrees />;

        }
        if (currentType === 'Desserts') {
            return <Desserts />;

        }
        if (currentType === 'Pasta') {
            return <Pasta />;

        }
        if (currentType === 'Pizza') {
            return <Pizza />;

        }
        return <Drinks />;

    };

    const handleTypeChange = (type) => setCurrentPage(type);

    return (
        <div>
            <DishTypes currentType={currentType} handleTypeChange={handleTypeChange} />
            {renderType()}
        </div>
    ); 


} 


