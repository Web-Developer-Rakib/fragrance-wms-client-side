import React from "react";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  return (
    <div className="update-page">
      <div className="product">
        {/* <div className="product-img">
          <img src={perfume} alt="" width={350} />
        </div> */}
        <div className="product-info">
          <p>
            <b>Product name:</b> Versace Eros
          </p>
          <h5>
            <b>Price:</b> 340$
          </h5>
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
        <div className="update-quantity">
          <input type="number" placeholder="Please enter the quantity" />
          <button>UPDATE</button>
        </div>
        <button className="delivered-btn">DELIVERED</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
