import React from 'react'
import {useState} from 'react'

import './flipcard.css'

const card = {
  display:"flex",
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '1rem' ,
  height: '18rem',
  width:'18rem',
  marginTop:'.5rem',
  transform:'perspective(1000px) rotateY(var(--rotate-y, 0)) rotateX(var(--rotate-x, 0))',
  transformStyle: 'preserve-3d',
  transition: '150ms',
  backgroundColor: 'rgba(0,0,0,.3)',
}

const back = {
  transform: "rotateY(180deg)"
}

const backVertical = {
  transform:"rotateZ(180deg)",
  transform:"rotateX(180deg)"
}

const cardFlipVertical = {
  ...card,
  '--rotate-x':"180deg"
}

const cardFlipHorizontal ={
  ...card,
  '--rotate-y':"180deg"
}

const frontAndBack ={
  position: "absolute",
  backfaceVisibility: "hidden",
  width: "100%",
  height: "100%"
}





export const FlipCard = (props)=>{

    const [isFlip, setFlip] = useState( props.flipped === undefined ? false : props.flipped);
    const direction = props.direction===undefined?'horizontal' : props.direction;


    return(
      <div style={isFlip?( direction === 'vertical' ? cardFlipVertical : cardFlipHorizontal ): card} 
            onClick={ ()=> setFlip(!isFlip)}>

        <div className='front' style={frontAndBack}>
        {props.front}
        </div>

        <div style={direction === 'vertical'? {...backVertical, ...frontAndBack} : {...back, ...frontAndBack}}>
        {props.back}
        </div>
      

      </div>
    );

}