import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DisplayProduct = ({ data }) => {
    console.log(data, 'from dispaly');
    return (
        <div className='group bg-gray-300 rounded-4xl overflow-hidden hover:scale-103 transition-all duration-300'>
            <div className='overflow-hidden '>
                <div>
                    <Image
                        width={500}
                        height={500}
                        src={data.image}
                        alt={data.name}
                        className='h-80 group-hover:scale-105 transition-all duration-1000 w-full object-cover'
                    />
                </div>

                <div className='p-5'>
                    <h3 className='text-2xl transition-colors duration-300 font-bold text-cyan-500 group-hover:text-cyan-600'>{data.name}</h3>
                    <div className='flex justify-between items-center my-3'>
                        <h2 className='text-cyan-700 text-lg font-semibold'>{data.category}</h2>
                        <p className='text-red-500'>{data.price} /-</p>
                    </div>

                </div>
                <Link href={`/allProduct/${data.id}`} className='text-lg w-full bg-cyan-500 rounded-2xl py-2 text-center hover:bg-cyan-700 text-white block transition-all duration-500'>Details</Link>
            </div>
        </div>
    );
};

export default DisplayProduct;
