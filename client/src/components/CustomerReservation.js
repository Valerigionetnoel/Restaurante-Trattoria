import { useQuery } from "@apollo/client";
import { GET_RESERVATIONS } from "../utils/queries";
import Auth from '../utils/auth';
import { CustomerResDiv, CustomResEach } from "../styled/CustomerReservations.styled";


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
         <CustomerResDiv>
        <h3>Your Reservations</h3>  
        {reservations.map(res => (
            <CustomResEach>
                <h4>{res.reservationDate}</h4>
            </CustomResEach>
        ))}
        </CustomerResDiv>      
        )
        : 
        (
       <CustomerResDiv>
            <h2>Login to see your reservations</h2>
        </CustomerResDiv>   
        )}
        
        </>
    );
}
 
export default CustomerReservations;