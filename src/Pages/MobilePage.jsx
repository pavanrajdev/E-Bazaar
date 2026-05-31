
import Navbar from "../Components/Navbar";
import { mobileData } from "../Data/mobiles";
import { Link } from "react-router-dom";
import { useState } from "react";

import React from 'react'

const MobilePage = () => {
const [selected,setselected]=useState([]);
    let data=[];
    if(selected.length==0){
      data=mobileData;
    }
    else{
      data=mobileData.filter((apple)=>selected.includes(apple.company));
    }
    let uniquecompany=[...new Set(mobileData.map((mango)=>mango.company))]

    function  handlechange(orange) {
      if(selected.includes(orange)){
        setselected(selected.filter((beta)=>beta!=orange));
      }
      else{
        setselected([...selected,orange]);
      }
    }
    return (
    <>

    <Navbar />
    <div style={{display:"flex"}}>
      <div style={{width:"150px", fontWeight:"bold", padding:"3px", fontSize:"large", backgroundColor:"rgb(247, 247, 247)"}}>
        {
         uniquecompany.map((banana)=>{
          return <label key={banana}>
            <input type="checkbox"  
          checked={selected.includes(banana)}
          onChange={()=>handlechange(banana)}
          />{banana}
            </label>
         }) 
        }
      </div>
      <div className="prosection2">
        {
            data.map((item)=>{
                return <div className="imagebox2" key={item.id}>
                  <Link to={`/mobile/${item.id}`}>
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

export default MobilePage