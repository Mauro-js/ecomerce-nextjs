import Image from "next/image";
import shop from "../../public/shop.json";
import { SwiperSlide } from "swiper/react";
import { useCart } from "@/contexts/CartContext";
import { useModal } from "@/contexts/ModalContext";

export const GridShop = () => {
  const { cart, setCart  } = useCart();
  const { openModal } = useModal();;

  const addToCart = (product) => {
    const indexProduct = cart.findIndex((element) => element.name === product.name);

    if(cart.lenght !== 0 && indexProduct !== -1){
      cart[indexProduct].count++;
      setCart(cart);
    } else {
      product.count = 1;
      setCart([...cart,product]);
    }

    openModal();
  }

  const list = Object.keys(shop).map((_, index) => (
    <SwiperSlide key={`SecondSlide${Math.random()}`} >
      <div className="grid-shop-container">
        <div className="grid-shop">
          {shop[index].map((item) => (
            <div key={item.name} className="card">
              <div className="card-image-content">
                <Image
                  src={item.image}
                  alt="Product"
                  width={1000}
                  height={1000}
                  className="card-image"
                />
              </div>
              <div className="card-text-content">
                <span className="card-price">${item.price}</span>
                <button aria-label="Buy Now" className="card-button" onClick={() => addToCart(item)}>BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SwiperSlide>
  ));

  return list;
};
