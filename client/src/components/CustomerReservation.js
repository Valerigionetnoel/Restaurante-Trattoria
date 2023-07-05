import { useQuery } from "@apollo/client";
import { GET_RESERVATIONS } from "../utils/queries";
import { OverflowMapped } from "../styled/Customer.styled";
import { CustomerMappedReservations } from "../styled/CustomerReservations.styled";
//import Auth from '../utils/auth';

const CustomerReservations = () => {
    const {loading, data} = useQuery(GET_RESERVATIONS);

   return (
        <>
        <h3>Your Reservations:</h3>
        { loading ? ( <h3>Loading...</h3>): 
        (<OverflowMapped>
            {data.userReservations.map(res => (
                <CustomerMappedReservations>
                    <p>Date: {res.reservationDate}</p>
                    <p>Time: {res.reservationTime}</p>
                    <p>For {res.reservationNumber} People</p>
                    <button className="button">Cancel</button>
              </CustomerMappedReservations>
            ))}
        </OverflowMapped>

        )}
        </>
    );
}
 
export default CustomerReservations;