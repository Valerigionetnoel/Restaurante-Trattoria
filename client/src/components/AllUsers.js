import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../utils/queries";
import { AdminInfoDiv } from "../styled/Admin.styled";

const AllUsers = () => {
    const {loading, data} = useQuery(GET_ALL_USERS);
    let users = data?.allUsers || [];

    return ( 
        <>
        {loading ? 
        (<h3>Loading...</h3>) 
        : 
        ( 
            <>
        <h2>All Users</h2>
        {users.map(user => (
            <AdminInfoDiv>
                <h5>{user.username}</h5>
             </AdminInfoDiv>
        ))}
        </>
        
        )}
        
        </>
    );
}
 
export default AllUsers;