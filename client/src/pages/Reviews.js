import {useQuery} from '@apollo/client';
import {GET_REVIEWS} from '../utils/queries';
import { ReviewDiv, EachReview } from '../styled/Reviews.styled';

const Reviews = () => {
    const {loading, data} = useQuery(GET_REVIEWS);

    return ( 
        <ReviewDiv>
        <h3>Our Reviews:</h3>
        {loading ? 
        (<h2>Loading...</h2>): 
        (<> {data.reviews.map(review => (
            <EachReview>
            <h5>{review.reviewText}</h5>
            <h6>By: {review.reviewAuthor}</h6>
            </EachReview>
        ))}
        </>)
        }
       </ReviewDiv>
     );
}
 
export default Reviews;

