import { useQuery } from "@apollo/client";
import { GET_RESERVATIONS } from "../utils/queries";
import Auth from '../utils/auth';


const CustomerReservations = () => {
    const {loading, data} = useQuery(GET_RESERVATIONS);
    const reservationData = data?.reservation || {};
    console.log('DATA', reservationData);

   const {reservations} = reservationData;
    console.log('RES', reservations);

    return (
        <>
        {Auth.loggedIn() ?
        (
        
        <h1>Hi I'm the reservation page</h1>
        
        ): 
        (<h2>Login to see your reservations</h2>)}
        </>
    );
}
 
export default CustomerReservations;