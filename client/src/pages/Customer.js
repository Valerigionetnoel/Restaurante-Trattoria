import { useQuery, useMutation} from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../utils/queries";
import { StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from '../utils/auth';
import { ADD_REVIEW } from '../utils/mutations';

const CustomerPage = () => {
    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};
    console.log(userData);

    const {reviews} = userData;
    console.log('user reviews', reviews);
    if(loading){
        <h2>Loading...</h2>
    }
    //For ADD_REVIEW 
    const [reviewText, setReviewText] = useState('');
    const [addReview, {error}] = useMutation(ADD_REVIEW);
    const handleSavedReview = async() => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;    
        if (!token) {
          return false;
        }
        try{
           const data = await addReview({
              variables: {...reviewText}
            });
            console.log('DATA', data);
        } catch (err){
            console.error(error);
        }
    }
   
    return ( 
        <>
    {Auth.loggedIn() ? (
        <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>
       <StyledCustomerRight>
        <CustomerReview>
        <h2>{userData.username}</h2>
        <form onSubmit={handleSavedReview}>
        <label>Leave a review:</label>
        <textarea name='reviewText' value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows="4" cols="50"/>
        <button className="button">Submit</button>
       </form>
        </CustomerReview>
        {reviews ? (
            <CustomerMappedReviews>
            {reviews.map(review => (
                <p>{review.reviewText}</p>
            ))}
           </CustomerMappedReviews>
        ) : (<h6>You have no reviews</h6>)}
       </StyledCustomerRight>
    </StyledCustomer>
    ) : (
        <h2>You Must be logged in</h2>
    )}
    </> 
  );
}
 
export default CustomerPage;