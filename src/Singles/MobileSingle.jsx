import React from 'react'
import { mobileData } from '../Data/mobiles'
import { useParams } from 'react-router-dom'
import { useCart } from '../Context/CartProvider';
import Navbar from '../Components/Navbar';
import UserCart from '../UserCart';
import { Link } from 'react-router-dom';

const MobileSingle = () => {
    const {id}=useParams();
    const {cartitems,addToCart}=useCart();
    const data=mobileData.find((item)=>item.id==id);
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
          <div className='btns'> {
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
                        }            <button className='btn2'>Buy</button>
          </div>
          </div>
    </div>
    </>
    
  )
}

export default MobileSingle