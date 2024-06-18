import React, { useState } from 'react';
import Modal from "react-modal";
import { Link } from 'gatsby';


const NoticeModal = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const modalCloseTimeout = 300;
    const closeModal = () => {
      setModalOpen(false);
      setTimeout(() => modalCloseTimeout);
    };

return (
    <Modal
    isOpen={modalOpen}
    onRequestClose={closeModal}
    contentLabel="Modal"
    closeTimeoutMS={modalCloseTimeout}
    >
        
            <Link
              to="/"
              aria-label="close modal"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >X
            </Link>
            <div>
              <h2>
                Important Notice!
              </h2>
            </div>
            <p>We currently have not found a permanent location, for now when you book your reservation will be located at <br/>
            <span>515 Bay ave. Kelowna, BC V1Y 7J8</span></p>
          
     
    </Modal>
);
};
export default NoticeModal;