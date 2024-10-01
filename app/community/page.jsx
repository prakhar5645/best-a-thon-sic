'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [svgClass1, setsvgClass1] = useState('text-black');
    const [svgClass2, setsvgClass2] = useState('text-black');
    const [svgClass3, setsvgClass3] = useState('text-black');
    const [svgClass4, setsvgClass4] = useState('text-black');
    const [svgClass5, setsvgClass5] = useState('text-black');
    
    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 container mx-auto'>
            <h1 className='md:text-6xl text-5xl font-bold pb-3'>Our Community</h1>
            <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>
                Discover the vibrant network at TBI-GEU, where
                innovators, mentors, and industry leaders come
                together to drive progress and collaboration.
            </p>
            <hr className='border-black p-2' />

            <Image src={assets.community} className='object-contain' />

            <div className="flex flex-col items-center gap-6 lg:px-32 px-1">
                <p className='text-gray-500 md:text-xl text-lg '>
                    We're excited to invite you to join our new community, "Tech by Himalayas"!
                </p>
                <p className='text-gray-500 md:text-xl text-lg'>
                    Our aim is to foster a vibrant and engaging environment where tech enthusiasts and entrepreneurs from Uttarakhand can come together, collaborate, and innovate. Our community is packed with various channels tailored to your interests.
                </p>
            </div>

            <div className="social-media flex flex-wrap md:gap-16 gap-5 py-40 px-2 items-center justify-center">
                <a href="" className='border-2 border-black p-3 rounded-md hover:bg-black hover:border-black' onMouseOut={() => setsvgClass1('text-black')} onMouseOver={() => setsvgClass1('text-white')} style={{transition: 'all .3s ease-in-out'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${svgClass1} lucide lucide-instagram`}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="" className='border-2 border-black p-3 rounded-md hover:bg-black hover:border-black' onMouseOut={() => setsvgClass2('text-black')} onMouseOver={() => setsvgClass2('text-white')} style={{transition: 'all .3s ease-in-out'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${svgClass2} lucide lucide-linkedin`}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="" className='border-2 border-black p-3 rounded-md hover:bg-black hover:border-black' onMouseOut={() => setsvgClass3('text-black')} onMouseOver={() => setsvgClass3('text-white')} style={{transition: 'all .3s ease-in-out'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${svgClass3} lucide lucide-x`} viewBox="0 0 50 50" width="50" height="50"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path></svg>
                </a>
                <a href="" className='border-2 border-black p-3 rounded-md hover:bg-black hover:border-black' onMouseOut={() => setsvgClass4('text-black')} onMouseOver={() => setsvgClass4('text-white')} style={{transition: 'all .3s ease-in-out'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${svgClass4} lucide lucide-youtube`}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                </a>
                <a href="" className='border-2 border-black p-3 rounded-md hover:bg-black hover:border-black' onMouseOut={() => setsvgClass5('text-black')} onMouseOver={() => setsvgClass5('text-white')} style={{transition: 'all .3s ease-in-out'}}>
                    <svg viewBox="0 0 16 16" className={`${svgClass5} lucide lucide-discord`} fill="currentColor" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default page