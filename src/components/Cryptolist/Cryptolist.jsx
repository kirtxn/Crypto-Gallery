import React from 'react'
import './Cryptolist.css'
import Cryptocard from '../CryptoCard/Cryptocard'

function Cryptolist({coinsData}) {
  return (
    <div className='crypto-list'>
      {coinsData.map((coins,index)=>{
        return(
            <Cryptocard 
                key={index}
                image={coins.image}
                name={coins.name}
                price={coins.current_price}
            />
        );
      
      })}
     
     
    </div>
  )
}

export default Cryptolist
