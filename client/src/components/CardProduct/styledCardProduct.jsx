import styled from "styled-components";





export const CardCtn = styled.li `
display: inline-block;
font-family: 'Catamaran', sans-serif;
width: 100%;
    max-width:380px;
    height: 100%;
    object-fit: cover;
    min-height: 485px;
max-height: 490px;
margin: 10px auto;
background:
radial-gradient(black 15%, transparent 16%) 0 0,
radial-gradient(black 15%, transparent 16%) 8px 8px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
background-color:#282828;
background-size:16px 16px;
color: white;
padding: 1rem;
object-fit: cover;
border-radius: 28px;
border: 2px solid #b8bab6;
border-radius: 9px;
font-size: 1.3rem;
align=self: center;
margin: 30px auto;
CardCtn:hover{
    transform: scale(1.1);
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.8);
}
h2{
    width: 100%;
    background: #c7fbff;
    color: black;
    margin: 0.8 auto;
    text-align: center;
    line-height: 35px;
}

    p{
        text-align: center;
        margin: 1rem auto;
    }
img{
display: flex;
flex-flow: column wrap;
width: 80%;
max-height: 115px;
min-width: 220px;
border-radius: 28px;
margin: 30px auto;
}

table, td, tr{
border: 2px solid white;
font-size: 15px;

}

table{width: 80%;
margin-left: 10%;
};


@media and (max-width: 500px){
    width: 80%;
    
}


`