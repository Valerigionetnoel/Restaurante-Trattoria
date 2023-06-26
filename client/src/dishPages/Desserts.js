import React from 'react';
import dessertsList from './dessertsList';
import DessertPicture1 from './images/dessertPicture1.jpg';
import DessertPicture2 from './images/dessertPicture2.jpg';


export default function Desserts() {
    return (
        <div>
            <h1>Desserts</h1>
            <div className='picture'>
                    <img className='examplePicture' src={DessertPicture1} alt='Salt and pepper squid'></img>
                    <img className='examplePicture' src={DessertPicture2} alt='Salt and pepper squid'></img>
                </div>
            {dessertsList.map(Desserts => (
                <div className='dishCard'>
                    <h4 className=''>{Desserts.name}</h4>
                    <p>{Desserts.description}</p>
                    <p>{Desserts.price}</p>
                </div>
            ))}




        </div>


    )
}