import { useQuery } from "@apollo/client";
import { GET_ALL_RESERVATIONS } from "../utils/queries";
import { AdminInfoDiv } from "../styled/Admin.styled";

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
            <AdminInfoDiv>
             <h5>Customer: {res.reservationName}</h5>
             <h5>Time: {res.reservationTime}</h5>
             <h5>Date: {res.reservationDate}</h5>
             <h5>People: {res.reservationNumber}</h5>
             </AdminInfoDiv>
        ))}
        
        </>
        
        )}
        
        </>);
}
 
export default AllReservations;