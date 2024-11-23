import { SwiperNavButton } from "../ui/SwiperNavButtons";
import { Swiper } from "swiper/react";
import { slidesGenerate } from "./Slides";

const Hero = () => {
  const list = slidesGenerate();

  return (
    <Swiper key={Math.random()} spaceBetween={0} loop={true} navigation>
      {list}
      <SwiperNavButton marignTop={true} autoSlide={true} />
    </Swiper>
  );
};

export default Hero;
