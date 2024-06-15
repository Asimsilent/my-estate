import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding inner-width flex-center hero-container">
        {/* hero left side */}
        <div className="flex-col-start left-hero" >
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> 
              Most Suitable <br /> 
              Property
            </h1>
          </div>
          <div className="flex-col-start hero-des">
            <span className="secondary-text">Find a veriety of properties that suit you very easily</span>
            <span className="secondary-text">Forget all the defficulties in finding a residence for you</span>
          </div>
          <div className="flex-center search-bar">
            <HiLocationMarker color="blue" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flex-center stats">
            <div className="flex-col-center stat">
              <span>
                <CountUp start={8000} end={9000} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondary-text">Happy Costumers</span>
            </div>
            <div className="flex-col-center stat">
              <span>
                <CountUp start ={4000}end={5000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondary-text" >Happy Costumers</span>
            </div>
            <div className="flex-col-center stat">
              <span>
                <CountUp end={90} />
                <span>+</span>
              </span>
              <span className="secondary-text" >Award Winners</span>
            </div>
          </div>
        </div>
        {/* hero right side  */}
        <div className="flex-center right-hero">
          <div className="image-container">
            <img src="heropic.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
