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
        <input name="usersId"/>
        <input name="usersPassword"/>
     </div>
 </>
 )
}


