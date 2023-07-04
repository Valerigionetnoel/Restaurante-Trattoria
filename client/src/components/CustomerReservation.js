import { useQuery } from "@apollo/client";
import { GET_RESERVATIONS } from "../utils/queries";
//import Auth from '../utils/auth';

const CustomerReservations = () => {
    const {loading, data} = useQuery(GET_RESERVATIONS);
    const reservationData = data?.reservation || {};
    console.log('DATA', reservationData);
    const {reservations} = reservationData;
    console.log('RES', reservations);

   if(loading){
    <h3>Loading...</h3>
   }

   return (
        <>
         {reservations ? (
            <div>
            {reservations.map(res=> (
                <div key={res.reservationId}>
                <p>{res.reservationDate}</p>
                <button className="button">Delete</button>
                </div>
            ))}
            </div>
        ) : (<h6>You have no reservations</h6>)}
        
        </>
    );
}
 
export default CustomerReservations;