import React, { useEffect } from 'react';

const Baner = () => {
    useEffect(() => {
        fetch(`https://oxivos-e-commerce.vercel.app/baner.json`)
    }, []
    )
    return (
        <div className="bg-[url('https://img.magnific.com/premium-vector/online-shopping-banner-ecommerce-sale-ad-digital-store-promotion-online-shopping-offer_1377942-481.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-no-repeat bg-center h-[60vh] w-full">

        </div >
    );
};

export default Baner;