import { useQuery, useMutation } from "@apollo/client";
import { GET_USER} from "../utils/queries";
import {DELETE_REVIEW} from "../utils/mutations";
import Auth from "../utils/auth";
import { OverflowMapped,  CustomerMappedReviews} from "../styled/Customer.styled";

const CustomerReviews = () => {
        
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
         {reviews ? (
            <OverflowMapped>
            {reviews.map(review => (
                <CustomerMappedReviews key={review.reviewId}>
                <p>{review.reviewText}</p>
                <button className="button" onClick={() => deleteAReview(review._id)}>Delete</button>
                </CustomerMappedReviews>
            ))}
            </OverflowMapped>
        ) : (<h6>You have no reviews</h6>)}
        
        </>
    )
};

export default CustomerReviews;