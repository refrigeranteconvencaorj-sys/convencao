import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import WhereFind from "../../components/service/WhereFind";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhereFind />
      <Footer />
    </div>
  );
};

export default Page;
