import { Button, Modal } from 'antd';
import { useState } from 'react';

const EditReview = () => {
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