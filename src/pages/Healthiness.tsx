import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Healthiness from "../components/Healthiness";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Healthiness />
      <Footer />
    </div>
  );
};

export default Page;
