import {
  StyledReservationContainer,
  StyledReservationParent,
  StyledReservationForm,
} from "../styled/Reservation.styled";

import myImg from "../images/food/notUsed.jpg";

import { DatePicker, Space } from "antd";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { TextField } from "@mui/material";
// import { Box } from "@mui/material";

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
      <StyledReservationParent>
        <img
          src={myImg}
          alt="Reservation Page"
          className="responsiveImg2"
        ></img>
      </StyledReservationParent>

      {/* FORM */}
      <StyledReservationForm>
      <h2>Find a Table</h2>
      <input type="text" placeholder="Your Phone Number" required></input>
      <input
            type="number"
            placeholder="How many persons?"
            min="1"
            required
          ></input>

        <Space direction="vertical">
          <DatePicker onChange={onChange} className="input"/>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="input">
            <MobileTimePicker
              views={["hours", "minutes", "AM/PM"]}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </LocalizationProvider>
        </Space>

          <button type="submit" className="button">
            Book Reservation
         </button>

      </StyledReservationForm>
    </StyledReservationContainer>
  );
};

export default ReservationPage;
