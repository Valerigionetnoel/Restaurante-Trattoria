import { useQuery} from "@apollo/client";
import { GET_USER } from "../utils/queries";
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
        <CustomerReviews />
        </CustomerReview>
        {userReviews ? (
            <CustomerMappedReviews>
            {userReviews.map(review => (
                <p>{review.reviewText}</p>
            ))}
           </CustomerMappedReviews>
        ) : (<h5>You have no reviews to show</h5>)}
       </StyledCustomerRight>
    </StyledCustomer>
    ) : (
        <h2>You Must be logged in</h2>
    )}
    </>
 
        
  );
}
 
export default CustomerPage;