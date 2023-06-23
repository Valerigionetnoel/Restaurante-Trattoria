import { useQuery, useMutation } from "@apollo/client";
import { ADD_REVIEW } from '../utils/mutations';
import { GET_USER } from "../utils/queries";
import { useState } from "react";
import { StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from '../utils/auth';
import CustomerReviews from "../components/CustomerReviews";

const CustomerPage = () => {
    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};
    console.log(userData);

    const {userReviews} = userData;
    console.log('user reviews', userReviews);
   
    return ( 
        <>
    {Auth.loggedIn ? (
        <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>
       <StyledCustomerRight>
        <CustomerReview>
            <h3>{userData.username}</h3>
        <CustomerReviews />
        </CustomerReview>
       <CustomerMappedReviews>
        {userReviews.map(review => (
            <p>review.reviewText</p>
        ))}
       </CustomerMappedReviews>
       </StyledCustomerRight>
    </StyledCustomer>
    ) : (
        <h2>You Must be logged in</h2>
    )}
    </>
 
        
  );
}
 
export default CustomerPage;