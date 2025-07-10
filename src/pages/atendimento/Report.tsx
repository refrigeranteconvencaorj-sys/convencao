import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Report from "../../components/service/Report";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Report />
      <Footer />
    </div>
  );
};

export default Page;
