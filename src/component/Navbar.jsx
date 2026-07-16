import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className='bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714]'>
            <div className='flex justify-between max-w-7xl items-center py-2 mx-auto '>
                <Image
                    width={200}
                    height={200}
                    src={'https://i.ibb.co.com/n8QVkt4V/Gemini-Generated-Image-f1ozq7f1ozq7f1oz-removebg-preview.png'}
                    alt='oxivos logo'
                    className='h-15 w-50'
                />
                <nav>
                    <ul className='flex gap-3 items-center text-lg font-semibold text-gray-400'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/allProduct'}>All Product</Link></li>
                    </ul>
                </nav>
                <div className='flex items-center gap-5'>
                    <Link href={'/cart'}>
                        <IoCartOutline size={30} className='text-gray-200' />
                    </Link>
                    <button className='button1'>Join Us</button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;