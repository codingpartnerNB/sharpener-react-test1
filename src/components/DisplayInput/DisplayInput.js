import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayInput = (props) => {
  const categories = ["Electronics", "Food", "Skin Care"];

  const filteredCategoryElect = props.products.filter((product) => {
    return product.category === categories[0];
  });
  const filteredCategoryFood = props.products.filter((product) => {
    return product.category === categories[1];
  });
  const filteredCategorySkin = props.products.filter((product) => {
    return product.category === categories[2];
  });


  return (
    <div>
      <h1>Products</h1>
      <div>
        <h3>Electronic Items</h3>
        <DisplayItem
          products={filteredCategoryElect}
          onDeleteProduct={props.onDeleteProduct}
        />
      </div>
      <div>
        <h3>Food Items</h3>
        <DisplayItem
          products={filteredCategoryFood}
          onDeleteProduct={props.onDeleteProduct}
        />
      </div>
      <div>
        <h3>Skincare Items</h3>
        <DisplayItem
          products={filteredCategorySkin}
          onDeleteProduct={props.onDeleteProduct}
        />
      </div>
    </div>
  );
};

export default DisplayInput;
