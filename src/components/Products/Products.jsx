import React from "react";
import Product from "./Product/Product";
// import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
      <div className="flex flex-col w-full justify-center content-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
