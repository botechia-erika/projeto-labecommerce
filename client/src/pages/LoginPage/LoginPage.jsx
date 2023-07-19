import { useState, useEffect } from 'react';

import { CardCtn } from './../../components/CardProduct/styledCardProduct';

export function LoginPage() {
    const [users, setUsers]= useState([]) 
    const URLAPI = "http://localhost:3036/users"
useEffect(() => {
  fetch(URLAPI)
  .then(response => response.json())
  .then(data => setUsers(data.result))

},[])

    return (  <>
{console.log(users)}


     <div>
     <div class="container50">
      <form class="login">

       
        <p>
          <label htmlFor="username"> NOME DE USUARIO:</label>
          <input type="text" name="username" id="username" placeholder="nome de usuario"/>
        </p>
        <p>
          <label htmlFor="password"> Ingrese sua SENHA:</label>
          <input type="text" name="password__password" id="password__password" placeholder="Senha"/>
        </p>
      </form>
    </div>
     </div>
 </>
 )
}


