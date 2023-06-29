import { useQuery, useMutation } from "@apollo/client";
import { GET_USER} from "../utils/queries";
import {DELETE_REVIEW} from "../utils/mutations";
import { OverflowMapped, StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from "../utils/auth";
import CustomerReviewSection from "../components/CustomerReview";
import EditReview from "../components/EditReview";
import { Link } from "react-router-dom";

const CustomerPage = () => {
    
    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};

    const {reviews} = userData;
   
    if(loading){
        <h2>Loading...</h2>
    }

     //For DELETE_REVIEW
     const [deleteReview] = useMutation(DELETE_REVIEW);

    const deleteAReview = async(reviewId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;


     if (!token) {
     return false;
        }

     try{

     const {data} = await deleteReview({
     variables: {reviewId}

     });
     console.log(data);
     window.location.reload();
    } catch(error){
          console.error(error);
    } }
   
    return ( 
        <>
    {Auth.loggedIn() ? (
        <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>
       <StyledCustomerRight>
        <CustomerReview>
        <h2>{userData.username}</h2>
        <CustomerReviewSection />
        </CustomerReview>
        {reviews ? (
            <OverflowMapped>
            {reviews.map(review => (
                <CustomerMappedReviews key={review.reviewId}>
                <p>{review.reviewText}</p>
                <EditReview reviewId={review._id}/>
                <button className="button" onClick={() => deleteAReview(review._id)}>Delete</button>
                </CustomerMappedReviews>
            ))}
            </OverflowMapped>
           
           
        ) : (<h6>You have no reviews</h6>)}
         <Link to='/customerReservations'>Your Reservations</Link>
       </StyledCustomerRight>
      
    </StyledCustomer>
    
    ) : (
        <h2>You Must be logged in</h2>
    )}
    </> 
  );
}
 
export default CustomerPage;