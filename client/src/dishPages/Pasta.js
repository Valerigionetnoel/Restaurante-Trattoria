import pastaList from './pastaList';
import PastaPicture1 from './images/pastaPicture1.jpg';
import PastaPicture2 from './images/pastaPicture2.jpg';


export default function Pasta() {
    return (
        <div>
            <h1>Pasta</h1>
            <div className='picture'>
                    <img className='examplePicture' src={PastaPicture1} alt='Salt and pepper squid'></img>
                    <img className='examplePicture' src={PastaPicture2} alt='Salt and pepper squid'></img>
                </div>
            {pastaList.map(Pasta => (
                <div className='dishCard'>
                    <h4 className=''>{Pasta.name}</h4>
                    <p>{Pasta.description}</p>
                    <p>{Pasta.price}</p>
                </div>
            ))}




        </div>


    )
}