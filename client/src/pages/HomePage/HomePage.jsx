import { useState, useEffect } from 'react';
import { ButtonNext, ButtonPrev, BtnCtn } from './styledHome';
import { CardCtn } from './../../components/CardProduct/styledCardProduct';

export function HomePage() {
    const [products1, setProducts1]= useState([]) 
    const URLAPI = "http://localhost:3036/products"
useEffect(() => {
  fetch(URLAPI)
  .then(response => response.json())
  .then(data => setProducts1(data.result))

},[])

    return (  <div>
                <ul> 
        {products1.map((item, indiceCard) => ( 
                <CardCtn classNameName="card"
                key={ indexCard }>

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
        <BtnCtn>
<ButtonPrev>PREVIOUS</ButtonPrev>
<ButtonNext>NEXT</ButtonNext>
</BtnCtn>
</div>

 )
}


