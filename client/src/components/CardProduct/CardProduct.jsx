import { Heading } from '@chakra-ui/react'
import CardCtn from './styledCardProduct'

export function CardProduct({ item }) {

    return ( 
        <CardCtn className="card"
        key = { index } >

        <h2> {item.name} </h2> 
        <span>R$ {item.price},00</span> 
        <img src={item.image_url} alt='img produto '/>
        <table>
            <thead>
            <tr>
                <td> {item.id}</td> 
            <td>{item.name}</td> 
            </tr>
            </thead>
<tbody>
<tr>
<td>Assinatura</td> 
<td>{item.description}</td> 
</tr>


</tbody>
        </table>
        <Box m={'25px'}>
        <Button>Detalhes</Button>
        </Box></CardCtn >
    )

}