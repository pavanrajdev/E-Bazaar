
import {menData} from '../Data/men'
import React from 'react'
import { Link } from "react-router-dom";

const Mens= () => {
    const data=menData.slice(0,5);

  return (
    <>
    <h1>Mens-Wear</h1>
    <div className='prosection'>
       {data.map((item)=>{
         
      return  <div className='imgbox' key={item.id}>
         <Link to={`men/${item.id}`}>
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

export default Mens