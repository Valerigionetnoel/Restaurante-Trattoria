import {
  StyledReservationContainer,
  StyledReservationParent,
  StyledReservationForm,
} from "../styled/Reservation.styled";

import myImg from "../images/food/notUsed.jpg";

import { DatePicker, Space } from "antd";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const ReservationPage = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
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
          <StyledReservationForm>
          <h2>Find a table at Ristorante Trattoria</h2>

            <Space direction="vertical">
              <DatePicker onChange={onChange} required />
            </Space>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer
            components={['TimePicker']}>
              <DemoItem>
            <TimePicker views={['hours', 'minutes', 'AM/PM']} required/>
           </DemoItem>
         </DemoContainer>
        </LocalizationProvider>
        
              <input type="text" placeholder="Your Phone Number" required></input>
              <input type="number" placeholder="How many persons?" min="1" required ></input>

         <button type="submit" className="BOOK RESERVATION">
            Book Reservation
         </button>
           
          </StyledReservationForm>
    </StyledReservationContainer>
  );
};

export default ReservationPage;
