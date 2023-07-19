import { useState, useEffect } from 'react';

import { CardCtn } from './../../components/CardProduct/styledCardProduct';

export function ProductsPage() {
    const [products, setProducts]= useState([]) 
    const URLAPI = "http://localhost:3036/products" 
useEffect(() => {
  fetch(URLAPI)
  .then(response => response.json())
  .then(data => setProducts(data.result))

},[])

    return ( 


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
      
 )
}


