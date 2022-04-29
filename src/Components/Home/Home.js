import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="my-5">
        <h2 className="my-5 text-center">Inventory</h2>
        <ProductCard></ProductCard>
        <div className="d-flex justify-content-center my-4">
          <button className="manage-items-btn">MANAGE ITEMS</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
