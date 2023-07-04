import { useQuery} from "@apollo/client";
import { GET_USER} from "../utils/queries";
import { useState } from "react";
import {StyledCustomer, StyledCustomerRight, CustomerReview, CustomerButtonContainer } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from "../utils/auth";
import CustomerReviewSection from "../components/CustomerReviewForm";
import CustomerReservations from "../components/CustomerReservation";
//import EditReview from "../components/EditReview";


const CustomerPage = () => {
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};

    const [currentSection, setCurrentSection] = useState('Reviews');
    const section = () => {
        if(currentSection === 'Reviews'){
            return <CustomerReviewSection />
         }
         if(currentSection === 'Reservations'){
            return <CustomerReservations />
         }
    }
   // If we ever put in the edit again  <EditReview reviewId={review._id}/>
   //The link for seeing all your reservations 
    return ( 
        <>
    {Auth.loggedIn() ? (
        <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>
       <StyledCustomerRight>
        <CustomerReview>
        <h2>{userData.username}</h2>
        <CustomerButtonContainer>
        <button className="button" onClick={() => setCurrentSection('Reviews')}>Reviews</button>
        <button className="button" onClick={() => setCurrentSection('Reservations')}>Reservations</button>
        </CustomerButtonContainer> 
        {section()}
        </CustomerReview>
       
       </StyledCustomerRight>   
    </StyledCustomer>
    
    ) : (
        <h2>You Must be logged in</h2>
    )}
    </> 
  );
}
 
export default CustomerPage;