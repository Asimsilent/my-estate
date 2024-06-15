import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-warpper">
      <div className="inner-width padding flex-center c-container">
        {/* left part */}
        <div className="flex-col-start c-left">
          <span className="orange-text">Our Contacts</span>
          <span className="primary-text">Easy Way to Contact us</span>
          <span className="secondary-text">
            We always ready to help by providing the best servicies for you. <br />
            We beleive a good place to live can make your life better
          </span>
          <div className="flex-col-start contact-modes">
              {/* first row */}
              <div className="flex-center row upper-row">
              {/* 1st box */}
                <div className="flex-col-center box">
                  <div className="flex-center call-data">
                    <div className="icon call-icon">
                      <MdCall size={25} color="blue"/>
                    </div>
                    <div className="flex-col-start number-instruction">
                      <span className="primary-text">Call</span>
                      <span className="secondary-text">021 123 345 14</span>
                    </div>
                  </div>
                  <div className="flex-center call-button button ">Call Now</div>
                </div>
              {/* 2nd box */}
                <div className="flex-col-center box">
                  <div className="flex-center call-data">
                    <div className="icon call-icon">
                      <BsFillChatDotsFill size={25} color="blue"/>
                    </div>
                    <div className="flex-col-start number-instruction">
                      <span className="primary-text">Call</span>
                      <span className="secondary-text">021 123 345 14</span>
                    </div>
                  </div>
                  <div className="flex-center button call-button">Call Now</div>
                </div>
              </div>
              {/* second row */}
              <div className="flex-center row lower-row">
              {/* 3rd box */}
                <div className="flex-col-center box">
                  <div className="flex-center call-data">
                    <div className="icon call-icon">
                      <BsFillChatDotsFill size={25} color="blue"/>
                    </div>
                    <div className="flex-col-start number-instruction">
                      <span className="primary-text">Call</span>
                      <span className="secondary-text">021 123 345 14</span>
                    </div>
                  </div>
                  <div className=" flex-center button call-button">Call Now</div>
                </div>
              {/* 4th box */}
                <div className="flex-col-center box">
                  <div className="flex-center call-data">
                    <div className="icon call-icon">
                      <HiChatBubbleBottomCenter size={25} color="blue" />
                    </div>
                    <div className="flex-col-start number-instruction">
                      <span className="primary-text">Call</span>
                      <span className="secondary-text">021 123 345 14</span>
                    </div>
                  </div>
                  <div className="flex-center button call-button">Call Now</div>
                </div>
              </div>
          </div>
        </div>
        {/* right part */}
        <div className="c-right">
          <div className="image-container">
            <img src="3rdhome.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
