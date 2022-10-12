import React from "react";
//eslint-disable-next-line
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   IconButton,
// } from "@mui/material";
import { stripHtml } from "string-strip-html";
import PropTypes from 'prop-types';
// import './styles.css'

const Product = ({ product }) => {
  const { result } = stripHtml(product.description);

  return (
    <div className="product_card w-60 p-2 flex flex-col justify-center self-center">
      <img className="product_image max-w-xs h-auto" src={product.image?.url} alt={product.name} />
      <div className="product_content flex justify-between w-fit">
        <div className="">
          <h4 className="product__name text-lg">{product.name}</h4>
          <p className="product__description text-sm">
            {result}
         </p>
        </div>
        <div className="product__details">
          <p className="product__price text-lg font-semibold">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div> 
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;