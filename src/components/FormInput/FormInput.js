import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const FormInput = (props)=>{
    const [productId, setProductId] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("Electronics");

    const productIdChangeHandler = (event)=>{
        setProductId(event.target.value);
    }
    const sellingPriceChangeHandler = (event)=>{
        setSellingPrice(event.target.value);
    }
    const productNameChangeHandler = (event)=>{
        setProductName(event.target.value);
    }
    const categoryChangeHandler = (event)=>{
        setCategory(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const product = {
            id: productId,
            price: +sellingPrice,
            name: productName,
            category: category
        }
        localStorage.setItem(product.id,JSON.stringify(product));
        props.onAddProduct(product);
        setProductId('');
        setSellingPrice('');
        setProductName('');
        setCategory("Electronics");
    }

    return(
        <form onSubmit={submitHandler}>
            <Input type="number" id="pId" label="Product ID: " onChange={productIdChangeHandler} value={productId} />
            <Input type="number" id="price" label="Selling Price: " onChange={sellingPriceChangeHandler} value={sellingPrice} />
            <Input type="text" id="name" label="Product Name: " onChange={productNameChangeHandler} value={productName} />
            <label htmlFor="category">Choose a Category</label>
            <select id="category" value={category} onChange={categoryChangeHandler}>
                <option value="Electronics">Electronics</option>
                <option value="Food">Food</option>
                <option value="Skin Care">Skin Care</option>
            </select>
            <Button type="submit">Add Product</Button>
        </form>
    );
}

export default FormInput;