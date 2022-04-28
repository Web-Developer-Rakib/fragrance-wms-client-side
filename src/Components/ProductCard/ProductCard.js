import React from "react";
import perfume from "../../Images/perfume.jpg";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={perfume} alt="" width={350} />
      </div>
      <div className="card-img">
        <img src={perfume} alt="" width={350} />
      </div>
      <div className="card-text">
        <p>
          <b>Product name:</b> Versace Eros
        </p>
        <p>
          <b>Supplier name:</b> Rakibul Hasan
        </p>
        <p>
          <b>Short description:</b> Master your world and achieve your goals
          when you wear Eros by Versace. Introduced in 2012.
        </p>
        <p>
          <b>Quantity:</b> 5
        </p>
      </div>
      <button className="update-btn">UPDATE</button>
    </div>
  );
};

export default ProductCard;
