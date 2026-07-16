"use client"
import DisplayProduct from '@/component/DisplayProduct';
import { Authcontext } from '@/component/Provider';
import React, { useContext } from 'react';

const AllProduct = () => {
    const useData = useContext(Authcontext)
    console.log(useData, 'from  all ');
    return (
        <main className='bg-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col justify-center space-y-3 py-10 text-center'>
                    <h1 className='text-4xl font-bold'>Our Featured Collection</h1>
                    <p className='text-lg font-semibold leading-9'>Browse our carefully selected collection of clothing, accessories, and <br /> everyday essentials designed to match your style.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                    {
                        useData?.map(data =>
                            <DisplayProduct key={data.id} data={data}></DisplayProduct>)
                    }
                </div>

            </div>
        </main>

    );
};

export default AllProduct;

