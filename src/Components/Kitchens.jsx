
import {kitchenData} from '../Data/kitchen'
import React from 'react'
import { Link } from "react-router-dom";

const Kitchens= () => {
    const data=kitchenData.slice(0,5);

  return (
    <>
    <h1>Kitchen</h1>
    <div className='prosection'>
       {data.map((item)=>{
         
      return  <div className='imgbox' key={item.id}><Link to={`kitchen/${item.id}`}>
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

export default Kitchens