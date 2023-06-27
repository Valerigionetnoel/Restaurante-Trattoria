import drinksList from './drinksList';
import DrinkPicture1 from './images/drinkPicture1.jpg';
import DrinkPicture2 from './images/drinkPicture2.jpg';


export default function Drinks() {
    return (
        <div>
            <h1>Drinks</h1>
            <div className='picture'>
                    <img className='examplePicture' src={DrinkPicture1} alt='Salt and pepper squid'></img>
                    <img className='examplePicture' src={DrinkPicture2} alt='Salt and pepper squid'></img>
                </div>
            {drinksList.map(Drinks => (
                <div className='dishCard'>
                    <h4 className=''>{Drinks.name}</h4>
                    <p>{Drinks.description}</p>
                    <p>{Drinks.price}</p>
                </div>
            ))}




        </div>


    )
}