
import {furnitureData} from '../Data/furniture'
import React from 'react'
import { Link } from "react-router-dom";

const Furniture= () => {
    const data=furnitureData.slice(0,5);

  return (
    <>
        <Link to={"/furniture"}><h1 className='head'>Furniture</h1></Link>
    <div className='prosection'>
       {data.map((item)=>{
         
      return  <div className='imgbox' key={item.id}>
          <Link to={`furniture/${item.id}`}>
        <img src={item.image} className='proimage' style={{height:"250px"}}/>
        </Link>  <div className="prodetails2"><h3>{item.company} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div>
             
          </div>
    })
  }
    </div>
   
    </>
  )
}

export default Furniture