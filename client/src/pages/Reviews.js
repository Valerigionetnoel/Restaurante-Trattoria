import {useQuery} from '@apollo/client';
import {GET_REVIEWS} from '../utils/queries';
import { ReviewDiv, EachReview } from '../styled/Reviews.styled';
import { Pagination } from 'antd';


const Reviews = () => {
    const {loading, data} = useQuery(GET_REVIEWS);
    console.log(data);
   // const reviewData = data?.review || {};
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
          <Pagination defaultCurrent={10} total={10} />
        </>)
        }
       </ReviewDiv>
     );
}
 
export default Reviews;

