import { useQuery, useMutation } from "@apollo/client";
import { ADD_REVIEW } from '../utils/mutations';
import { GET_USER } from "../utils/queries";
import { useState } from "react";
import { StyledCustomer, StyledCustomerRight, CustomerMappedReviews, CustomerReview } from "../styled/Customer.styled";
import img4 from '../images/food/img4.jpg';
import Auth from '../utils/auth';

const CustomerPage = () => {
    //For the ADD_REVIEW:
    //const [newReview, setNewReview] = useState();
    //const [addReview, {error, loading}] = useMutation(ADD_REVIEW);

    //For the GET_USER:
    const {loading, data} = useQuery(GET_USER);
    const userData = data?.user || {};
    console.log(userData);



    const handleSavedReview = () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;    
        if (!token) {
          return false;
        }
        try{

           // const {data} = await addReview({
            //    variables: {}
           // })

        } catch (err){
            console.error(err);
        }

    }
    return ( 
    <StyledCustomer>
        <img src={img4} alt='table' className="leftImg"></img>

       <StyledCustomerRight>
        <CustomerReview>
            <h3>{userData.username}</h3>
            <form>
                <label>Leave a review:</label>
                <textarea name='review' rows="4" cols="50"/>
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