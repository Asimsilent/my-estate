import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/Slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="padding inner-width r-container">
        <div className="flex-col-start r-head">
          <span className="orange-text">Best Choices</span>
          <span className="primary-text">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings} className="main-swiper">
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flex-col-start r-card">
                <img src={card.image} alt="home" />
                <span className="secondary-text r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primary-text">{card.name}</span>
                <span className="seconary-text">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex-center r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
export default Residencies;
