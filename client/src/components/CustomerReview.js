import Auth from '../utils/auth';
import { ADD_REVIEW} from '../utils/mutations';
import { useState } from "react";
import {useMutation} from '@apollo/client';

const CustomerReviewSection = () => {
        //For ADD_REVIEW 
        const [reviewText, setReviewText] = useState('');
        const [addReview] = useMutation(ADD_REVIEW);

        const handleSavedReview = async() => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;    
        if (!token) {
          return false;
        }
        try{
            const {data} = await addReview({
              variables: {
                reviewText,
                reviewAuthor: Auth.getProfile().data.username,}
            });

        } catch(error){
            console.error(error);
        }
        }

    return (
        <form onSubmit={handleSavedReview}>
        <label>Leave a review:</label>
        <textarea name='reviewText' value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows="4" cols="50"/>
        <button className="button">Submit</button>
       </form>
      );
}
 
export default CustomerReviewSection;