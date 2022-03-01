import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css' 

export default function Ifoodcounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonstyle] = useState('couter-button-minus-active');

    useEffect(() => {
        document.getElementById('moeda').innerHTML = 2.00 * value;
    },[value]);

    useEffect(() => {
        console.log(`o estilo do botão é ${buttonStyle}`)
    },[buttonStyle]);

    function down(){
        if (value <= 1) {
            setButtonstyle('counter-button-minus-desactive');
        }

        if(value > 0){
            setValue(value-1);
        }
    }

    function up(){
        if(value < 10){
            setValue(value+1);
            setButtonstyle('couter-button-minus-active');
        }
    }

  return (
    <div className='countex-wrapper'>
        <button
            className={buttonStyle}
            onClick={down}
        >
            -
        </button>
        <p>{value}</p>
        <button
            className='counter-button-plus-active'
            onClick={up}
        >
            +
        </button>
        <button id='moeda'>12,00</button>
    </div>
  )
}
