

import React from 'react'
import {useParams  } from "react-router-dom";
import { speakerData } from '../Data/speaker';
import Navbar from '../Components/Navbar';
import { useCart } from '../Context/CartProvider';
import { Link } from 'react-router-dom';

const SpeakerSingle = () => {
    const {id}=useParams();
    console.log(id);
    const {cartitems,addToCart}=useCart();
    const data=speakerData.find((item)=>item.id===id);
    console.log(speakerData);
    const existingItem = cartitems.find(
        item =>
            item.id === data.id &&
            item.product === data.product
    );

  return (
    <>
    <Navbar />
    <div className='singlePro'>
        <div  className='singleimage'><img src={data.image}/></div>
        <div className='details'>
          <h2>{data.company} {data.model}</h2>
          <h3>{data.description}</h3>
          <h1>${data.price}</h1>
          <div className='btns'>
            {
                            existingItem ? (
                              <Link to={"/cart"} >
                               <button className='btn1' style={{backgroundColor:"blueviolet"}}>
                                    Go To Cart
                                </button>
                              </Link>
                               
                            ) : (
                                <button
                                    onClick={() => addToCart(data)}
                                    className='btn1'
                                >
                                    Add To Cart
                                </button>
                            )
                        }        <button className='btn2'>Buy</button>
          </div>
          </div>
    </div>
    
    </>
    
  )
}

export default SpeakerSingle