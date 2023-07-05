import {useQuery} from '@apollo/client';
import {GET_REVIEWS} from '../utils/queries';
import { ReviewDiv, EachReview, PaginationDiv } from '../styled/Reviews.styled';
import { Pagination } from 'antd';
import { useState } from 'react';

const Reviews = () => {
    const {loading, data} = useQuery(GET_REVIEWS);
    let reviews = data?.reviews || [];
    const postsPerPage = 6;
   // const [mainData, setMainData] = useState(data.reviews || []);
    const [number, setNumber] = useState(1);
    const handlePage = (pageNum) => setNumber(pageNum);
    let reviewData = reviews.slice((number -1) * postsPerPage, postsPerPage * number);
    console.log('REVIEW DATA', reviewData)

    return ( 
        <ReviewDiv>
        <h3>Our Reviews:</h3>
        {loading ? 
        (<h2>Loading...</h2>): 
        (<> {reviewData.map(review => (
            <EachReview>
            <h5>{review.reviewText}</h5>
            <h6>By: {review.reviewAuthor}</h6>
            </EachReview>
        ))}
        <PaginationDiv>
        
        <Pagination total={reviews.length} pageSize={postsPerPage} defaultCurrent={number} onChange={handlePage}/>
        </PaginationDiv>
        </>)
        }
       </ReviewDiv>
     );
}
 
export default Reviews;









