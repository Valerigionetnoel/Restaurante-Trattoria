import appetizersList from './appetizersList';
import AppetizersPicture1 from './images/appetizerPicture1.jpg';
import AppetizersPicture2 from './images/appetizerPicture2.jpg';

export default function Appetizers() {
    return (
        <div>
            <h1>Appetizers</h1>
            <div className='picture'>
                    <img className='examplePicture' src={AppetizersPicture1} alt='Salt and pepper squid'></img>
                    <img className='examplePicture' src={AppetizersPicture2} alt='Smoky salmon tartare with lemon and capers'></img>
                </div>
            {appetizersList.map(appetizer => (
                <div className='dishCard'>
                    <h4 className=''>{appetizer.name}</h4>
                    <p>{appetizer.description}</p>
                    <p>{appetizer.price}</p>
                </div>
            ))}




        </div>


    )
}