"use client"

import { Authcontext } from "@/component/Provider";
import { useContext } from "react";
import MyProduct from "./MyProduct";
import { FaSearch } from "react-icons/fa";

const CartPage = () => {
    const { cart } = useContext(Authcontext)

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-10 min-h-screen">
                {
                    cart.length === 0 ?

                        <div className="max-w-md mx-auto flex justify-center items-center flex-col space-y-4 bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] p-5 py-10 rounded-2xl shadow-2xl text-gray-200">
                            <FaSearch size={25} />
                            <p>Your Cart is Empty</p>
                            <p className="text-center">You have not added any products yet. Explore our collection and find your favorites.</p>
                        </div>
                        :
                        <div>
                            <div className="text-center max-w-2xl mx-auto">
                                <h1 className="text-3xl font-bold">My Cart</h1>
                                <p className="text-lg text-gray-700 my-5">Review the products you have added to your cart, update quantities, and check your total before proceeding to checkout.</p>
                            </div>
                            <div>
                                {
                                    cart.map((product, index) =>
                                        <MyProduct key={index} product={product} />
                                    )
                                }
                            </div>
                        </div>
                }


            </div>
        </div>

    );
};

export default CartPage;