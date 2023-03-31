import React from 'react'
import { useState } from 'react';
import myImage1 from './images/New folder/1.jpg';
import myImage2 from './images/New folder/2.jpg';
import myImage3 from './images/New folder/5.jpg';
import myImage4 from './images/2.jpg';
import myImage5 from './images/1.jpg';
import myImage6 from './images/3.jpg';
import myImage7 from './images/4.jpg';
import myImage8 from './images/5.jpg';
import myImage9 from './images/6.jpg';
import myImage10 from './images/New folder/4.jpg';
import myImage11 from './images/7.jpg';
import myImage12 from './images/8.jpg';
import myImage13 from './images/9.jpg';
import myImage14 from './images/11.jpg';
import myImage15 from './images/12.jpg';
import myImage16 from './images/13.jpg';
import myImage17 from './images/14.jpg';
import myImage18 from './images/15.jpg';
import myImage19 from './images/10.jpg';
import myImage20 from './images/willie.png';

function Lightbox() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState('');
  const [selectedName, setSelectedName] = useState('');

  const handleImgClick = (src, name) => {
    setSelectedImgSrc(src);
    setSelectedName(name);
    setShowLightBox(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseClick = () => {
    setShowLightBox(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>

  <div className='container'>
  <br />
      <br />
      <br />
      <h2 className=" h2 ">Gallery</h2>
      </div>
 
 
  
 
    <section className="sect">
      <div className="lightBox" style={{ display: showLightBox ? 'block' : 'none' }}>
        <div className="lightBox_content">
          <i className="fas fa-times close" onClick={handleCloseClick}>X</i>
          <div className="logo_icons">
            <a href="#">
              <img className="logoImg" src={myImage20} alt="" />
              <div className="text_content">
                <span className="name">{selectedName}</span>
              </div>
            </a>
          </div>
          <div className="showImg">
            <div className="image">
              <img src={selectedImgSrc} alt="" />
            </div>
          </div>
        </div>
      </div>
     
     
      <div className="image-gallery">
        <div className="image-container">
        
        
          <div className="image-box">
            <img
              className="gImg"
              src={myImage1}
              alt=""
              onClick={() => handleImgClick(myImage1, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image-box">
            <img
              className="gImg"
              src={myImage2}
              alt=""
              onClick={() => handleImgClick(myImage2, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image-box">
            <img
              className="gImg"
              src={myImage3}
              alt=""
              onClick={() => handleImgClick(myImage3, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage4}
              alt=""
              onClick={() => handleImgClick(myImage4, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image-box">
            <img
              className="gImg"
              src={myImage5}
              alt=""
              onClick={() => handleImgClick(myImage5, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage6}
              alt=""
              onClick={() => handleImgClick(myImage6, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

  
          <div className="image-box">
            <img
              className="gImg"
              src={myImage9}
              alt=""
              onClick={() => handleImgClick(myImage9, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image-box">
            <img
              className="gImg"
              src={myImage10}
              alt=""
              onClick={() => handleImgClick(myImage10, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div> 

     

          <div className="image-box">
            <img
              className="gImg"
              src={myImage8}
              alt=""
              onClick={() => handleImgClick(myImage8, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
        
          <div className="image-box">
            <img
              className="gImg"
              src={myImage12}
              alt=""
              onClick={() => handleImgClick(myImage12, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
        
          <div className="image-box">
            <img
              className="gImg"
              src={myImage11}
              alt=""
              onClick={() => handleImgClick(myImage11, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
        
       
          <div className="image-box">
            <img
              className="gImg"
              src={myImage7}
              alt=""
              onClick={() => handleImgClick(myImage7, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image-box">
            <img
              className="gImg"
              src={myImage13}
              alt=""
              onClick={() => handleImgClick(myImage13, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage14}
              alt=""
              onClick={() => handleImgClick(myImage14, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>


          <div className="image-box">
            <img
              className="gImg"
              src={myImage15}
              alt=""
              onClick={() => handleImgClick(myImage15, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage16}
              alt=""
              onClick={() => handleImgClick(myImage16, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>


          <div className="image-box">
            <img
              className="gImg"
              src={myImage17}
              alt=""
              onClick={() => handleImgClick(myImage17, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage18}
              alt=""
              onClick={() => handleImgClick(myImage18, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>

          <div className="image-box">
            <img
              className="gImg"
              src={myImage19}
              alt=""
              onClick={() => handleImgClick(myImage19, "Willie Obiano")}
            />
            <div className="logo_icons">
              <a href="#">
                <img className="logoImg" src={myImage20} alt="" />
                <div className="text_content">
                  <span className="name">Willie Obiano</span>
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>









  




 


    </section>

    </>
  );
}

export default Lightbox;
