import React from 'react';
import pizzaList from './pizzaList';
import PizzaPicture1 from './images/pizzaPicture1.jpg';
import PizzaPicture2 from './images/pizzaPicture2.jpg';


export default function Pizza() {
    return (
        <div>
            <h1>Pizza</h1>
            <div className='picture'>
                    <img className='examplePicture' src={PizzaPicture1} alt='Salt and pepper squid'></img>
                    <img className='examplePicture' src={PizzaPicture2} alt='Salt and pepper squid'></img>
                </div>
            {pizzaList.map(Pizza => (
                <div className='dishCard'>
                    <h4 className=''>{Pizza.name}</h4>
                    <p>{Pizza.description}</p>
                    <p>{Pizza.price}</p>
                </div>
            ))}




        </div>


    )
}