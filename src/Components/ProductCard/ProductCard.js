import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { _id, name, productName, price, description, quantity, photoURL } =
    product;
  const navigate = useNavigate();
  const handleUpdateProduct = (id) => {
    navigate(`/update-product/${id}`);
  };
  return (
    <div className="card" key={_id}>
      <div className="card-img">
        <img src={photoURL} alt="" width={350} />
      </div>
      <div className="card-img">
        <img src={photoURL} alt="" width={350} />
      </div>
      <div className="card-text">
        <p>
          <b>Product name:</b> {productName}
        </p>
        <p>
          <b>Supplier name:</b> {name}
        </p>
        <h4>
          <b>Price:</b> {price}$
        </h4>
        <p>
          <b>Short description:</b> {description.slice(0, 10)}...
        </p>
        <p>
          <b>Quantity:</b> {quantity}
        </p>
      </div>
      <button onClick={() => handleUpdateProduct(_id)} className="update-btn">
        UPDATE
      </button>
    </div>
  );
};

export default ProductCard;
