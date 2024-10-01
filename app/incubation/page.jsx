import { assets, startups } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='container mx-auto my-5 p-2 lg:px-20 px-3 flex flex-col gap-5'>
            <div className='flex md:flex-row flex-col gap-3 justify-around w-full'>
                <a href='/' className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md3:w-[50%] backdrop-blur-sm items-center cursor-pointer hover:bg-[#fefefe]">
                    <span className='border-2 rounded-lg text-lg border-[#cfcfcf] p-2 w-fit'>Pre-Incubation</span>
                    <p>Perfect for budding entrepreneurs who have an idea but need guidance to validate, refine, and develop it into a viable plan. Start here if you're exploring possibilities and need early-stage support.</p>
                    <Image src={assets.incu1} className='w-40 md:w-80 object-contain' />
                </a>
                <a href='/' className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md3:w-[50%] backdrop-blur-sm items-center cursor-pointer hover:bg-[#fefefe]">
                    <span className='border-2 rounded-lg text-lg border-[#cfcfcf] p-2 w-fit'>Incubation</span>
                    <p>Ideal for startups that have a validated idea or product and need structured resources, mentorship, and funding to grow and scale. Choose this if you're ready to build and launch your venture.</p>
                    <Image src={assets.incu2} className='w-40 md:w-80 object-contain' />
                </a>
            </div>
            <h1 className='md:text-6xl text-5xl font-bold'>Our Startup</h1>
            <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>
                Explore the diverse ventures nurtured at TBI-GEU,
                ranging from pioneering startups to promising pre-
                incubated projects.
            </p>
            <div className="flex flex-wrap gap-5 justify-center gap-y-5 mb-5 xl:px-5">
                {startups.map((startup, index) => (
                    <a key={index} href={`${startup.link}`} className="flex flex-col justify-center md2:max-w-[24rem] lg:max-w-[24rem] 3xl:max-w-[30rem] 4xl:max-w-[36rem] max-w-[36rem] bg-white border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer hover:bg-[#00000070] hover:text-white">
                        <h2 className='font-semibold text-2xl '>{startup.name}</h2>
                        <p className='text-lg'>{startup.desc}</p>
                        <Image src={startup.image} className='w-full h-[15rem] object-contain' />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default page