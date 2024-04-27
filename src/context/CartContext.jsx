import { createContext, useEffect, useState } from "react";


export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)



    const addItem = (item, quantity) => {
        const cartCopy = [...cart];
        const index = cartCopy.findIndex(product => product.id === item.id)
        if (index != -1) {
            cartCopy[index].quantity = cartCopy[index].quantity + quantity;
            cartCopy[index].subtotal = cartCopy[index].price * cartCopy[index].quantity;
            setCart(cartCopy);
        }
        else {
            const newItem = {
                ...item,
                quantity,
                subtotal: item.price * quantity
            }
            setCart([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        const cartFiler = cart.filter(item => item.id !== id);
        setCart(cartFiler)
    }

    const clearCart = () => {
        setCart([])
    }

    const handleTotalItems = () => {
        const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
        setTotalItems(newTotalItems);
    }
 
    const handleTotalPrice = () => {
        const newTotalPrice = cart.reduce((acum, item) => acum + item.subtotal, 0);
        setTotalPrice(newTotalPrice);
    }

    useEffect(() => {
        handleTotalItems();
        handleTotalPrice();
    }, [cart])

    const objectValues = {
        cart,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        clearCart,
    }

    return <CartContext.Provider value={objectValues}>{children}</CartContext.Provider>
}