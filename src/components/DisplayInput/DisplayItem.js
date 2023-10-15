import React from "react";
import Button from "../UI/Button/Button";

const DisplayItem = (props) => {
  const deleteItem = (id)=>{
    localStorage.removeItem(id);
    props.onDeleteProduct(id);
  }
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.id}>
            {product.name}-{product.price}-{product.category}{" "}
            {
              <Button type="button" onClick={()=>{deleteItem(product.id)}}>
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
