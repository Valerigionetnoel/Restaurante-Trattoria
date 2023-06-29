import {
  StyledReservationContainer,
  StyledReservationParent,
  StyledReservationForm,
} from "../styled/Reservation.styled";
import myImg from "../images/food/notUsed.jpg";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_RESERVATION } from "../utils/mutations";
import Auth from '../utils/auth';

const ReservationPage = () => {
  console.log('On the res page');
   //For adding the reservation:
  const [reservationDate, setReservationDate] = useState('Monday');
  const [reservationTime, setReservationTime] = useState('01:00');
  const [reservationNumber, setReservationNumber] = useState(1);

  const [addReservation] = useMutation(ADD_RESERVATION);
  console.log('DATE',reservationDate, 'NUM', reservationNumber, 'TIME', reservationTime);

  const handleSaveReservation = async() => {
    console.log('Submitting the res form');
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
        console.log(data);

    } catch(error){
        console.error(error);
    }}

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

      <label>Phone Number:</label>
      <input type="text" placeholder="Your Phone Number" required></input>

      <label>How Many Persons:</label>
      <input
            type="number"
            placeholder="How many persons?"
            min="1"
            value={reservationNumber}
            onChange={(e)=> setReservationNumber(e.target.value)} 
            required
          ></input>

        <label>Reservation Date:</label>
           <select value={reservationDate}
                onChange={(e)=> setReservationDate(e.target.value)}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select> 

        <label>Reservation Time:</label>
        <select name="hours" value={reservationTime}
                onChange={(e)=> setReservationTime(e.target.value)}>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
                <option value="03:00">03:00</option>
                <option value="04:00">04:00</option>
                <option value="05:00">05:00</option>
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
              </select> 
   
          <button type="submit" className="button">
            Book Reservation
         </button>
      </StyledReservationForm>
    </StyledReservationContainer>
  );
};

export default ReservationPage;
