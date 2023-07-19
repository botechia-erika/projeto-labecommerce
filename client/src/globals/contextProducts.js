import * as React from "react";
import axios from "axios"
import { createContext } from "react";
import React, {useState,  createContext} from "react";
export const ProductsContext = createContext()

export function ProductsProvider({children}){
    const [productsData, setProductsData]= React.useState([]) 
const URLPRODUCTS = "http://localhost:3036/products"

const loadProducts = async()=>{
    return await axios
        .get(`${URLPRODUCTS}`)   
        .then(response => setProductsData(response.data))
        .then(data => setProductsData(data.result))
        .catch((err)=> console.log(err));

}

React.useEffect(() => {

    loadProducts()
},[])
return(
    <ProductsContext.Provider value={{productsData, setProductsData, loadProducts }}>
    {children}
    </ProductsContext.Provider>
)
}



