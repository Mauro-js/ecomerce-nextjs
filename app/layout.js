import "./globals.css";
import "./talwind.css";
import "./animations.css";
import { Inter } from "next/font/google";
import ContextLayout from "./layoutContex";
import { CartProvider } from "@/contexts/CartContext";
import { ModalProvider } from "@/contexts/ModalContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ecomerce",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.variable} antialiased`}>
        <aside className="flex h-[3vh] min-h-[25px] items-center justify-center bg-primary pt-[0.5vh] text-ofert text-white">
          <span className="text-focus-in">30% ALL ORDERS UNTIL 4/27</span>
        </aside>
        <CartProvider>
          <ModalProvider>
            <ContextLayout>
              {children}
            </ContextLayout>
          </ModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
