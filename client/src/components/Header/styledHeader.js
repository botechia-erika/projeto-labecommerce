import styled from "@emotion/styled"
export const HeaderCtn =styled.header`

.A1 {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 250px;
    align-content: space-around;
    justify-content: space-around;
    background: var(--dark-100);
    color: snow;
}

#inputClient-1 {
    border: none;
    border-radius: 28px;
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    -ms-border-radius: 28px;
    -o-border-radius: 28px;
    margin: 0 10px;
    max-width: 70px;
    display: none;
}

.A1-a {
    display: flex;
    max-width: 150px;
    max-height: 110px;
    border-radius: 80px;
    object-fit: cover;
    align-content: center;
}

.A1-c {
    display: flex;
    flex-flow: row wrap;
    min-width: 30px;
    max-height: 110px;
    object-fit: cover;
    justify-content: space-around;
    align-content: center;
    margin: 10px 20px;
    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    -ms-border-radius: 35px;
}

.span-A1-c,
#toggleSearch-1 {
    padding: .51rem;
    border-radius: 28px;
    margin: auto 10px;
    border: 2px solid var(--principal-orange);
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    -ms-border-radius: 28px;
    -o-border-radius: 28px;
}

.h1Title {
    color: gold;
    text-align: center;
}

.h1Title-White {
    color: white;
}

.span-A1-c:hover {
    border: 2px solid darkorange;
    background: gold;
    color: #000000;
}

.A1-text {
    color: darkgray;
    text-align: center;
}

`

export const Title = styled.h1`
font-size: 4rem;
margin: auto;
`