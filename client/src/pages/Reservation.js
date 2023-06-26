// import {StyledContactContainer, StyledContactBottom, StyledContactForm} from '../styled/Contact.styled';

const ReservationPage = () => {

  
  return (
    // Will add to-go, dine-in options later
    // styling later
    // date pickers later
  <section>
    <h2>Find a table at RESTAURANT</h2>
    <h3>RESERVATIONS</h3>
    {/* FORM */}
    <form>
      <div>
        <select name="days">
          <option value = "day-select">Select Day</option>
          <option value = "Monday">Monday"</option>
          <option value = "Tuesday">Tuesday</option>
          <option value = "Wednesday">Wednesday</option>
          <option value = "Thursday">Thursday</option>
          <option value = "Friday">Friday</option>
          <option value = "Saturday">Saturday</option>
          <option value = "Sunday">Sunday</option>
        </select>

        <select name="hours">
          <option value = "hour-select">Select Hour</option>
          <option value = "01">01:00</option>
          <option value = "02">02:00</option>
          <option value = "03">03:00</option>
          <option value = "04">04:00</option>
          <option value = "05">05:00</option>
          <option value = "06">06:00</option>
          <option value = "07">07:00</option>
          <option value = "08">08:00</option>
          {/* to be continued */}
        </select>
      </div>

      <div>
        <input type="text" placeholder="Your Full Name" required></input>
        <input type="text" placeholder="Your Phone Number" required></input>
      </div>

      <div>
        <input type="number" placeholder="How many persons?" min="1" required></input>
        <button type="submit" value="BOOK RESERVATION"></button>
      </div>
    </form>

  </section>
  );
};

export default ReservationPage;
