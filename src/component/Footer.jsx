import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-gradient-to-br from-[#020b1e] via-[#081b3b] to-[#010714] h-[400px] flex items-center justify-center mt-10'>
            <Image
                width={1000}
                height={1000}
                src={'https://i.ibb.co.com/pBt2zmSc/Chat-GPT-Image-Jul-16-2026-09-37-38-PM-removebg-preview.png'}
                alt='oxivos logo'
                className=''
            />
        </div>
    );
};

export default Footer;