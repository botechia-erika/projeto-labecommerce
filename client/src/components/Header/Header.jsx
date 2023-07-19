import React from 'react'
import { HeaderCtn , Title} from './styledHeader'
const Header = () => {
  return (
    <HeaderCtn>
      <div class="A1">
        <img src="./../assets/img/logo-1.png" class="A1-a" />

        <div class="A1-b">
            <h1 class="h1Title" id="title">BE.<span class="h1Title-White">WEB.</span>API</h1>
            <p>Devloper to <strong>SOLVE</strong> your problem</p>
        </div>


        <div class="A1-c">
            <span class="span-A1-c"><i class="fas fa-dollar"></i></span>
            <span class="span-A1-c"><input class="inputClient" /><i class="fas fa-search"></i></span>
            <span class="span-A1-c"><i class="fa-sharp fa-solid fa-user"></i></span>
        </div>
    </div>

    </HeaderCtn>
  )
}

export default Header
