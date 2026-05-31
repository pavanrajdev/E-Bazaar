
import {speakerData} from '../Data/speaker'
import React from 'react'
import { Link } from "react-router-dom";

const Speakers= () => {
    const data=speakerData.slice(0,5);

  return (
    <>
    <h1>Speakers</h1>
    <div className='prosection'>
       {data.map((item)=>{
         
      return  <div className='imgbox' key={item.id}>
        <Link to={`speaker/${item.id}`}>
        <img src={item.image} className='proimage'/>
        </Link>
         
          <div className="prodetails2"><h3>{item.company} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div>
          </div>
    })
  }
    </div>
   
    </>
  )
}

export default Speakers