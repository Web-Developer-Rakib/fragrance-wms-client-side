import React, { useState } from "react";
import { toast } from "react-toastify";
import useSingleProduct from "../../Hooks/useSingleProduct";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [quantityValue, setQuantityValue] = useState();

  const [isLoad, setIsLoad] = useState(false);
  const { product, id } = useSingleProduct(isLoad);
  // Update quantity function
  const handleUpdateQuantity = () => {
    const currentQuantity = parseInt(product.quantity);
    const newQuantityValue = parseInt(quantityValue);
    const calculatedQuantity = currentQuantity + newQuantityValue;
    const updatedQuantity = { calculatedQuantity };
    if (quantityValue === undefined || quantityValue === "") {
      toast.warn("Please enter a quantity.");
    } else {
      fetch(`http://localhost:5000/update-quantity/${id}`, {
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
    }
  };
  //Delivery function
  const handleDelivery = () => {
    const currentQuantity = parseInt(product.quantity);
    const deliveredOne = currentQuantity - 1;
    const updatedQuantity = { deliveredOne };
    fetch(`http://localhost:5000/delivered/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("1 item is delivered.");
        setIsLoad(!isLoad);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="update-page">
      <div className="product">
        <div className="product-info" key={product._id}>
          <p>
            <b>Product name:</b> {product?.productName}
          </p>
          <h5>
            <b>Price:</b> {product?.price}$
          </h5>
          <p>
            <b>Supplier name:</b> {product?.name}
          </p>
          <p>
            <b>Supplier email:</b> {product?.email}
          </p>
          <p>
            <b>Short description:</b> {product?.description}
          </p>
          <p>
            <b>Quantity:</b> {product?.quantity}
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
        <button onClick={handleDelivery} className="delivered-btn">
          DELIVERED
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
