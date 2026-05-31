
import Navbar from "../Components/Navbar";
import { computerData } from "../Data/computers";
import { Link } from "react-router-dom";
import { useState  } from "react";

import React from 'react'

const ComputersPage = () => {
  const [selected,setselected]=useState([]);
    const bata=computerData;
      let data=[];
if(selected.length==0){
  data=bata;
}
else{
  data=computerData.filter((banana)=>selected.includes(banana.company));
}


  const uniqueCompany = [
  ...new Set(computerData.map((item) => item.company))
];
  function handlechange(mango){
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
<div style={{width:"150px", fontWeight:"bold", padding:"3px", fontSize:"large", backgroundColor:"rgb(247, 247, 247)"}}>
  {uniqueCompany.map((apple) => {
    return (
      <label key={apple}>
        <input type="checkbox" 
        checked={selected.includes(apple)}
        onChange={() => handlechange(apple)}
        />
        {apple}
      </label>
    );
  })}
</div>
<div className="prosection2">
        {
            data.map((item)=>{
                return <div className="imagebox2" key={item.id}>
                  <Link to={`/computer/${item.id}`}>
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

export default ComputersPage