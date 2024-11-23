import { SwiperNavButton } from "@/components/ui/SwiperNavButtons";
import { Swiper } from "swiper/react";
import { GridShop } from "@/components/shop/GridShop";

const Shop = () => {
  const grid = GridShop(15);

  return (
    <div className="shop-container">
      <h1 className="shop-title">Featured Collection</h1>
      <Swiper key={Math.random()} spaceBetween={50} navigation>
        {grid}
        <SwiperNavButton marignTop={false} />
      </Swiper>
    </div>
  );
};

export default Shop;
