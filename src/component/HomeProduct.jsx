"use client"

import { useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct";
import { motion } from "motion/react"
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const HomeProduct = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`https://oxivos-e-commerce.vercel.app/data.json`)
            .then(req => req.json())
            .then(res => setDatas(res))
    }, []
    )
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto  my-10">
            <div className="max-w-2xl mx-auto text-center space-y-5 my-5">

                <h1 className='text-4xl relative flex justify-center items-center font-bold'>Top Picks for You
                    <span className='h-2 w-20 shadow-2xl bg-cyan-400 rounded-2xl absolute -bottom-3'></span>
                </h1>
                <p className="text-lg font-semibold text-gray-500">Browse our most popular products, carefully selected to bring you the best in fashion, quality, and value.</p>


            </div>
            <div className="text-lg text-cyan-700 my-4 flex justify-end items-center gap-1 hover:text-cyan-600 ">
                <Link href={'/allProduct'} className="">Explore Products </Link>
                <FaArrowRight />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    datas?.slice(0, 4).map(data => <DisplayProduct key={data.id} data={data}></DisplayProduct>)
                }
            </div>


        </motion.div>
    );
};

export default HomeProduct;