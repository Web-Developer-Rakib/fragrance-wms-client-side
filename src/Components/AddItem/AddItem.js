import React from "react";
import { toast } from "react-toastify";
import useFirebase from "../../Hooks/useFirebase";
import "./AddItem.css";

const AddItem = () => {
  const { userInfo } = useFirebase();
  const addItem = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const quantity = e.target.quantity.value;
    const photoURL = e.target.photoURL.value;
    const product = {
      email,
      name,
      productName,
      price,
      description,
      quantity,
      photoURL,
    };
    //Post data
    if (
      email === "" ||
      name === "" ||
      productName === "" ||
      price === "" ||
      description === "" ||
      quantity === "" ||
      photoURL === ""
    ) {
      toast.warn("Please fill up all fields.");
    } else {
      fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Product added successfully.");
          e.target.reset();
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    }
  };
  return (
    <div className="add-item-page">
      <form onSubmit={addItem} className="add-item-form">
        <h3>ADD ITEM</h3>
        <input
          type="text"
          value={userInfo?.email}
          name="email"
          className="d-none"
        />
        <input
          type="text"
          name="name"
          value={userInfo?.displayName}
          className="d-none"
        />
        <br />
        <input
          type="text"
          name="productName"
          placeholder="Enter the peoduct name"
        />
        <br />
        <input type="number" name="price" placeholder="Enter the price" />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Enter products description"
        />
        <br />
        <input type="number" name="quantity" placeholder="Enter the quantity" />
        <br />
        <input type="url" name="photoURL" placeholder="Enter the image URL" />
        <br />
        <button type="submit" className="add-item-btn">
          ADD ITEM
        </button>
        <br />
      </form>
    </div>
  );
};

export default AddItem;
