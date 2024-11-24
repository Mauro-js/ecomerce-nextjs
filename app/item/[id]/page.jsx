"use client";
import Head from "next/head";
import "swiper/css";
import "swiper/css/scrollbar";
import Shop from "@/components/shop/Shop";
import Hero from "@/components/slide/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tienda</title>
        <meta name="description" content="Store as test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-full w-full">
          <Hero />
          <Shop />
        </div>
      </main>
    </>
  );
}
