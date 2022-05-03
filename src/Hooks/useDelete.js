import { useState } from "react";
import { toast } from "react-toastify";
import useAllProducts from "./useAllProducts";

const useDelete = () => {
  const [isLoad, setIsload] = useState(false);
  const { products } = useAllProducts(isLoad);

  //Delete data
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Product deleted successfuly.");
          setIsload(!isLoad);
        } else {
          toast.error("Something went wrong.");
        }
      });
  };
  return { products, handleDelete };
};

export default useDelete;
