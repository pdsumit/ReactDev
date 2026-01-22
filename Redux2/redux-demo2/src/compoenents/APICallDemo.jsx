import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchProductById} from "../features/products/productsSlice";

const APICallDemo = () => {
  const { data, error, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById());
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <h2>{data.title}</h2>}
    </div>
  );
};

export default APICallDemo;
