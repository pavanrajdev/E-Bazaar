
import {booksData} from '../Data/books'
import React from 'react'
import { Link } from "react-router-dom";

const Books= () => {
    const data=booksData.slice(0,5);

  return (
    <>
    <h1>Books</h1>
    <div className='prosection'>
       {data.map((item)=>{
      return  <div className='imgbox' key={item.id}>
          <Link to={`book/${item.id}`}>
           <img src={item.image} className='proimage' style={{marginLeft:"20px"}}/>
          </Link>
           <div className="prodetails2"><h3>{item.company} {item.model}</h3><h2 style={{color:"green"}}>${item.price}</h2></div>
              </div>
    })
  }
    </div>
   
    </>
  )
}

export default Books