import React from 'react'
import './Cryptocard.css'
function Cryptocard({image,name,price}) {
  return (
    <div className='card'>
        <div className="image">
            <img src={image} alt="pic" className='image1'/>
        </div>
        <div className="details">
            <h2 className='name'>{name}</h2>
            <h3 className='price'>{price}</h3>
            
        </div>
      
    </div>
  )
}

export default Cryptocard
