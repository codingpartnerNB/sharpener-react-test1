import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayInput = (props)=>{
    const categories = ["Electronics", "Food", "Skin Care"];
    const filteredCategoryElect = props.products.filter(product=>{
        return product.category === categories[0];
    });
    const filteredCategoryFood = props.products.filter(product=>{
        return product.category === categories[1];
    });
    const filteredCategorySkin = props.products.filter(product=>{
        return product.category === categories[2];
    });
    const deleteProductHandler = (id)=>{
        localStorage.removeItem(id);
    }
    return(
        <div>
            <h1>Products</h1>
            <div>
                <h3>Electronic Items</h3>
                <DisplayItem products={filteredCategoryElect} onDeleteProduct = {deleteProductHandler} />
            </div>
            <div>
                <h3>Food Items</h3>
                <DisplayItem products={filteredCategoryFood} onDeleteProduct = {deleteProductHandler} />
            </div>
            <div>
                <h3>Skincare Items</h3>
                <DisplayItem products={filteredCategorySkin} onDeleteProduct = {deleteProductHandler} />
            </div>
        </div>
    );
}

export default DisplayInput;