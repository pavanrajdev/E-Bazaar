import React from 'react'
import { useParams } from "react-router-dom"
import { booksData } from '../Data/books';
import Navbar from '../Components/Navbar';
import { useCart } from '../Context/CartProvider';
import { Link } from "react-router-dom";

const BookSingle = () => {

    const { id } = useParams();
    const { cartitems, addToCart } = useCart();

    const data = booksData.find((item) => item.id === id);

    const existingItem = cartitems.find(
        item =>
            item.id === data.id &&
            item.product === data.product
    );

    return (
        <>
            <Navbar />

            <div className='singlePro'>

                <div className='singleimage'>
                    <img src={data.image} alt="" />
                </div>

                <div className='details'>

                    <h2>{data.title}  <br /> by <u style={{color:"blue"}}>{data.author}</u></h2>

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
                        }

                        <button className='btn2'>
                            Buy
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default BookSingle