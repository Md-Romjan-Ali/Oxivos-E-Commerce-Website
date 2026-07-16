"use client"

import { useContext } from "react";
import { Authcontext } from "./Provider";

const AddCartButton = ({ findData }) => {
    const { cart, setCart } = useContext(Authcontext)

    const cartHandle = () => {
        setCart([...cart, findData])

    }
    console.log(cart, 'from cart');
    return (
        <div>
            <button onClick={cartHandle} className='button1'>
                Add to Cart
            </button>
        </div>
    );
};

export default AddCartButton;