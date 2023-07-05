import { useEffect } from 'react';
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { DonationsContainer, DonationsForm } from '../styled/Donations.styled';
import img9 from '../images/food/img9.jpg';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const DonationPage = () => {

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  
  const submitHandler = (event) => {
    event.preventDefault();
    alert("submitted!");

    getCheckout({
      variables: { 
        fullName: "John",
        amount: 100
       },
    });
  }

    
  return (
    <DonationsContainer>
      <h3>Donations Page</h3>
      <DonationsForm  onSubmit={submitHandler}>

        <div class="inputBox">
          <span>Full Name :</span>
          <input type="text" placeholder="Joe Murray"></input>
        </div>
        <div class="inputBox">
          <span>Email :</span>
          <input type="email" placeholder="youremail@email.com"></input>
        </div>
        <div class="inputBox">
          <span>Address :</span>
          <input type="text" placeholder="555 Main Street"></input>
        </div>
        <div class="inputBox">
          <span>City :</span>
          <input type="text" placeholder="City"></input>
        </div>
          <div class="inputBox">
            <span>State :</span>
            <input type="text" placeholder="State"></input>
          </div>
          <div class="inputBox">
            <span>Zip Code :</span>
            <input type="text" placeholder="123 456"></input>
          </div>
          <div class="inputBox">
            <span>Amount :</span>
            <input type="number" placeholder="$100.00"></input>
          </div>

      {/* <div class="col">
        <h3 class="title">payment</h3>

        <div class="inputBox">
          <span>name on card :</span>
          <input type="text" placeholder="Joe Murr"></input>
        </div>
        <div class="inputBox">
          <span>credit card number :</span>
          <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX"></input>
        </div>
        <div class="inputBox">
          <span>exp month :</span>
          <input type="text" placeholder="city"></input>
        </div>
        <div class="flex">
          <div class="inputBox">
            <span>exp year :</span>
            <input type="text" placeholder="state"></input>
          </div>
          <div class="inputBox">
            <span>CVV :</span>
            <input type="text" placeholder="123 456"></input>
          </div>
        </div>
      </div> */}


    <button type="submit" className='button'>Submit</button>

    </DonationsForm>
  </DonationsContainer>
  );
}

export default DonationPage;