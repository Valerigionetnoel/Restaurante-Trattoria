import { useQuery } from "@apollo/client";
import { GET_RESERVATIONS } from "../utils/queries";
//import Auth from '../utils/auth';

const CustomerReservations = () => {
    console.log('ON THE RESERVATIONS PAGE')
    const {loading, data} = useQuery(GET_RESERVATIONS);
    console.log('RES DATA', data, 'LOADING', loading);
    const reservations = data?.userReservations || {};
    console.log('DATA', reservations);

    if(loading){
     <h3>Loading...</h3>
    }

   return (
        <>
        {reservations ? (
            <div>
            {reservations.map(res => (
                <div>
                <p>{res.reservationTime}</p>
                </div>
            ))}
           </div>
        ) : (<h6>You have no reservations</h6>)}
        
        </>
    );
}
 
export default CustomerReservations;