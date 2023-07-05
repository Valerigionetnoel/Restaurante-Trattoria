import { useState } from "react";
import { AdminContainer, AdminButtonContainer, AdminInfoContainer } from "../styled/Admin.styled";
import AllReservations from "../components/AllReservations";
import AllUsers from "../components/AllUsers";

const AdminPage = () => {
    const[info, setInfo] = useState('Reservation');
    const setInfoContainer = () => {
        if(info === 'Reservation'){
            return <AllReservations />
        }
        if(info === 'Users'){
            return <AllUsers />
        }
    }

    return(
        <AdminContainer>
            <h3>Admin Page</h3>
            <AdminButtonContainer>
                <button className="button" onClick={() => setInfo('Reservation')}>Reservations</button>
                <button className="button" onClick={() => setInfo('Users')}>Users</button>
            </AdminButtonContainer>
            <AdminInfoContainer>
               {setInfoContainer()}
            </AdminInfoContainer>
        </AdminContainer>
    )

}

export default AdminPage;