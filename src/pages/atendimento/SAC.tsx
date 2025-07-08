import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import SAC from "../../components/service/SAC";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SAC />
      <Footer />
    </div>
  );
};

export default Page;
