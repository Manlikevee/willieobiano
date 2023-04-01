import React from "react";
import ScrollBottomButton from "../../component/Scrollbottombutton/ScrollBottomButton";

function Header() {
  return (
    <div>
      {" "}
      <main>
        <div class="container profile">
          <div>
            <h5>A GREAT ADMINISTRATOR </h5>
            <h3>A Visionary Leader Committed to Progress and Innovation.</h3>
            <p>
    Inspiring hope and confidence in the future of Nigeria with bold ideas and decisive action. Leading with purpose, passion, and dedication: The inspiring leadership of Willie Obiano</p>
          </div>



        </div>
        <div className="container acent">
        <ScrollBottomButton />
        </div>
      </main>
    </div>  
  );
}

export default Header;
