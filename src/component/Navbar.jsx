import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
                        <li><Link href={'/allporduct'}>All Product</Link></li>
                    </ul>
                </nav>
                <div>
                    <button className='px-4 py-2 rounded-xl border-2 border-amber-900 text-white hover:bg-amber-900 hover:border-amber-600'>Join Us</button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;