import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleProduct = (isLoad) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://mighty-atoll-14871.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, isLoad]);
  return { product, id };
};

export default useSingleProduct;
