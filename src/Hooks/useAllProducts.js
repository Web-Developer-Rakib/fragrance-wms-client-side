import { useEffect, useState } from "react";

const useAllProducts = (isLoad) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mighty-atoll-14871.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isLoad]);
  return { products };
};

export default useAllProducts;
