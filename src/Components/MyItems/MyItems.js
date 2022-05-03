import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useDelete from "../../Hooks/useDelete";
import useFirebase from "../../Hooks/useFirebase";
import "./MyItems.css";

const MyItems = () => {
  const { products, handleDelete } = useDelete();
  const { userInfo } = useFirebase();
  const navigate = useNavigate();
  const handleUpdateProduct = (id) => {
    navigate(`/update-product/${id}`);
  };
  return (
    <div className="my-items container">
      <h3>My Items</h3>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Product image</th>
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
              <tbody key={product._id}>
                <tr>
                  <td>
                    <img
                      className="my-items-page-photo"
                      src={product?.photoURL}
                      alt=""
                    />
                  </td>
                  <td>{product?.productName}</td>
                  <td>{product?.email}</td>
                  <td>{product?.quantity}</td>
                  <td>{product?.price}</td>
                  <td className="d-flex justify-content-around">
                    <Button
                      onClick={() => handleUpdateProduct(product?._id)}
                      className="btn-info"
                    >
                      <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                    </Button>
                    <Button className="btn-danger">
                      <FontAwesomeIcon
                        onClick={() => handleDelete(product._id)}
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </Button>
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
