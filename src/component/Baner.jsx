
const Baner = () => {

    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')] bg-cover bg-no-repeat bg-top h-[60vh] w-full relative">
            <div className='h-full w-full flex justify-center items-center'>
                <div className='bg-black/50 absolute inset-0'></div>
                <div className='text-center max-w-4xl space-y-3 z-10'>
                    <h1 className='text-4xl font-extrabold text-gray-300  '><span className='italic text-cyan-600'>Discover </span>Your Perfect  Shopping <br /><span className='italic text-cyan-600'>Experience</span></h1>
                    <p className='text-xl font-semibold text-gray-300'>Explore the latest collections, enjoy great discounts, and <br /> get your favorite products delivered fast.</p>
                    <button className='bg-cyan-500 px-4 py-2 rounded-2xl hover:bg-cyan-700'>Shop Now</button>
                </div>
            </div>

        </div>

    );
};

export default Baner;