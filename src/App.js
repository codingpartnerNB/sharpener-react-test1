import React, { useState, useEffect } from "react";
import FormInput from './components/FormInput/FormInput';
import DisplayInput from './components/DisplayInput/DisplayInput';

const products = [];

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

  const deleteProductHandler = (prodId)=>{
    setProductList(
      productList.filter((product)=>{
        return product.id !== prodId;
      })
    );
  }


  return (
    <React.Fragment>
      <FormInput onAddProduct = {addProductHandler} />
      <DisplayInput products={productList} onDeleteProduct={deleteProductHandler} />
    </React.Fragment>
  );
}

export default App;
