"use client";
import { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButton = ({ marignTop = true, autoSlide = false }) => {
  const swiper = useSwiper();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (autoSlide) {
      intervalRef.current = setInterval(() => {
        swiper.slideNext();
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  });

  return (
    <div
      className={
        "z-40 mb-10 flex place-content-center gap-4 " +
        (marignTop
          ? "relative mt-[-45px] lg:left-[17vw] lg:place-content-start xl:left-[18.5vw] 2xl:left-[20vw]"
          : " sticky mt-10")
      }
    >
      <button
        aria-label="last"
        onClick={() => swiper.slidePrev()}
        className="svg-white svg-white flex h-10 w-16 items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
            fill="#7aa65a"
          />
        </svg>
      </button>
      <button
        aria-label="next"
        onClick={() => swiper.slideNext()}
        className="svg-white hover:svg-white flex h-10 w-16 items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z"
            fill="#7aa65a"
          />
        </svg>
      </button>
    </div>
  );
};
