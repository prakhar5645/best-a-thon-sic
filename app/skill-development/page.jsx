import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 gap-4 container mx-auto'>
            <h1 className='md:text-6xl text-5xl font-bold pb-3'>Skill Development</h1>
            <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>
                We're dedicated to fostering an environment where
                individuals can expand their knowledge, hone their skills,
                and grow both personally and professionally.
            </p>

            <Image src={assets.skillDev} className='h-[28rem] object-cover' />

            <div className="flex lg:flex-row flex-col justify-between items-center gap-3">
                <div className="flex flex-col">
                    <p className='text-[19px] text-gray-500 text-2xl pb-4'>
                        SIC-GEHU is dedicated to supporting students and alumni as they pursue groundbreaking ideas, build future-forward ventures, and embrace the learning required for effective innovation.
                        <br /><br />
                        If you're passionate about innovation and entrepreneurship, supporting students and alumni in an academic setting, and joining a team committed to personal and professional growth as a central means of creating a better future, check out our current openings.
                    </p>
                    <a href="#inter-cal" className='bg-orange-800 w-fit p-2 text-white border-0 rounded-sm'>Internship Calendar →</a>
                </div>
                <Image src={assets.skillDev2} width={400} height={400} />
            </div>

            <div className="flex flex-col py-4">
                <h1 className='md:text-6xl text-5xl font-bold pb-3'>Join Us</h1>
                <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>
                    Join a diverse team dedicated to nurturing brilliant
                    ideas and connecting visionary leaders and
                    entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-5 justify-center gap-y-5 m-5 xl:px-5xl">
                    <a href='' className="flex flex-col justify-center md2:max-w-[26rem] 3xl:max-w-[34rem] 4xl:max-w-[38rem] max-w-[36rem] bg-whiteborder border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer hover:bg-[#db6541] hover:text-white">
                        <h2 className='font-semibold text-2xl '>Team Hustler</h2>
                        <p className='text-lg'>Join our team of hustlers, where your passion and drive fuel real change. Collaborate on innovative projects that challenge the status quo and push boundaries.</p>
                        <Image src={assets.team1} className='w-full' />
                    </a>
                    <a href='' className="flex flex-col justify-center md2:max-w-[26rem] 3xl:max-w-[34rem] 4xl:max-w-[38rem] max-w-[36rem] bg-whiteborder border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer hover:bg-[#1a1919] hover:text-white">
                        <h2 className='font-semibold text-2xl '>Volunteers</h2>
                        <p className='text-lg'>Make a difference by volunteering with us, contributing your time and skills to support our mission. Experience the fulfillment of helping others achieve their goals.</p>
                        <Image src={assets.team2} className='w-full' />
                    </a>
                    <a href='' className="flex flex-col justify-center md2:max-w-[26rem] 3xl:max-w-[34rem] 4xl:max-w-[38rem] max-w-[36rem] bg-whiteborder border border-r-2 rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-3 p-3 cursor-pointer hover:bg-[#e14444] hover:text-white">
                        <h2 className='font-semibold text-2xl '>Mentor Network</h2>
                        <p className='text-lg'>Become a part of our mentors network, guiding and inspiring the next generation of innovators. Share your expertise and help shape the future of entrepreneurship.</p>
                        <Image src={assets.team3} className='w-full' />
                    </a>
                </div>

            </div>

            <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md:max-w-[51rem] backdrop-blur-sm">
                    <span className='text-2xl font-semibold p-2 w-fit'>Perks and Benefits</span>
                    <p>At GEHU-GEHU, we offer a range of perks and benefits to support your personal and professional growth. Enjoy the flexibility to work from anywhere, access continuous learning opportunities, and gain hands-on experience in a dynamic environment. You'll thrive in our collaborative culture, gaining insights into how to work effectively in a vibrant, entrepreneurial setting. Join us and experience the many benefits that come with being part of our innovative team.</p>
                </div>
                <div className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md:max-w-[51rem] backdrop-blur-sm">
                    <span className='text-2xl font-semibold p-2 w-fit'>Our values guide everything</span>
                    <p>Our values are integral to our identity, beliefs, and aspirations. They shape our actions, reflecting our commitment to each other and the collective character of our organization. We embrace the reality that living our values can sometimes push us beyond our comfort zones, and we always strive to uphold them in everything we do.</p>
                </div>
            </div>

            <div className="flex flex-col items-center py-5 gap-4 px-2" id='inter-cal'>
                <h1 className='md:text-6xl text-5xl font-bold pt-5 pb-3 '>Internship Calendar</h1>
                <div className="flex flex-col border md:px-8 px-4 py-3 md:gap-5 gap-2 rounded-md cursor-pointer hover:bg-[#ff7f4ce1] bg-[#b64f27cd] md:w-[25rem] w-[20rem] backdrop-blur-sm text-white items-center" style={{transition: 'all .3s ease-in-out'}}>
                    <span className='text-3xl font-semibold w-fit'>Spring Internship</span>
                    <span className='text-lg font-semibold w-fit'>15 March to 15 May</span>
                </div>
                <div className="flex flex-col border md:px-8 px-4 py-3 md:gap-5 gap-2 rounded-md cursor-pointer hover:bg-[#ff7f4ce1]  bg-[#b64f27cd] md:w-[25rem] w-[20rem] backdrop-blur-sm text-white items-center" style={{transition: 'all .3s ease-in-out'}}>
                    <span className='text-3xl font-semibold w-fit'>Summer Internship</span>
                    <span className='text-lg font-semibold  w-fit'>15 July to 15 Sept</span>
                </div>
                <div className="flex flex-col border md:px-8 px-4 py-3 md:gap-5 gap-2 rounded-md cursor-pointer hover:bg-[#ff7f4ce1]  bg-[#b64f27cd] md:w-[25rem] w-[20rem] backdrop-blur-sm text-white items-center" style={{transition: 'all .3s ease-in-out'}}>
                    <span className='text-3xl font-semibold w-fit'>Winter Internship</span>
                    <span className='text-lg font-semibold  w-fit'>15 Nov to 15 Jan</span>
                </div>
            </div>
        </div>
    )
}

export default page