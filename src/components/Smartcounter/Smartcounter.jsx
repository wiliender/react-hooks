import {useState} from 'react'

function Smartcounter() {
    //retorna um vetor
    //1. variavel stateful
    //2. função amarrada a essa variavel que altera o valor
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity+1)}>Aumertar</button>
        </>
    )
}

export default Smartcounter;