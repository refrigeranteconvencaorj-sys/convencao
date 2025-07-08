import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Terms from "../components/Terms";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Terms />
      <Footer />
    </div>
  );
};

export default Page;
