import Auth from '../utils/auth';
import { useState } from "react";
import { ADD_REVIEW } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const CustomerReviews = () => {
    const [newReview, setNewReview] = useState();
    const [addReview, {error, loading}] = useMutation(ADD_REVIEW);

    const handleSavedReview = async() => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;    
        if (!token) {
          return false;
        }
        try{

           const {data} = await addReview({
              variables: {...newReview}
            });
            console.log('REVIEW NEW DATA', data);

        } catch (err){
            console.error(err);
        }

    }
    return (
        <form onSubmit={handleSavedReview}>
        <label>Leave a review:</label>
        <textarea name='reviewText' value={newReview} onChange={(e)=> setNewReview(e.target.value)} rows="4" cols="50"/>
        <button className="button">Submit</button>
       </form>


      );
}
 
export default CustomerReviews;