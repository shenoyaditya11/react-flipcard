import './styles.module.css'
import {useState} from 'react'

export const FlipCard = (props)=>{

    const [isFlip, setFlip] = useState( props.flipped === undefined ? false : props.flipped);
    const direction = props.direction===undefined?'horizontal' : props.direction;


    return(
      <div className={`card ${isFlip? 'flip' : '' } ${direction}`} 
            onClick={ ()=> setFlip(!isFlip)}>

        <div className='front'>
        {props.front}
        </div>

        <div className={`back ${direction}`}>
        {props.back}
        </div>
      

      </div>
    );

}