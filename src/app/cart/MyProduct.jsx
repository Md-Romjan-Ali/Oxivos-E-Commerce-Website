import { Authcontext } from '@/component/Provider';
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';

const MyProduct = ({ product }) => {
    const { cart, setCart } = useContext(Authcontext)
    const deleteHandle = (id) => {
        const deleteData = cart.filter(carts => carts.id !== id)
        setCart(deleteData)
    }
    return (
        <div>
            <div className="bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] p-5 rounded-xl mb-2 group flex items-center flex-wrap justify-between">
                <div>
                    <p className="text-cyan-400 group-hover:text-cyan-500 text-2xl">{product.name}</p>
                    <p className='text-gray-300 font-bold text-xl gap-2 flex items-center mt-3 text-gray-300'>
                        <span className='text-2xl  font-extrabold '>৳</span>
                        {product.price}</p>
                </div>

                <div className="flex items-center gap-4">
                    <p className=" text-lg flex gap-2 items-center bg-white/10 py-2 px-3 rounded-2xl border-2 border-gray-700 text-gray-300">Sub Total: {product.price}</p>
                    <button onClick={() => deleteHandle(product.id)} className="text-red-500 p-4 rounded-full bg-red-500/20"><FaTrash size={20} className="" /></button>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;