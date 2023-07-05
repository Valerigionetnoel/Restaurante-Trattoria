import { useState } from "react";
import { AdminContainer, AdminButtonContainer, AdminInfoContainer } from "../styled/Admin.styled";
import AllReservations from "../components/AllReservations";
import AllUsers from "../components/AllUsers";

const AdminPage = () => {
    const[info, setInfo] = useState('Reservations');
    const setInfoContainer = () => {
        if('Reservation'){
            return <AllReservations />
        }
        if('Users'){
            return <AllUsers />
        }
    }


    return(
        <AdminContainer>
            <h3>Admin Page</h3>

            <AdminButtonContainer>
                <h5>Button Container</h5>
                <button className="button">Reservations</button>
                <button className="button">Users</button>
            </AdminButtonContainer>



            <AdminInfoContainer>
                <h6>Where the info will go</h6>
            </AdminInfoContainer>
        </AdminContainer>
    )

}

export default AdminPage;