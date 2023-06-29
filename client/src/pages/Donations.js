import { useEffect } from "react";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import {
  DonationsContainer,
  DonationsForm,
  DonationsLeft,
  DonationsRight,
} from "../styled/Donations.styled";

import { useState } from "react";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const DonationPage = () => {
  const [donationInfo, setDonationInfo] = useState({
    donationFullName: "",
    donationEmail: "",
    donationAddress: "",
    donationCity: "",
    donationState: "",
    donationZipCode: "",
    donationAmount: "",
  });

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
    console.log(donationInfo);
    alert("submitted!");

    getCheckout({
      variables: {
        ...donationInfo,
        [event.target.name]: event.target.value},
      });

      setDonationInfo({ name: "", email: "", phonenumber: "" });
    };
  

  return (
    <DonationsContainer>
      <h3>Donations Page</h3>
      <DonationsForm onSubmit={submitHandler}>
        <div class="inputBox">
          <span>Full Name :</span>
          <input
            type="text"
            placeholder="Your name here"
            value={donationInfo.donationFullName}
          ></input>
        </div>
        <div class="inputBox">
          <span>Email :</span>
          <input
            type="email"
            placeholder="youremail@email.com"
            value={donationInfo.donationEmail}
          ></input>
        </div>
        <div class="inputBox">
          <span>Address :</span>
          <input
            type="text"
            placeholder="Street"
            value={donationInfo.donationAddress}
          ></input>
        </div>
        <div class="inputBox">
          <span>City :</span>
          <input
            type="text"
            placeholder="City"
            value={donationInfo.donationCity}
          ></input>
        </div>
        <div class="inputBox">
          <span>State :</span>
          <input
            type="text"
            placeholder="State"
            value={donationInfo.donationState}
          ></input>
        </div>
        <div class="inputBox">
          <span>Zip Code :</span>
          <input
            type="text"
            placeholder="1A3 B5C"
            value={donationInfo.donationZipCode}
          ></input>
        </div>
        <div class="inputBox">
          <span>Amount :</span>
          <input
            type="number"
            placeholder="Amount"
            value={donationInfo.donationAmount}
          ></input>
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

        <button type="submit" className="button" onSubmit={submitHandler} >
          Submit
        </button>
      </DonationsForm>
    </DonationsContainer>
  );
};

export default DonationPage;
