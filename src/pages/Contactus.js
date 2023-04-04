import React, { useRef } from "react";
import Layoutlight from "../component/Layoutlight/Layoutlight";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c36li9e",
        "template_i5kz4of",
        form.current,
        "P5j785De1ml_sP_oD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Submitted')
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Layoutlight>
      <br />
      <br />
      <br />
      <br />
      <div>
        <section className="container">
          <div className="contactusflex">
            <div className="contactfleximage">
              <p>
                It is only when we take chances, when our lives improve. The
                initial and the most difficult risk that we need to take is to
                become honest.
              </p>
            </div>
            <div className="contactflexform">
              <h2 className="blacktext">Scheduling</h2>
              <p>
                A form to fill to be invited to appear or speak at your event.
              </p>
              <br />
              <form ref={form} onSubmit={sendEmail} className="formlayout">
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Name of Host Organization</label>
                    <input type="text" name="host_org" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Host Organization Website</label>
                    <input type="text" name="host_web" />
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Host Contact Name</label>
                    <input type="text" name="body" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Host Contact Email</label>
                    <input type="text" name="message" />
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Host Contact Phone Number</label>
                    <input type="text" name="host_num" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Event Title</label>
                    <input type="text" name="event_title" />
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Event Date</label>
                    <input type="text" name="event_date" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Will Media be present?</label>
                    <select name="media_present" id="">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Event Location</label>
                    <input type="text" name="event_location" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Audience &amp; Notable Invitees</label>
                    <input type="text" name="audience" />
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">State</label>
                    <input type="text" name="state" />
                  </div>
                  <div className="formcontent">
                    <label htmlFor="">Country</label>
                    <input type="text" name="country" />
                  </div>
                </div>
                <div className="skills-wrapper">
                  <div className="formcontent">
                    <label htmlFor="">Description of the event</label>
                    <input type="text" name="desc_of_event" />
                  </div>
                  {/* <div className="formcontent">
                    <label htmlFor="">
                      Formal Invitation letter (pdf format)
                    </label>
                    <input type="text" name="invitation" />
                  </div> */}
                </div>
                <br />
                <div className="skills-wrappers">
                  <div className="formcontent">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Layoutlight>
  );
};

export default Contactus;

export const Head = () => <title>Willie Obiano Scheduling</title>;
