import React from "react";
import "./AddItem.css";

const AddItem = () => {
  return (
    <div className="add-item-page">
      <form className="add-item-form">
        <h3>ADD ITEM</h3>
        <input type="email" className="d-none" />
        <br />
        <input type="text" className="d-none" />
        <br />
        <input type="text" placeholder="Enter the peoduct name" />
        <br />
        <textarea type="text" placeholder="Enter products description" />
        <br />
        <input type="text" placeholder="Enter the quantity" />
        <br />
        <input type="text" placeholder="Enter the image URL" />
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
