
import Navbar from "../Components/Navbar";
import { fridgeData } from "../Data/fridge";
import { Link } from "react-router-dom";
import { useState } from "react";

import React from 'react'


const FridgePage = () => {
  const[selected,setselected]=useState([]);

  let uniquebrand=[  ...new Set(fridgeData.map((item)=>item.brand))];

  let data=[];
  if(selected.length==0){
    data=fridgeData;
  }
  else{
    data=fridgeData.filter((banana)=>selected.includes(banana.brand));
  }

function handlechange(mango) {
  if(selected.includes(mango)){
    setselected(selected.filter((orange)=>orange!=mango));
  }
  else{
    setselected([...selected,mango]);
  }
}

  return (
    <>

    <Navbar />
    <div style={{display:"flex"}}>
      <div  style={{width:"150px", fontWeight:"bold", padding:"3px", fontSize:"large", backgroundColor:"rgb(247, 247, 247)"}}>
        {
          uniquebrand.map((banana)=>{
           return <label key={banana}>
              <input type="checkbox" 
          checked={selected.includes(banana)}
          onChange={()=>{handlechange(banana)}}
          />{banana}
            </label>
            
          })
        }
      </div>
      <div className="prosection2">
        {
            data.map((item)=>{
                return <div className="imagebox2" key={item.id}>
                  <Link to={`/fridge/${item.id}`}>
                  <img src={item.image} alt="" className="proimage2"/>
                  </Link>
                <div className="prodetails2"><h3>{item.brand} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div>

                     </div>
            })
    }
    </div>
    </div>
    
    </>
    
    
  )
}

export default FridgePage