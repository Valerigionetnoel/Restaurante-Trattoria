import { useQuery } from "@apollo/client";
import { StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';

const CustomerPage = () => {
    return ( 
    <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>

       <StyledCustomerRight>

        <CustomerReview>
            <h3>Users Name</h3>
            <form>
                <label>Leave a review:</label>
                <textarea name='review' rows="5" cols="60"/>
            </form>


        </CustomerReview>
       <CustomerMappedReviews>
        <h5>Customer Mapped Reviews Go Here</h5>
       </CustomerMappedReviews>
       </StyledCustomerRight>
    </StyledCustomer>
        
  );
}
 
export default CustomerPage;