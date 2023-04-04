import React, { useEffect } from 'react';
import myImage from "./images/Rectangle 87.png"
import firstbank from "./images/First-Bank 1.png"
import myImage1 from "./images/Rectangle 58 (1).png"
import myImage2 from "./images/Rectangle 87.png"
import myImage3 from "./images/Rectangle 58 (2).png"



function Biographyslides() {
    const addRemoveActiveClass = () => {
      const sections = document.querySelectorAll('#section1, #section2, #section3, #section4');
      let lastSectionName = '';
  
      sections.forEach(section => {
        const bounding = section.getBoundingClientRect();
  
        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          lastSectionName = section.getAttribute('data-nav');
          section.classList.add('activey');
        } else {
          section.classList.remove('activey');
        }
      });
  
      try {
        if (['sec1'].includes(lastSectionName)) {
          const bby = document.getElementById('sec1');
          bby.classList.add('activey');
        } else {
          const bby = document.getElementById('sec1');
          bby.classList.remove('activey');
        }
  
        if (['sec2'].includes(lastSectionName)) {
          const bby2 = document.getElementById('sec2');
          bby2.classList.add('activey');
        } else {
          const bby2 = document.getElementById('sec2');
          bby2.classList.remove('activey');
        }
  
        if (['sec3'].includes(lastSectionName)) {
          const bby3 = document.getElementById('sec3');
          bby3.classList.add('activey');
        } else {
          const bby3 = document.getElementById('sec3');
          bby3.classList.remove('activey');
        }
  
        if (['sec4'].includes(lastSectionName)) {
          const bby4 = document.getElementById('sec4');
          bby4.classList.add('activey');
        } else {
          const bby4 = document.getElementById('sec4');
          bby4.classList.remove('activey');
        }
      } catch (error) {
        console.table(error);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', addRemoveActiveClass);
  
      return () => {
        window.removeEventListener('scroll', addRemoveActiveClass);
      };
    }, []);
  

  return (
    <>
        <div className="stack__card" id="section1" data-nav="sec1">
          <div className="stackimage">
            <img src={myImage} alt="" />
            <p className="section-subtitle lrn">Chief Internal Auditor</p>
            <div className="puboffice">
              <p className="section-subtitle" id="portfolio-label">
              Nov. 1981 - Nov. 2006
              </p>
              <div className="publogo">
                <img src={firstbank} alt="" />
              </div>
            </div>
          </div>
          <div className="stacktext">
            <p className='su'>
            Chief Obiano began his career on an auspicious note at First Bank of Nigeria where he learned the rudiments of banking and established his flair for financial analysis. However, he eventually moved to Texaco Nigeria Plc. where he gradually rose to the enviable position of the Chief Internal Auditor of the company with extensive oversight functions covering the company’s operations overseas.
            </p>
       


            <p className="section-subtitle ssc">Achievements</p>
            <ul>
              <li>
              
              Chief (Dr.) Willie Obiano was part of the team that audited Texaco Refinery in Rotterdam, Netherlands in 1989.
              </li>
              <li>Provision of Good Working Atmosphere</li>
              <li>Increase in Salary</li>
              <li>Good Work Balance</li>
              <li>Healthy Environment</li>
            </ul>
          </div>
        </div>
        <div className="stack__card" id="section2" data-nav="sec2">
          <div className="stackimage">
            <img src={myImage1} alt="" />
            <p className="section-subtitle lrn">Executive Director</p>
            <div className="puboffice">
              <p className="section-subtitle" id="portfolio-label">
              Nov. 1998 - Nov. 2002
              </p>
              <div className="publogo">
                <img src={firstbank} alt="" />
              </div>
            </div>
          </div>
          <div className="stacktext">
          <p className='su'>
            He joined Fidelity Bank from Texaco in 1991 as Deputy Manager and head of Audit. He was promoted Manager in 1991, Assistant General Manager in 1993, Deputy General Manager in 2000 and General Manager in 2002 and Executive Director in October, 2003. Between 1991 and 2002, he headed many key Groups and Divisions, at one point or another.As Executive Director of the Mega Fidelity Bank (and No. 2 man), Chief Obiano was in charge of Business Banking (Corporate Banking, Non-Bank Financial Institutions, Treasury, (Naira and Foreign Exchange, Oil & Gas, Telecom & Food and Beverages, Transport and Aviation). All the Regional Managers of the bank reported through him to the MD/CEO. Chief Obiano left Fidelity Bank on a high. He was well loved by the ordinary staff and respected by the management and the Board. At the bank’s annual dinners and social events, Akpokuedike Aguleri, as he was fondly called by friends and colleagues.
            </p>
  
          </div>
        </div>
        <div className="stack__card" id="section3" data-nav="sec3">
          <div className="stackimage">
          <img src={myImage2} alt="" />
            <p className="section-subtitle lrn">Special Adviser</p>
            <div className="puboffice">
              <p className="section-subtitle" id="portfolio-label">
              Nov. 1998 - Nov. 2002
              </p>
              <div className="publogo">
                <img src={firstbank} alt="" />
              </div>
            </div>
          </div>
          <div className="stacktext">
          <p className='su'>
            In 2010, he joined the Anambra State Government as a special adviser on financial matters to the then Governor, Peter Obi. Obiano played a significant role in the reduction of the state's domestic and foreign debt profile. Under his watch, the state's debt profile was reduced from over N34 billion to N9 billion. He also implemented policies that ensured financial stability in Anambra State. He was instrumental in the establishment of the Anambra State Internal Revenue Service (AIRS), which helped to improve the state's revenue generation and reduce its dependence on federal allocations. Obiano was the Chairman of the Anambra State Investment Promotion and Protection Agency (ANSIPPA) from 2011 to 2013. During his tenure, he worked to attract investors to the state and promote a favorable investment climate. He was also involved in the establishment of the Anambra State Small Business Agency (ASBA) to provide funding and support to small and medium-sized enterprises in the state.
            </p>

          </div>
        </div>
        <div className="stack__card" id="section4" data-nav="sec4">
          <div className="stackimage">
          <img src={myImage3} alt="" />
            <p className="section-subtitle lrn">Elected Governor</p>
            <div className="puboffice">
              <p className="section-subtitle" id="portfolio-label">
              Nov. 1998 - Nov. 2002
              </p>
              <div className="publogo">
                <img src={firstbank} alt="" />
              </div>
            </div>
          </div>
          <div className="stacktext">
          <p className='su'>
          In 2010, he joined the Anambra State Government as a special adviser on financial matters to the then Governor, Peter Obi. Obiano played a significant role in the reduction of the state's domestic and foreign debt profile. Under his watch, the state's debt profile was reduced from over N34 billion to N9 billion. He also implemented policies that ensured financial stability in Anambra State. He was instrumental in the establishment of the Anambra State Internal Revenue Service (AIRS), which helped to improve the state's revenue generation and reduce its dependence on federal allocations. Obiano was the Chairman of the Anambra State Investment Promotion and Protection Agency (ANSIPPA) from 2011 to 2013. During his tenure, he worked to attract investors to the state and promote a favorable investment climate. He was also involved in the establishment of the Anambra State Small Business Agency (ASBA) to provide funding and support to small and medium-sized enterprises in the state.
            </p>
  
          </div>
        
        
        <br />
        <br />
        <br />
        </div>
        <div className="stack__card" id="section4" data-nav="sec6">

        
        
        <br />
        <br />
        <br />
        </div>
    </>
  );
}

export default Biographyslides;
