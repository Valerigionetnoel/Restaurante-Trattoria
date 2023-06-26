import { useQuery, useMutation } from "@apollo/client";
import { GET_USER, DELETE_REVIEW  } from "../utils/queries";
import { OverflowMapped, StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from "../utils/auth";
import CustomerReviewSection from "../components/CustomerReview";

const CustomerPage = () => {
    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};

    const {reviews} = userData;
    console.log(reviews);
    if(loading){
        <h2>Loading...</h2>
    }


        //For DELETE_REVIEW
        const [deleteReview, {error}] = useMutation(DELETE_REVIEW);

        const deleteAReview = async(reviewId) => {
          const token = Auth.loggedIn() ? Auth.getToken() : null;


         if (!token) {
         return false;
        }
        try{
          const {data} = await deleteReview({
            variables: {reviewId}
          })

        } catch(error){
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
        <CustomerReviewSection />
        </CustomerReview>
        {reviews ? (
            <OverflowMapped>
            {reviews.map(review => (
                <CustomerMappedReviews key={review.id}>
                <p>{review.reviewText}</p>
                <button className="button">Edit</button>
                <button className="button">Delete</button>
                </CustomerMappedReviews>

            ))}
            </OverflowMapped>
           
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