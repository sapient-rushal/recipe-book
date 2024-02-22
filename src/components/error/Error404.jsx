import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {

  console.log(123)

  return (
    <div className="modal" style={{zIndex:100, minwidth:"200px"}}> 
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
};

export default function Error404() {
  // return (
  //   <>
  //     {/* <div className="justify-content-center">
  //       <div className="text-center">
  //         <h1 className="display-1 fw-bold">404</h1>
  //         <p className="fs-3">
  //           {" "}
  //           <span className="text-danger">Opps!</span> Page not found.
  //         </p>
  //         <p className="lead">The page you’re looking for doesn’t exist.</p>
  //         <Link to="/" className="btn btn-primary">
  //           Go Home
  //         </Link>
  //       </div>
  //     </div> */}
  //   </>
  // );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
