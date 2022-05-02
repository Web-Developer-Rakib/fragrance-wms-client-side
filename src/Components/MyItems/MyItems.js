import React from "react";
import { Button, Table } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";
import "./MyItems.css";

const MyItems = () => {
  const { products } = useFetch();
  const { userInfo } = useFirebase();
  return (
    <div className="my-items container">
      <h3>My Items</h3>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Product name</th>
            <th>My email</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map(
          (product) =>
            product?.email === userInfo?.email && (
              <tbody>
                <tr>
                  <td>{product?.productName}</td>
                  <td>{product?.email}</td>
                  <td>{product?.quantity}</td>
                  <td>{product?.price}</td>
                  <td className="d-flex justify-content-around">
                    <Button>V</Button>
                    <Button className="btn-info">U</Button>
                    <Button className="btn-danger">X</Button>
                  </td>
                </tr>
              </tbody>
            )
        )}
      </Table>
    </div>
  );
};

export default MyItems;
