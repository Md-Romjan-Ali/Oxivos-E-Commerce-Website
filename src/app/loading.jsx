import React from 'react';
import { BarLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <BarLoader />
        </div>
    );
};

export default loading;