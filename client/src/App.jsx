import Router, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { CardCtn } from './components/CardProduct/styledCardProduct';
import {AppRouter} from './root/AppRouter';

export function App() {
    const [productsData, setProductsData]= useState([]) 
    const URLPRODUCTS = "http://localhost:3036/products"
    const CATFOODS = "http://localhost:3036/category/FOODS"
    const [foodData, setFoodData]=useState()
    const loadProducts = async()=>{
        return await axios
     .get(`${URLPRODUCTS}`)   
    .then(response => setData(response.data))
  .then(data => setProducts(data.result))
.catch((err)=> console.log(err));
}

const loadFood = async()=>{
    return await axios
 .get('http://localhost:3036/category/FOODS')   
.then(response => setData(response.data))
.then(data => setFoodData(data.result))
.catch((err)=> console.log(err));
}

useEffect(() => {
loadFood()
loadProducts()
  
  },[])
console.log(foodData)
    return (
       <>   
     <AppRouter/>
</>

    )
}