import { pastEvents, upcomingEvents } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {

    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 container mx-auto'>
            <h1 className='md:text-6xl text-5xl font-bold pb-3'>Events</h1>
            <p className='text-gray-500 lg:w-[50rem] md:text-2xl text-xl pb-4'>Attend our interactive workshops, panel discussions,
                pitch nights, and networking mixers to enhance your
                skills, grow your venture, and expand your community.
            </p>

            <hr className='border-black' />

            <h1 className='md:text-5xl text-4xl font-bold py-3 pt-[8rem]'>Upcoming Events</h1>
            <div className="flex flex-col gap-3 mt-4">
                <div className="flex flex-col gap-5 items-center">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} id={`${event.id}`} className="flex w-fit lg:w-full lg:flex-row flex-col-reverse justify-between border-2 rounded-md p-5 hover:bg-[#f0eeee] gap-3">
                            <div className="flex flex-col justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <span className='text-xl text-gray-600'>{event.date}</span>
                                    <h2 className='text-3xl font-semibold'>{event.content}</h2>
                                </div>
                                <a href='https://forms.office.com/r/fBXymCEh5H' target='_blank' className='bg-black text-white w-fit p-3 border-0 rounded-md cursor-pointer '>Fill the form</a>
                            </div>
                            <Image src={event.image} width={600} height={400} className="" />
                        </div>
                    ))}
                </div>
            </div>

            <h1 className='md:text-5xl text-4xl font-bold py-3 pt-[8rem]'>Past Events</h1>
            <div className="flex flex-col gap-3 mt-4">
                <div className="flex flex-col gap-5 items-center">
                    {pastEvents.map((event) => (
                        <div key={event.id} id={`${event.id}`} className="flex w-fit lg:w-full lg:flex-row flex-col-reverse justify-between border-2 rounded-md p-5 hover:bg-[#f0eeee] gap-3">
                            <div className="flex flex-col justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <span className='text-xl text-gray-600'>{event.date}</span>
                                    <h2 className='text-3xl font-semibold'>{event.content}</h2>
                                </div>
                                <button disabled href='' target='_blank' className='bg-[#676666] text-white w-fit p-3 border-0 rounded-md  hover:bg-[#b13737]'>Completed!</button>
                            </div>
                            <Image src={event.image} width={600} height={400} className="" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default page