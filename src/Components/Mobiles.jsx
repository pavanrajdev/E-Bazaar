
import {mobileData} from '../Data/mobiles'
import React from 'react'
import { Link } from "react-router-dom";

const Mobiles = () => {
    const data=mobileData.slice(0,5);

  
  return (
    <>
            <Link to={"/mobile"} ><h1 className='head' style={{marginTop:"8px"}}>mobiles</h1></Link>
    <div className='prosection' >
    { data.map((item)=>{
        return <div className='imgbox' key={item.id}>
          <Link to={`mobile/${item.id}`}>
        <img src={item.image} className='proimage'/>
        </Link>
        <div className="prodetails2"><h3>{item.company} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div></div>
      })
  }
    
             
   </div>
    </>
  )
}

export default Mobiles