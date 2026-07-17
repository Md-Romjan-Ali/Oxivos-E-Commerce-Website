"use client"
import React, { createContext, useEffect, useState } from 'react';
export const Authcontext = createContext(null)
const Provider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://oxivos-e-commerce.vercel.app/data.json`)
            .then(req => req.json())
            .then(res => setProducts(res))
    }, [])
    const product = {
        setCart,
        cart,
        products,
    }
    return (
        <div>
            <Authcontext.Provider value={product}>
                {children}
            </Authcontext.Provider>

        </div>
    );
};

export default Provider;