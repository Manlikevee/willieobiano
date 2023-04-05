import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import Layoutlight from '../component/Layoutlight/Layoutlight';


const videoLinks = [
  { id: 1, videoId: 'dQw4w9WgXcQ' },
  { id: 2, videoId: '5-sfG8BV8wU' },
  { id: 3, videoId: 'VKzWLUQizz8' }
];

const VideoPopup = ({ videoId, onClose }) => {
  const videoLink = videoLinks.find(video => video.id === videoId)?.videoId;

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef, onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <YouTube videoId={videoLink} opts={{width: '100%', height: '100%'}} />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const VideoButton = ({ videoId }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className="video-button" onClick={handleButtonClick}>Open video {videoId}</button>
      {showPopup && <VideoPopup videoId={videoId} onClose={handlePopupClose} />}
    </>
  );
};

const Videopopups = () => {
  return (
    <div>
      <Layoutlight >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <VideoButton videoId={1} />
      <VideoButton videoId={2} />
      <VideoButton videoId={3} />
    </Layoutlight >
    
    </div>
  );
};

export default Videopopups;
