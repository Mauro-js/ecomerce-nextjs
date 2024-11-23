"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Ellipse from "../../public/Ellipse.svg";
import shopIcon from "../../public/shopIcon.svg";
import { useCart } from "@/contexts/CartContext";
import { useModal } from "@/contexts/ModalContext";

export default function Menu() {
  const { cart } = useCart();
  const { openModal } = useModal();
  const [hasItem, setHasItem] = useState(false);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHasItem(cart.length)
  }, [cart])

  return (
    <menu className="menu-content">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-icon"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div className="tracking-in-contract principal-menu text-menu">
        <Link
          href={"/"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/" ? "font-bold shadow-menuSelect" : ""}`}
        >
          HOME
        </Link>
        <Link
          href={"/item/item1"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/item/item1" ? "font-bold shadow-menuSelect" : ""}`}
        >
          ITEM 1
        </Link>
        <Link
          href={"/item/item2"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/item/item2" ? "font-bold shadow-menuSelect" : ""}`}
        >
          ITEM 2
        </Link>
        <Link
          href={"/item/item3"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/item/item3" ? "font-bold shadow-menuSelect" : ""}`}
        >
          ITEM 3
        </Link>
        <Link
          href={"/item/item4"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/item/item4" ? "font-bold shadow-menuSelect" : ""}`}
        >
          ITEM 4
        </Link>
        <Link
          href={"/item/item5"}
          className={`text-focus-in mr-4 p-2 ${pathname == "/item/item5" ? "font-bold shadow-menuSelect" : ""}`}
        >
          ITEM 5
        </Link>
      </div>

      {isOpen && (
        <ul className="scale-up-top sm-menu text-menu">
          <li>
            <Link
              href={"/"}
              className={`p-1 ${pathname == "/" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href={"/item/item1"}
              className={`p-1 ${pathname == "/item/item1" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              ITEM 1
            </Link>
          </li>
          <li>
            <Link
              href={"/item/item2"}
              className={`p-1 ${pathname == "/item/item2" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              ITEM 2
            </Link>
          </li>
          <li>
            <Link
              href={"/item/item3"}
              className={`p-1 ${pathname == "/item/item3" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              ITEM 3
            </Link>
          </li>
          <li>
            <Link
              href={"/item/item4"}
              className={`p-1 ${pathname == "/item/item4" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              ITEM 4
            </Link>
          </li>
          <li>
            <Link
              href={"/item/item5"}
              className={`p-1 ${pathname == "/item/item5" ? "font-bold shadow-mobileMenuSelect" : ""}`}
            >
              ITEM 5
            </Link>
          </li>
        </ul>
      )}

      <div
        onClick={() => openModal()}
        className="cursor-pointer"
      >
        <Image
          src={shopIcon}
          alt="shop"
          className="shop-icon absolute right-0 top-0 mr-[30px] mt-[25px] min-h-[16px] min-w-[16px]"
        />
      {
        hasItem ?
        <Image
          src={Ellipse}
          alt="Ellipse"
          
          className="shop-icon absolute right-0 top-0 mr-[26px] mt-[38px] max-h-[12px] max-w-[12px]"
        />: <></>
      }
     </div>
      
    </menu>
  );
}
