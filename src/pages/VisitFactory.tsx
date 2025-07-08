import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import VisitFactory from "../components/VisitFactory";
import Gallery from "../components/Gallery";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <VisitFactory />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Page;
