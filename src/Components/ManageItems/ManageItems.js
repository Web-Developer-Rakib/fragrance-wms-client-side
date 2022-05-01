import React from "react";
import { Button, Table } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import "./ManageItems.css";

const ManageItems = () => {
  const { products } = useFetch();
  return (
    <div className="manage-items container">
      <div className="manage-items-head">
        <h3>Manage Items</h3>
        <Button>Add item</Button>
      </div>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Supplier name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier email</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr>
              <td>{product?.productName}</td>
              <td>{product?.name}</td>
              <td>{product?.price}</td>
              <td>{product?.quantity}</td>
              <td>{product?.email}</td>
              <td className="d-flex justify-content-around">
                <Button>V</Button>
                <Button className="btn-info">U</Button>
                <Button className="btn-danger">X</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageItems;
