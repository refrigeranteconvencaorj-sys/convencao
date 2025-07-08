import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import FAQ from "../../components/service/FAQ";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
