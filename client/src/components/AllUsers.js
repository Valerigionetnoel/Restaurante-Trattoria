import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../utils/queries";
const AllUsers = () => {
    const {loading, data} = useQuery(GET_ALL_USERS);
    console.log(data);

    return ( 
        <>
        {loading ? 
        (<h3>Loading...</h3>) 
        : 
        ( <h2>All Users</h2>)}
        
        </>
    );
}
 
export default AllUsers;