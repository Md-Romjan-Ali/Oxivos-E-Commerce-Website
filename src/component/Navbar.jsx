"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Authcontext } from './Provider';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName, 'from navbar');
    const { cart } = useContext(Authcontext)
    const [open, setOpen] = useState(false)
    const navMenu = <>
        <li className={`hover:text-cyan-600 ${pathName === '/' && 'text-cyan-600'}`}><Link href={'/'}>Home</Link></li>
        <li className={`hover:text-cyan-600 ${pathName === '/allProduct' && 'text-cyan-600'}`}><Link href={'/allProduct'}>All Product</Link></li>
    </>
    return (
        <div className='bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] px-2'>
            <div className='flex justify-between max-w-7xl items-center mx-auto '>
                <Image
                    width={200}
                    height={200}
                    src={'https://i.ibb.co.com/pBt2zmSc/Chat-GPT-Image-Jul-16-2026-09-37-38-PM-removebg-preview.png'}
                    alt='oxivos logo'
                    className='h-20 w-50'
                />
                <nav className='hidden md:block'>
                    <ul className='flex gap-3 items-center text-lg font-semibold text-gray-300'>
                        {navMenu}
                    </ul>
                </nav>
                <div className='flex items-center gap-5 relative'>
                    <Link href={'/cart'}>
                        <IoCartOutline size={30} className='text-gray-200' />
                    </Link>

                    {
                        cart.length === 0 ?
                            null
                            :
                            <p className='text-cyan-400 text-lg font-semibold absolute -left-2 -top-2'>{cart.length}</p>
                    }

                    <button onClick={() => setOpen(false)} className='button1 hidden md:block'>
                        Join Us</button>
                    <button onClick={() => setOpen(!open)} className='md:hidden text-gray-200'><CiMenuBurger size={25} /></button>
                    {
                        open && <ul className='flex flex-col gap-3 items-center text-lg font-semibold text-gray-400 absolute -bottom-35 bg-gray-50 p-5 rounded-2xl z-20 -left-15'>
                            {navMenu}
                        </ul>
                    }
                </div>

            </div>
        </div>

    );
};

export default Navbar;