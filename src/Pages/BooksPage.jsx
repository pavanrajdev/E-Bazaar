
import React,{useState} from 'react'

import Navbar from "../Components/Navbar";
import { booksData } from "../Data/books";
import { Link } from "react-router-dom";


const BooksPage = () => {
  const[selected,setselected]=useState([]);

  let data=[];
  if(selected.length==0){
    data=booksData;
  }
  else{
    data=booksData.filter((banana)=>selected.includes(banana.author));
  }
  const uniqueauthor = [
    ...new Set(booksData.map((item) => item.author))
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
<div style={{width:"190px", fontWeight:"bold", padding:"3px", fontSize:"large", backgroundColor:"rgb(247, 247, 247)"}}>
  {uniqueauthor.map((apple) => {
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
                  <Link to={`/book/${item.id}`}>
              <img src={item.image} alt="" className="proimage2"/>
                  </Link>
                    <div className="prodetails2"><h2>{item.title}</h2><h2 style={{color:"green"}}>${item.price}</h2></div>
             
                     </div>
            })
    }
    </div>

    </div>
    
    </>
    
    
  )
}

export default BooksPage