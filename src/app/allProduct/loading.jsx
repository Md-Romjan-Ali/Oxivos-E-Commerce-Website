import { Link } from 'lucide-react';
import React from 'react';

const ProductLoading = () => {
    return (
        <div>
            <main className='flex min-h-screen items-center'>
                <div className='bg-gray-400 rounded-2xl shadow-2xl h-120 w-120 animate-pulse mx-auto'></div>
            </main>

        </div>
    );
};

export default ProductLoading;