import Auth from '../utils/auth';
import { useState } from "react";
import { ADD_REVIEW } from '../utils/mutations';
import { useMutation } from '@apollo/client';
const CustomerReviews = () => {
     //For the ADD_REVIEW:
    //const [newReview, setNewReview] = useState();
    //const [addReview, {error, loading}] = useMutation(ADD_REVIEW);
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
        <form>
        <label>Leave a review:</label>
        <textarea name='review' rows="4" cols="50"/>
       </form>


      );
}
 
export default CustomerReviews;