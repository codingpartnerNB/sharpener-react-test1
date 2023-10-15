import React from "react";
import Button from "../UI/Button/Button";

const DisplayItem = (props) => {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.id}>
            {product.name}-{product.price}-{product.category}{" "}
            {
              <Button type="button" onClick={()=>{props.onDeleteProduct(product.id)}}>
                Delete Product
              </Button>
            }
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayItem;
