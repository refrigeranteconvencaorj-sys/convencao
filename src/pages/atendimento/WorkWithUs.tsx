import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import WorkWithUs from "../../components/service/WorkWithUs";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default Page;
