import {acData} from '../Data/ac'
import React from 'react'
import { Link } from "react-router-dom";
const Acs = () => {
    const data=acData.slice(0,5);
  return (
    <>
            <Link to={"/ac"}><h1 className='head'>Air-Conditioners</h1></Link>
  
    <div className='prosection'>
       {data.map((item)=>{
         
      return  <div className='imgbox' key={item.id}><Link to={`ac/${item.id}`}>
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

export default Acs