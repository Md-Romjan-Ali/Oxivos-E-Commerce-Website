"use client"

import { useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct";

const HomeProduct = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`https://oxivos-e-commerce.vercel.app/data.json`)
            .then(req => req.json())
            .then(res => setDatas(res))
    }, []
    )
    console.log(datas, 'from home');
    return (
        <div className="max-w-7xl mx-auto  my-10">
            <div className="max-w-2xl mx-auto text-center space-y-5 my-5">
                <h1 className="text-3xl font-bold text-gray-950">Top Picks for You</h1>
                <p className="text-lg font-semibold text-gray-500">Browse our most popular products, carefully selected to bring you the best in fashion, quality, and value.</p>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    datas?.slice(0, 4).map(data => <DisplayProduct key={data.id} data={data}></DisplayProduct>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;