import React, { useState,useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    zIndex: "121231",
    transform: "translate(-50%, -50%)",
    textAlign: 'end'
  },
};

function Video({ image, buttonImg, title, text,video }) {


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="closeButton">
          X
        </button>
        <iframe
          className="iframe"
          src={video}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
      <div className="video">
        <div className="img">
          <img src={image} alt="" onClick={openModal} />
          <a href="javascript:void(0)" onClick={openModal}>
            <img className="playButton" src={buttonImg} alt="" />
          </a>
        </div>

        <div className="info">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Video;
