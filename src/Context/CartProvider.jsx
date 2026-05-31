import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartitems, setcartitems] = useState([]);

    function addToCart(newitem) {

        // check item already exists
        const existingItem = cartitems.find(
            item =>
                item.id === newitem.id &&
                item.product === newitem.product
        );

        // if already exists do nothing
        if (existingItem) {
            return;
        }

        // add item with count
        setcartitems([
            ...cartitems,
            { ...newitem, count: 1 }
        ]);
    }


    function removeFromCart(id, product) {

        setcartitems(
            cartitems.filter(
                item =>
                    !(
                        item.id === id &&
                        item.product === product
                    )
            )
        );
    }

    // INCREASE
    function increaseQuantity(id, product) {

        setcartitems(
            cartitems.map(item =>
                item.id === id &&
                item.product === product
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(id, product) {

        setcartitems(
            cartitems.map(item =>
                item.id === id &&
                item.product === product
                    ? {
                          ...item,
                          count:
                              item.count > 1
                                  ? item.count - 1
                                  : 1
                      }
                    : item
            )
        );
    }

    return (
        <CartContext.Provider
            value={{
                cartitems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};