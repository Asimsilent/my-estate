import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="padding inner-width flex-center f-container">
        {/* left side */}
        <div className="flex-col-start f-left">
          <img src="1114.jpg" alt="image" width={120} />
          <span className="secondary-text">
            Our vision is to make all people <br />
            to live the best place for them.
          </span>
        </div>
        {/* right side */}
        <div className="flex-col-start f-right">
          <div className="flex-col-start adress">
            <span className="primary-text">Information</span>
            <span className="secondary-text">
              K-block, Model Town, Lhr, Pak
            </span>
          </div>
          <div className="flex-center f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
