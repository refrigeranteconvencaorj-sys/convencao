import React from "react";

import { SiWhatsapp } from "@icons-pack/react-simple-icons";

import links from "../constants/links";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import Sustainability from "../components/Sustainability";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Products />
      <Sustainability />
      <Contact />
      <Footer />

      <a
        href={links.whatsapp}
        className="fixed z-1000 flex items-center right-4 bottom-4 justify-center p-3 rounded-full hover:scale-110 transition-transform bg-primary"
        style={{
          animation: "pulse 2s infinite",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        <SiWhatsapp className="text-white w-8 h-8 mx-auto md:mx-0" />
      </a>
    </div>
  );
}

export default Page;
