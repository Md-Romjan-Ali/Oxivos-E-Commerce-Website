"use client"
import React, { createContext, useEffect, useState } from 'react';
export const Authcontext = createContext(null)
const Provider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://oxivos-e-commerce.vercel.app/data.json`)
            .then(req => req.json())
            .then(res => setProducts(res))
    }, [])

    return (
        <div>
            <Authcontext.Provider value={products}>
                {children}
            </Authcontext.Provider>

        </div>
    );
};

export default Provider;