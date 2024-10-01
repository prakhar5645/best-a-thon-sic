import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 container mx-auto'>
            <h1 className='md:text-6xl text-5xl font-bold pb-3'>Resources</h1>
            <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>
                Explore our well curated resources to gain valuable
                insights, stay informed, and access a wealth of
                knowledge for your entrepreneurial journey.
            </p>
            <div className="flex flex-col gap-4 pt-8">
                <h2 className='justify-center flex text-2xl font-semibold'>Incubation Resources</h2>
                <div className="flex flex-wrap gap-5 justify-center gap-y-5 mb-5 xl:px-5">
                    <a href='' target='_blank' className="flex flex-col justify-center md2:max-w-[24rem] lg:max-w-[24rem] 3xl:max-w-[30rem] 4xl:max-w-[36rem] max-w-[36rem] bg-white border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer ">
                        <Image src={assets.res1} className='' />
                        <span>SIC GEHU Incubation Agreement</span>
                    </a>
                    <a href='' target='_blank' className="flex flex-col justify-center md2:max-w-[24rem] lg:max-w-[24rem] 3xl:max-w-[30rem] 4xl:max-w-[36rem] max-w-[36rem] bg-white border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer ">
                        <Image src={assets.res2} className='' />
                        <span>Pitch Deck Template</span>
                    </a>
                    <a href='' target='_blank' className="flex flex-col justify-center md2:max-w-[24rem] lg:max-w-[24rem] 3xl:max-w-[30rem] 4xl:max-w-[36rem] max-w-[36rem] bg-white border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer ">
                        <Image src={assets.res3} className='' />
                        <span>Financial Projection Sheet Template</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default page