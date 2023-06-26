import {useQuery} from '@apollo/client';
import {GET_REVIEWS} from '../utils/queries';


const Reviews = () => {

    const {loading, data} = useQuery(GET_REVIEWS);
    const reviewData = data?.reviews || {};

    return ( 
       <>
       {reviewData ? (
        <div>
            {reviewData.map(review => (
                <p>{review.reviewText}</p>
            ))}
        </div>
       )
       : 
       (
        <>
       <h2>There are no reviews</h2></>
        )}
        </>
     );
}
 
export default Reviews;