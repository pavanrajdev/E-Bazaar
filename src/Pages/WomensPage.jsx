
import Navbar from "../Components/Navbar";
import { womanData } from "../Data/woman";
import { Link } from "react-router-dom";
import {  useState} from "react";

import React from 'react'

const WomensPage = () => {

   const [selected,setselected]=useState([]);
    let data=[];
    if(selected.length==0){
      data=womanData;
    }
    else{
      data=womanData.filter((apple)=>selected.includes(apple.brand));
    }

    let uniquebrand=[...new Set(womanData.map((mango)=>mango.brand))]

    function handlechange(banana) {
      if(selected.includes(banana)){
        setselected(selected.filter((grape)=>grape!=banana));
      }
      else{
        setselected([...selected,banana]);
      }
    }
  return (
    <>

    <Navbar />
    <div style={{display:"flex"}}>
      <div style={{width:"150px", fontWeight:"bold", padding:"3px", fontSize:"large", backgroundColor:"rgb(247, 247, 247)"}}>
{
  uniquebrand.map((orange)=>{
    return <label key={orange}>
      <input type="checkbox"
      checked={selected.includes(orange)}
      onChange={()=>handlechange(orange)}
      />{orange}
    </label>
  })
}
      </div>
    <div className="prosection2">
        {
            data.map((item)=>{
                return <div className="imagebox2" key={item.id}>
                  <Link to={item.id}>
                                <img src={item.image} alt="" className="proimage2"/>
                  </Link>
                    <div className="prodetails2"><h3>{item.company} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div>
             
                     </div>
            })
    }
    </div>
    </div>
    </>
    
    
  )
}

export default WomensPage