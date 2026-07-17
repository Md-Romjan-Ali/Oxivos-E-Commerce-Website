"use client"
import DisplayProduct from '@/component/DisplayProduct';
import { Authcontext } from '@/component/Provider';
import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AllProduct = () => {
    const { products } = useContext(Authcontext)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const searchAndFilterData = products.filter((product) => {
        const searchData = product.name.toLowerCase().includes(search.toLowerCase())
        const categroyData = category === '' || product.category === category
        return searchData && categroyData
    })

    return (
        <main className='bg-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col justify-center space-y-3 py-10 text-center'>
                    <div className=''>
                        <h1 className='text-4xl relative flex justify-center items-center font-bold'>Our Featured Collection
                            <span className='h-2 w-20 shadow-2xl bg-cyan-400 rounded-2xl absolute -bottom-3'></span>
                        </h1>

                    </div>
                    <p className='text-lg font-semibold leading-9 text-gray-500'>Browse our carefully selected collection of clothing, accessories, and <br /> everyday essentials designed to match your style.</p>
                </div>
                {/* search and filter */}
                <div className='flex flex-wrap gap-5 my-5 items-center'>
                    {/* search by name */}
                    <div className='flex flex-col gap-1 '>
                        <label htmlFor="">Search By Product name</label>
                        <input
                            className='px-2 py-2 w-80 rounded-xl border-cyan-600 border-2'
                            type="text"
                            placeholder='Search by Product Name'
                            name="search"
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Select category</label>
                        <select name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-80 text-lg flex gap-2 items-center bg-black/10 py-2 px-3 rounded-2xl border-2 border-gray-700 '
                        >
                            <option value="">Select</option>
                            <option value="Panjabi">Panjabi</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Polo">Polo</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Pants">Pants</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Hoodie">Hoodie</option>

                        </select>
                    </div>

                </div>

                {
                    searchAndFilterData.length === 0 ?
                        <div className="max-w-md mx-auto flex justify-center items-center flex-col space-y-4 bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] p-5 py-10 rounded-2xl shadow-2xl text-gray-200">
                            <FaSearch size={25} />
                            <p>No Data Found</p>
                            <p className="text-center">We could not find any products matching your search. Try a different keyword or browse all products to discover more.</p>
                        </div>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10'>
                            {
                                searchAndFilterData?.map(data =>
                                    <DisplayProduct key={data.id} data={data}></DisplayProduct>)
                            }
                        </div>
                }


            </div>
        </main>

    );
};

export default AllProduct;

