import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import "./ManageItems.css";

const ManageItems = () => {
  const { products } = useAllProducts();
  const navigate = useNavigate();
  return (
    <div className="manage-items container">
      <div className="manage-items-head">
        <h3>Manage Items</h3>
        <Button onClick={() => navigate("/add-item")}>Add item</Button>
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
                <Button className="btn-info">
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button className="btn-danger">
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageItems;
