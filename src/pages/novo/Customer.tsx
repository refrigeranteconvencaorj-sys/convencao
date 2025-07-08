import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Customer from "../../components/new/Customer";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Customer />
      <Footer />
    </div>
  );
};

export default Page;
