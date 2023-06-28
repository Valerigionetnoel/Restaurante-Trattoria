import { useMutation, useQuery } from '@apollo/client';
import { Modal } from 'antd';
import { useState } from 'react';
import Auth from '../utils/auth';
import { GET_SINGLE_REVIEW } from '../utils/queries';

const EditReview = ({reviewId}) => {
    console.log(reviewId);
    //Get the single review:
    const {loading, error, data} = useQuery(GET_SINGLE_REVIEW, {
        variables: {reviewId}
    });
    console.log('EDIT DATA', data);
    //console.log('ERROR', error);


    //To edit the review:
   // const [editReview, {error}] = useMutation(EDIT_REVIEW);
   const editAReview = async(reviewId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;


     if (!token) {
     return false;
        }

    try{
    
        //const {data} = await editReview({
          //  variables: {reviewId, reviewText}
       // })

    } catch (error){
        console.error(error);
    }
   };


    //For the andD to open and close the modal:
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return ( 
    <>
      <button className='button' onClick={showModal}>
        Edit
      </button>
      <Modal title="Edit Your Review" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <textarea cols="40" row="40">

        </textarea>
      </Modal>
    </>
  );
};

export default EditReview;