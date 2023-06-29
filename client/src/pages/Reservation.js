import {
  StyledReservationContainer,
  StyledReservationParent,
  StyledReservationForm,
} from "../styled/Reservation.styled";
import myImg from "../images/food/notUsed.jpg";
//import { DatePicker, Space } from "antd";
//import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { MobileTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_RESERVATION } from "../utils/mutations";
import Auth from '../utils/auth';

const ReservationPage = () => {
  //const [checkDate, setCheckDate] = useState(false);

  const [reservationDate, setReservationDate] = useState();
  const [reservationTime, setReservationTime] = useState();
  const [reservationNumber, setReservationNumber] = useState(1);

 // const onChange = (date, dateString) => {
  //  setCheckDate(true);
  //};
  console.log('FORM RES VALUE', 'DATE', reservationDate, 'NUM', reservationNumber, 'TIMES', reservationTime);

  //For adding the reservation:
  const [addReservation] = useMutation(ADD_RESERVATION);

  const handleSaveReservation = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;    
    if (!token) {
      return false;
    }
    try{
        const {data} = await addReservation({
          variables: {
            reservationName: Auth.getProfile().data.username,
            reservationDate,
            reservationNumber,
            reservationTime
          }
        });

    } catch(error){
        console.error(error);
    }
    }

  return (
    // date pickers later
    <StyledReservationContainer>
      <StyledReservationParent>
        <img
          src={myImg}
          alt="Reservation Page"
          className="responsiveImg2"
        ></img>
      </StyledReservationParent>

      {/* FORM */}
      <StyledReservationForm onSubmit={handleSaveReservation}>
      <h2>Find a Table</h2>
      <input type="text" placeholder="Your Phone Number" required></input>

      <input
            type="number"
            placeholder="How many persons?"
            min="1"
            value={reservationNumber}
            onChange={(e)=> setReservationNumber(e.target.value)} 
            required
          ></input>

            
           <select name="days" value={reservationDate}
                onChange={(e)=> setReservationDate(e.target.value)}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select> 

        <select name="hours" value={reservationTime}
                onChange={(e)=> setReservationTime(e.target.value)}>
                <option value="01">01:00</option>
                <option value="02">02:00</option>
                <option value="03">03:00</option>
                <option value="04">04:00</option>
                <option value="05">05:00</option>
                <option value="06">06:00</option>
                <option value="07">07:00</option>
                <option value="08">08:00</option>
              </select> 
   

          <button type="submit" className="button">
            Book Reservation
         </button>

      </StyledReservationForm>
    </StyledReservationContainer>
  );
};

export default ReservationPage;
