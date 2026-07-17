
import AddCartButton from '@/component/AddCartButton';
import { ArrowLeft, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`https://oxivos-e-commerce.vercel.app/data.json`)
    const req = await res.json()
    const findData = req.find(data => data.id == id)

    return (
        <div className='max-w-4xl mx-auto my-10'>
            <div className='group bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] rounded-2xl overflow-hidden hover:scale-103 transition-all duration-300'>
                <div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4 relative'>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            src={findData.image}
                            alt={findData.name}
                            className='h-[500px] group-hover:scale-105 transition-all duration-1000 object-cover'
                        />
                    </div>
                    {/* text deials */}
                    <div className='p-5 space-y-5'>
                        <h3 className='text-2xl transition-colors duration-300 font-bold text-gray-300 group-hover:text-cyan-500'>{findData.name}</h3>
                        <div className='flex justify-between items-center my-3'>
                            <h2 className='text-cyan-500 text-2xl font-semibold'>{findData.category}</h2>
                            {/* price */}
                            <p className='text-cyan-500 font-bold text-xl gap-2 flex items-center'>
                                <span className='text-2xl font-extrabold'>৳</span>
                                {findData.price}</p>
                        </div>
                        {/* p-color */}
                        <p className='text-gray-200 -mb-0'>Choose a Color:</p>
                        <div className='flex gap-3 items-center '>
                            {findData.colors.map((color, index) => <span key={index} className=' text-lg flex gap-2 items-center bg-white/10 py-2 px-3 rounded-2xl border-2 border-gray-700 text-gray-300'>{color}</span>)}
                            <span className='text-lg flex gap-2 items-center bg-white/10 py-2 px-3 rounded-2xl border-2 border-gray-700 text-gray-300'> <Star className='text-amber-400' size={25} /> {findData.rating}</span>
                        </div>
                        {/* sizes */}
                        <p className='text-gray-200 -mb-0'>Select Your Perfect Size:</p>
                        <div className='flex gap-3 items-center '>

                            {
                                findData.sizes.map((size, index) => <span key={index} className='bg-black/20 px-3 py-1.5 rounded-2xl text-gray-300'> {size}</span>)
                            }
                        </div>
                        <p className='text-gray-300'>{findData.description}</p>
                        {/* stock */}
                        <p className='bg-black/50 px-3 py-1.5 text-cyan-300 absolute top-3 left-3 rounded-2xl border-gray-300'>{findData.inStock ? 'Available' : ''}</p>
                        {/* add to cart */}
                        <div className='flex gap-5 items-center'>
                            <Link href={'/allProduct'} className='text-cyan-500 font-semibold text-lg flex  items-center gap-2'><ArrowLeft className='' /> Back</Link>
                            <AddCartButton findData={findData} />
                        </div>
                    </div>


                </div>
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