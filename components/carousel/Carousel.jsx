'use client'
import { upcomingEvents } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Carousel = () => {
    // auto change slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // State to track the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = upcomingEvents.length;

    // Go to next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === totalSlides - 1 ? 0 : prevIndex + 1);
    };

    // Go to prev slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? totalSlides - 1 : prevIndex - 1);
    };

    // style for transforming the slides
    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
    };


    return (
        <div className="carousel relative w-full max-w-5xl mx-auto overflow-hidden lg:py-2">
            {/* slider container */}
            <div id="slides" className="flex transition-transform duration-500 ease-in-out" style={slideStyle}>
                {upcomingEvents.map((event, index) => (
                    <Link href={`/events#${event.id}`} key={event.id} className={`min-w-full lg:h-[30rem] md:h-[27rem] sm:h-72 h-64 flex relative justify-center text-white text-3xl bg-gray-500 bg-no-repeat bg-center bg-cover`} style={{ backgroundImage: `url("${event.image}")` }}>
                        <span className='absolute bottom-2 left-3 w-fit bg-white rounded-lg shadow-lg p-2 font-bold text-black md:text-3xl text-xl'>{event.content}</span>
                    </Link>
                ))}
            </div>

            {/* previous button */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white">Prev</button>

            {/* next button */}
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white">Next</button>
        </div>
    )
}

export default Carousel;