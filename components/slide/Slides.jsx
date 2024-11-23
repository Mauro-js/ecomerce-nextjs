"use client";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import IconButton from "../../public/IconButton.svg";
import IconButton2 from "../../public/IconButton2.svg";

import slides from "../../public/slides.json";
export const slidesGenerate = () => {
  const list = slides.map((item) => (
    <SwiperSlide key={`FirstSlide${Math.random()}`} className={`fade-in`}>
      <div className="slide-content">
        <Image
          alt={"alt"}
          src={`/sky.png`}
          width={10000}
          height={10000}
          className="slide-backround"
        />
        <div className="slide-text-content">
          <h1 className="slide-title">{item.title}</h1>
          <p className="slide-text">{item.text}</p>
          <div className="mb-4 gap-4 lg:flex">
            <button className="shop-now-slide">
              SHOP NOW
              <Image src={IconButton} width={10} height={10} alt="icon" />
            </button>
            <button className="take-quiz-slide">
              TAKE THE QUIZ
              <Image src={IconButton2} width={10} height={10} alt="icon" />
            </button>
            <button className="sm-take-quiz-slide">TAKE THE QUIZ</button>
          </div>
        </div>
        <div className="slide-image-content">
          <Image
            src={item.image}
            alt="Placeholder image"
            width={10000}
            height={10000}
            className="flip-in-ver-right image-slide"
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  return list;
};
