"use client"

import { useContext } from "react";
import { Authcontext } from "./Provider";
import toast from "react-hot-toast";

const AddCartButton = ({ findData }) => {
    const { cart, setCart } = useContext(Authcontext)

    const cartHandle = () => {
        setCart([...cart, findData])
        toast.success("Add to Cart Successfully")
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