

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = params
    const res = await fetch(``)
    const findData = detailsData.find(data => data.id === id)
    return (
        <div className='group bg-gray-300 rounded-4xl overflow-hidden hover:scale-103 transition-all duration-300'>
            <div className='overflow-hidden '>
                <div>
                    <Image
                        width={500}
                        height={500}
                        src={findData}
                        alt={findData}
                        className='h-[50vw] group-hover:scale-105 transition-all duration-1000 max-w-4xl object-cover'
                    />
                </div>

                <div className='p-5'>
                    <h3 className='text-2xl transition-colors duration-300 font-bold text-cyan-500 group-hover:text-cyan-600'>{findData}</h3>
                    <div className='flex justify-between items-center my-3'>
                        <h2 className='text-cyan-700 text-lg font-semibold'>{findData}</h2>
                        <p className='text-red-500'>{findData} /-</p>
                    </div>

                </div>
                <Link href={`/allProduct/${data.id}`} className='text-lg w-full bg-cyan-500 rounded-2xl py-2 text-center hover:bg-cyan-700 text-white block transition-all duration-500'>Details</Link>
            </div>
        </div>
    );
};

export default DetailsPage;
// {
//     "id": 3,
//     "name": "Linen Casual Shirt",
//     "category": "Shirt",
//     "price": 1190,
//     "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
//     "rating": 4.4,
//     "colors": [
//         "Sky Blue",
//         "White"
//     ],
//     "sizes": [
//         "S",
//         "M",
//         "L",
//         "XL"
//     ],
//     "inStock": true,
//     "description": "Soft linen shirt designed for all-day comfort."
// }