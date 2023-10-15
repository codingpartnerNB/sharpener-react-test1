import React, { useState, useEffect } from "react";
import FormInput from './components/FormInput/FormInput';
import DisplayInput from './components/DisplayInput/DisplayInput';

const products = [
  {
    id:"product1",
    price:3000,
    name:"Nokia",
    category:"Inc"
  }
];

function App() {
  const [productList, setProductList] = useState(products);

  useEffect(()=>{
    const keys = Object.keys(localStorage);
    const arr = [];
    keys.forEach((key)=>{
      arr.push(JSON.parse(localStorage.getItem(key)));
    }); 
    setProductList(arr);
  },[]);

  const addProductHandler = (newProduct)=>{
    setProductList((prev)=>{
      return [...prev, newProduct];
    })
  }
  return (
    <React.Fragment>
      <FormInput onAddProduct = {addProductHandler} />
      <DisplayInput products={productList} />
    </React.Fragment>
  );
}

export default App;
