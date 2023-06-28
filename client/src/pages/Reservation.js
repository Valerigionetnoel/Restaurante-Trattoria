import {
  StyledReservationContainer,
  StyledReservationParent,
  StyledReservationForm,
} from "../styled/Reservation.styled";

import myImg from "../images/food/notUsed.jpg";

import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";

const ReservationPage = () => {
  const [checkDate, setCheckDate] = useState(false);
  console.log(checkDate);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    console.log(checkDate);
    setCheckDate(true);
  };
  return (
    // date pickers later
    <StyledReservationContainer>
      <h2>Find a table at RESTAURANT</h2>
      <StyledReservationParent>
        <div>
          <img
            // src="https://placehold.co/600x400?text=Reservation+Page"
            src={myImg}
            alt="Reservation Page"
            width="400"
            height="537"
          ></img>
        </div>
        <div>
          <h3>RESERVATIONS</h3>
          {/* FORM */}
          <StyledReservationForm>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
              <LocalizationProvider
              dateAdapter={AdapterDayjs}
              >
                
              <MobileTimePicker views={["hours", "minutes", "AM/PM"]} sx={{
      "& fieldset": { border: 'none' },
    }}/>
            </LocalizationProvider>
            </Space>

            

            {/* <div>
              {/* <select name="days">
                <option value="day-select">Select Day</option>
                <option value="Monday">Monday"</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select> */}

            {/* <select name="hours">
                <option value="hour-select">Select Hour</option>
                <option value="01">01:00</option>
                <option value="02">02:00</option>
                <option value="03">03:00</option>
                <option value="04">04:00</option>
                <option value="05">05:00</option>
                <option value="06">06:00</option>
                <option value="07">07:00</option>
                <option value="08">08:00</option>
              </select> */}
            {/* </div> */}

            <div>
              <input type="text" placeholder="Your Full Name" required></input>
              <input
                type="text"
                placeholder="Your Phone Number"
                required
              ></input>
            </div>

            <div>
              <input
                type="number"
                placeholder="How many persons?"
                min="1"
                required
              ></input>
              <button type="submit" className="BOOK RESERVATION">
                Book Reservation
              </button>
            </div>
          </StyledReservationForm>
        </div>
      </StyledReservationParent>
    </StyledReservationContainer>
  );
};

export default ReservationPage;
