"use client"

import { Authcontext } from "@/component/Provider";
import { useContext } from "react";

const CartPage = () => {
    const { cart } = useContext(Authcontext)
    return (
        <div>
            this is cart page
        </div>
    );
};

export default CartPage;