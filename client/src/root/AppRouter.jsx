import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ProductsPage } from './../pages/ProductsPage/ProductsPage'
import { HomePage } from './../pages/HomePage/HomePage'
import { Categories } from './../pages/Categories/Categories'
import { LoginPage } from './../pages/LoginPage/LoginPage'
import { useParams } from 'react-router-dom';
export function AppRouter(){



  return (
    <>
     <div className="app">
      
     <BrowserRouter>
   
        <div className="parent">
  <div className='head'>
        <header>
    <h1>F4LIFE</h1>
    <nav>
                <Link to="/">HOME</Link>
                <Link to="/produtos">PRODUTOS</Link>
          
                <Link to="/categorias">CATEGORIAS</Link>
                <Link to="/users">CLUB</Link>
                </nav>
                <div>
    <input type="text" placeholder="nome produto"/>
    <select id="categorias">
  <option value="todos" selected>F4LIFE  produtos</option>
  <option value="planos">assinaturas</option>
  <option value="food">food</option>
  <option value="rental">rental</option>
</select>
</div>
   </header>
  

            </div>

        <div className="left-side">

        <h2 id="h2__main"></h2>

        </div>
        <main id="content">
           
            <section id="main__section-1" className="main__section">
  
   <Routes>

<Route index element={<HomePage />} />
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
    </>
  )
}
