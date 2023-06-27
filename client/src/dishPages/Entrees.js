import entreesList from './entreesList';
import EntreesPicture1 from './images/entreesPicture1.jpg';
import EntreesPicture2 from './images/entreesPicture2.jpg';

export default function Entrees() {
    return (
        <div>
            <h1>Entrees</h1>
            <div className='picture'>
                     <img className='examplePicture' src={EntreesPicture1} alt='Habanero BBQ Shrimp'></img>
                     <img className='examplePicture' src={EntreesPicture2} alt='Slow-Roasted Salmon With Fennel, Citrus, and Chiles'></img>
                </div>
            {entreesList.map(Entree => (
                <div className='dishCard'>
                    <h4 className=''>{Entree.name}</h4>
                    <p>{Entree.description}</p>
                    <p>{Entree.price}</p>
                </div>
            ))}




        </div>


    )
}