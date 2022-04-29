import React from "react";
import { Button, Table } from "react-bootstrap";
import "./MyItems.css";

const MyItems = () => {
  return (
    <div className="my-items container">
      <h3>My Items</h3>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Supplier name</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td className="d-flex justify-content-around">
              <Button>V</Button>
              <Button className="btn-info">U</Button>
              <Button className="btn-danger">X</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
