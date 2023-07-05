import { useQuery } from "@apollo/client";
import { GET_ALL_RESERVATIONS } from "../utils/queries";

const AllReservations = () => {
    const {loading, data} = useQuery(GET_ALL_RESERVATIONS);
    console.log(data);


    return ( 
         <>
        {loading ? 
        (<h3>Loading...</h3>) 
        : 
        (<h2>All Reservations</h2>)}
        
        </>);
}
 
export default AllReservations;