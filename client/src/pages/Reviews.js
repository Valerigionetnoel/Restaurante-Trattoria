import {useQuery} from '@apollo/client';
import {GET_REVIEWS} from '../utils/queries';


const Reviews = () => {
    const {loading, data} = useQuery(GET_REVIEWS);
    const reviewData = data?.reviews || {};
    console.log(reviewData);
    return ( 
        <div>Reviews page</div>
     );
}
 
export default Reviews;