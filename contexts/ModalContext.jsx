"use client"
import Modal from "@/components/ui/Modal";
import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";
const ModalContext = createContext();
import Image from "next/image";
import trash from "../public/trash.svg";
import emptyCart from "../public/emptyCart.svg";

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, setCart  } = useCart();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const deletToCart = (product) => {
    const indexProduct = cart.findIndex((element) => element.name === product.name);
  
    if (cart.length !== 0 && indexProduct !== -1) {
      const updatedCart = [...cart];
      updatedCart[indexProduct].count--;
  
      if (!updatedCart[indexProduct].count) {
        updatedCart.splice(indexProduct, 1);
      }
  
      setCart(updatedCart);
    }
  };

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
        {isOpen && (<>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-center w-56 justify-between">
                <div className="my-4 w-full h-full">
                    <h1 className="text-lg text-primary font-bold">Tu Carrito</h1>
                    <div className="list-shop">
                        {cart.map((item) => 
                        <div key={item.name} className="list-shop-child">
                            {item.name} - ${item.price} x {item.count} 
                            <button className="delete-button" onClick={() => deletToCart(item)}>
                                <Image alt="trash-icon" src={trash} width={16} height={16} />
                            </button>
                        </div>)}
                        {cart.length === 0 ? <Image src={emptyCart} alt="cart" width={50} height={50} /> : ""}
                    </div>
                </div>
                <div className="footer-modal">
                    {cart.length != 0 ? <>Total {(Math.trunc(cart.reduce((acc, item) => acc + item.price * item.count, 0)*100)/100).toFixed(2)} </>: "" }
                    <button
                    className="close-button w-48"
                    onClick={() => setIsOpen(false)}
                    >
                    Close
                    </button>
                </div>
                </div>
            </Modal>
            </>
      )}
      {children}
    </ModalContext.Provider>
  );
};
