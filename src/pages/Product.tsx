import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Product from "../components/Product";

const Page = () => {
  const { id, category } = useParams();

  return (
    <div className="min-h-screen">
      <Header />
      <Product categoryId={category} id={id} />
      <Footer />
    </div>
  );
};

export default Page;
