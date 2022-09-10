import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "../../../assets/products";
import Checkout from "../Checkout";
const ProductsCheckout = () => {
  return (
    <Routes>
      {/* {Products.map((item, index) => (
        <Route
          path={`:${item.id}`}
          element={<Checkout Product={Products[in]} />}
        />
      ))} */}
    </Routes>
  );
};

export default ProductsCheckout;
