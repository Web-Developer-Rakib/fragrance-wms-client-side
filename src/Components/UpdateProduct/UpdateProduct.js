import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const [quantityValue, setQuantityValue] = useState();
  const { id } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, isLoad]);

  // Update quantity function
  const handleUpdateQuantity = () => {
    const currentQuantity = parseInt(product.quantity);
    const newQuantityValue = parseInt(quantityValue);
    const calculatedQuantity = currentQuantity + newQuantityValue;
    const updatedQuantity = { calculatedQuantity };
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Quantity is updated.");
        setIsLoad(!isLoad);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="update-page">
      <div className="product">
        <div className="product-info">
          <p>
            <b>Product name:</b> {product.productName}
          </p>
          <h5>
            <b>Price:</b> {product.price}$
          </h5>
          <p>
            <b>Supplier name:</b> {product.name}
          </p>
          <p>
            <b>Short description:</b> {product.description}
          </p>
          <p>
            <b>Quantity:</b> {product.quantity}
          </p>
        </div>
        <div className="update-quantity">
          <input
            onChange={(e) => setQuantityValue(e.target.value)}
            type="number"
            placeholder="Please enter the quantity"
          />
          <button onClick={handleUpdateQuantity}>UPDATE</button>
        </div>
        <button className="delivered-btn">DELIVERED</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
