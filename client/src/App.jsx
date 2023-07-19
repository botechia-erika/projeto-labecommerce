import { useState, useEffect } from 'react';

import { CardCtn } from './components/CardProduct/styledCardProduct';

export function App() {
    const [products, setProducts]= useState([]) 
    const URLAPI = "http://localhost:3036/products"
useEffect(() => {
  fetch(URLAPI)
  .then(response => response.json())
  .then(data => setProducts(data.result))

},[])

    return (  <div className="app">
        <div className="parent">
  <div className='head'>
        <header>
    <h1>F4LIFE</h1>
    <nav>
                <button>HOME</button>
                <button>TASKS</button>
                <button>DOCS</button>
                <button>PROJETOS</button>
                </nav>
    <div>
    <input type="text" placeholder="nome produto"/>
    <select id="categoria">
  <option value="todos" selected>F4LIFE  produtos</option>
  <option value="planos">assinaturas</option>
  <option value="food">food</option>
  <option value="rental">rental</option>
</select>
</div>
   </header>
  

            </div>

        <div className="left-side">

        <h2 id="h2__main">TITULO SEÇÃO</h2>

        </div>
        <main id="content">
           
            <section id="main__section-1" className="main__section">

                <ul> 
        {products.map((item, index) => ( 
                <CardCtn classNameName="card"
                key = { index } >

                <h2> {item.name} </h2> 
        <p>R${item.price},00</p> 
                <img src={item.image_url} alt='img projeto '/>
                <table>
                    <thead>
                    <tr>
                        <td>ATRIBUTO</td>
                        <td>VALOR</td>
                        </tr>
                    </thead>
                    <tbody>
 <tr>
<td>CODIGO</td>
<td> {item.id}</td>                  
 </tr>
 <tr>
 <td>NOME</td>
 <td>{item.name}</td>                  
</tr>
 <tr>
    <td>CATEGORIA</td> 
    <td>{item.description}</td> 
    </tr>


</tbody>
                </table>
              </CardCtn >
                 
            ))
        } </ul>
        </section>
        </main>
  
<div className="right-side">
 <footer>
           <p>UP4LIFE</p>
          </footer> </div>
 </div>
 </div>     
 )
}


