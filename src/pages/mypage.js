// import React, { useEffect } from 'react';
// import Layout from '../component/Layout/layout'
// import './pages.css'

// const mypage = () => {
//   useEffect(() => {
//     //Get all the section reference
//     const sectionOne = document.querySelector('.item-1');
//     const sectionTwo = document.querySelector('.item-2');
//     const sectionThree = document.querySelector('.item-3');
//     const sectionForth = document.querySelector('.item-4');
//     const sectionFivth = document.querySelector('.item-5');

//     //Calculate their individual height
//     const sectionOneHeight = parseFloat(getComputedStyle(sectionOne).height);
//     const sectionTwoHeight = parseFloat(getComputedStyle(sectionTwo).height);
//     const sectionThreeHeight = parseFloat(getComputedStyle(sectionThree).height);
//     const sectionForthHeight = parseFloat(getComputedStyle(sectionForth).height);
//     const sectionFivthHeight = parseFloat(getComputedStyle(sectionFivth).height);

//     //calculate the checkpoint where item need to be modified
//     const checkPointOne = sectionOneHeight;
//     const checkPointTwo = checkPointOne + sectionTwoHeight;
//     const checkPointThree = checkPointTwo + sectionThreeHeight;
//     const checkPointForth = checkPointThree + sectionForthHeight;

//     //Scroll logic
//     function onScroll() {
//       //get the current scrollbar position
//       const scrollBarPosition = window.pageYOffset || document.body.scrollTop;
//       console.log(scrollBarPosition + ' : ' + checkPointOne);

//       //First section is already fixed
//       if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
//         removeClass(sectionTwo, sectionThree);
//       } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
//         addClass(sectionTwo, sectionThree, checkPointTwo);
//         removeClass(sectionThree, sectionForth);
//       } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
//         addClass(sectionThree, sectionForth, checkPointThree);
//         removeClass(sectionForth, sectionFivth);
//       } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
//         addClass(sectionForth, sectionFivth, checkPointForth);
//       }
//     }

//     window.addEventListener('scroll', onScroll, false);

//     return () => {
//       window.removeEventListener('scroll', onScroll, false);
//     };
//   }, []);

//   function addClass(elemOne, elemTwo, margin) {
//     elemOne.classList.add('fixed');
//     elemTwo.style.marginTop = `${margin}px`;
//   }

//   function removeClass(elemOne, elemTwo) {
//     elemOne.classList.remove('fixed');
//     elemTwo.style.marginTop = '0px';
//   }

//   return (
//     <>
//   {/* First Section */}
//   <section className="item item-1">
//     <i className="fa fa-simplybuilt" aria-hidden="true"></i>
//     <div className="col-5">
//       <a
//         target="_blank"
//         href="https://medium.com/@sanjeevy133/card-stack-scroll-effect-486cc3b55312"
//       >
//         <h1>Card Stack : Scroll Effect</h1>
//       </a>
//       <p>
//         Simple card stacking like scroll effect with the help of vanilla.js .
//         Easy to implement and can be extended to any number of component.{" "}
//         <strong>
//           Read the complete tutorial on medium hover over the heading.
//         </strong>
//       </p>
//     </div>
//   </section>
//   {/* Second Section */}
//   <section className="item item-2">
//     <div className="col-5">
//       <a target="_blank" href="https://codepen.io/alexakasanjeev/pen/wMYBgE">
//         <h1>Circular Navbar</h1>
//       </a>
//       <p>
//         Circular navbar, quite intersting inspired from material design is a
//         perfect twist to incoprate inour website.{" "}
//       </p>
//     </div>
//     <i className="fa fa-gg-circle" aria-hidden="true" />
//   </section>
//   {/* Third Section */}
//   <section className="item item-3">
//     <i className="fa fa-css3" aria-hidden="true" />
//     <div className="col-5">
//       <a target="_blank" href="https://codepen.io/alexakasanjeev/pen/RPxGXY">
//         <h1>Line Break</h1>
//       </a>
//       <p>
//         There is nothing special about a line break, checkout my version, which
//         will add perfect touch of suprizing moment when user accidently scroll
//         down through it.{" "}
//       </p>
//     </div>
//   </section>
//   {/* Forth Section */}
//   <section className="item item-4">
//     <div className="col-5">
//       <a target="_blank" href="https://codepen.io/alexakasanjeev/pen/apmpEV">
//         <h1>Login Form</h1>
//       </a>
//       <p>
//         A 3D login form design inspired from Glass material and Google material
//         design.{" "}
//       </p>
//     </div>
//     <i className="fa fa-user-circle-o" aria-hidden="true" />
//   </section>
//   {/* Fivth Section */}
//   <section className="item item-5">
//     <i className="fa fa-bug" aria-hidden="true" />
//     <div className="col-5">
//       <h1>Section Footer</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
//         consequat ipsum. Phasellus blandit, odio at placerat posuere, felis
//         lectus posuere risus, nec congue nisl erat at turpis.{" "}
//       </p>
//     </div>
//   </section>
//     </>
//   );
// };

// export default mypage;
