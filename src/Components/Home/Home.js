import React from "react";
import { useNavigate } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useAllProducts();
  const productsSlice = products.slice(0, 6);
  return (
    <div>
      <Banner></Banner>
      <section className="my-5">
        <h2 className="my-5 text-center">Inventory</h2>
        <div className="products-grid">
          {productsSlice.map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
        <div className="d-flex justify-content-center my-4">
          <button
            onClick={() => navigate("/manage-items")}
            className="manage-items-btn"
          >
            MANAGE ITEMS
          </button>
        </div>
      </section>
      <section className="container">
        <h2 className="text-center mb-3">F.A.Q</h2>
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;
