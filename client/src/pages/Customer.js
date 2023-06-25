import { useQuery} from "@apollo/client";
import { GET_USER } from "../utils/queries";
import { StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from "../utils/auth";
import CustomerReviewSection from "../components/CustomerReview";

const CustomerPage = () => {
    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};

    const {reviews} = userData;

    if(loading){
        <h2>Loading...</h2>
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