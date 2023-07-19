import React, { Fragment, useState, useEffect } from 'react';
import { Axios } from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ProductsPage } from './../pages/ProductsPage/ProductsPage'
import { HomePage } from './../pages/HomePage/HomePage'
import { Categories } from './../pages/Categories/Categories'
import { LoginPage } from './../pages/LoginPage/LoginPage'
import { useParams } from 'react-router-dom';

import { CATPATHS } from '../CONSTANTS/URL';
export function AppRouter(){
  


  
    return (

     <div className="app">
      
     <BrowserRouter>
   
        <div className="parent">


        <header className='head'>
  
    <nav className="menu">
  <label>
   
  </label>
  <ul className="menu__item ">
    <li className="item"><a href="/home" className="link-item">Home</a></li>
    <li className="item"><a href="/produtos" className="link-item">Catalogo</a></li>
    <li className="item"><a href="/users" className="link-item">CLUB</a></li>

   </ul>


</nav>
 <h1>F4LIFE</h1>
<div>
    <input type="text" placeholder="nome produto"/>
    <select id="categorias">
  <option value="0" selected>F4LIFE  produtos</option>
  <option value="1" onChange={(e)=>{handleCategories(e.target.value)}}>cantina</option>
  <option value="2" onChange={(e)=>{handleCategories(e.target.value)}}>rental cars</option>
  <option value="3" onChange={(e)=>{handleCategories(e.target.value)}}>rental reps</option>
  <option value="4" onChange={(e)=>{handleCategories(e.target.value)}}>mensal</option>
</select>
</div>
   </header>
  

        <div className="left-side">

        <h2 id="h2__main"></h2>

        </div>
        <main id="content">
           
            <section  className="main__section">
  
   <Routes>

<Route path="/" element={<HomePage />} />
<Route path="/produtos" element={<ProductsPage/>} />    

<Route path="/categorias" element={<Categories/>} />
<Route path="/users" element={<LoginPage/>} />
</Routes>    



</section>
        </main>
  
<div className="right-side">
 <footer>
           <p>UP4LIFE</p>
          </footer> </div>
 </div>
 </BrowserRouter>
 </div>     

  )
}
