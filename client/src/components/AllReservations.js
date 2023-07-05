import { useQuery } from "@apollo/client";
import { GET_ALL_RESERVATIONS } from "../utils/queries";

const AllReservations = () => {
    const {loading, data} = useQuery(GET_ALL_RESERVATIONS);
    let reservations = data?.allReservations || [];

    return ( 
         <>
        {loading ? 
        (<h3>Loading...</h3>) 
        : 
        (
         <>
        <h2>All Reservations</h2>
        
        {reservations.map(res => (
            <div>
                <h5>{res.reservationName}</h5>
            </div>
        ))}
        
        </>
        
        )}
        
        </>);
}
 
export default AllReservations;