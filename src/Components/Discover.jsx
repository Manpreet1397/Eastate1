

import React from 'react';

const Discover = () => {
    const images = [
        { id: 1, src: "h1.jpeg", alt: "Image 1" },
        { id: 2, src: "h2.jpeg", alt: "Image 2" },
        { id: 3, src: "h3.jpeg", alt: "Image 3" },
        { id: 4, src:"h4.jpeg", alt: "Image 4" },
    ];

    return (
        <div className="bg-white min-h-screen p-8">
            <div className="text-center  flex mb-8">
                <h1 className="text-3xl font-bold">Discover Your Perfect Property Match </h1>
                <p className="mt-4 text-gray-600 inline-block">Embark on your journey through the exclusive coections of properties. Explore amazing content from our users.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative h-[50vh]">
                    <img src={images[0].src} alt={images[0].alt} className="object-cover w-full h-full rounded-lg" />
                    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">❤️</button>
                </div>
                <div className="md:col-span-1 relative h-[50vh]">
                    <img src={images[1].src} alt={images[1].alt} className="object-cover w-full h-full rounded-lg" />
                    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">❤️</button>
                </div>
                <div className='p-'>
                <div className="md:col-span-1 relative h-[25vh] ">
    <img src={images[2].src} alt={images[2].alt} className="object-cover w-full h-full rounded-lg" />
    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">❤️</button>
</div>
<div className="md:col-span-1 relative h-[25vh] ">
    <img src={images[3].src} alt={images[3].alt} className="object-cover w-full h-full rounded-lg" />
    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">❤️</button>
</div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
