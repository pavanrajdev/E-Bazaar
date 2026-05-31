

import React from 'react'
import { useCart } from './Context/CartProvider'
import Navbar from './Components/Navbar';

const UserCart = () => {
    const {
  cartitems,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = useCart();

 if (cartitems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <>
    <Navbar />
     {
        cartitems.map((items,idx)=>{
        return <div className='cartsection' key={idx}>
      <div className='cartprop'>
        <div className='cartimage'><img src={items.image} alt="" /></div>
        <div style={{margin:"20px"}}><h3 >{items.description}</h3> <h1 style={{color:"green"}}>${items.price*items.count}</h1></div>
        </div>
        <div className='bt'>
              <button onClick={() => decreaseQuantity(items.id, items.product)}>-</button>
                <h3>{items.count}</h3>
              <button onClick={() => increaseQuantity(items.id, items.product)}>+</button>
              <button onClick={() => removeFromCart(items.id, items.product)} style={{backgroundColor:"red", width:"100px",color:"white"}}>Remove</button>
     
            </div>
        </div>
        })
    }
    
    </>
   
  )
}

export default UserCart