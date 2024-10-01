import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-4 p-2 justify-center items-center py-3 container mx-auto'>
            <div className="flex flex-col items-center justify-center border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md:flex-row md:max-w-[51rem] backdrop-blur-sm">
                <Image src={assets.logo} className='w-20 h-20' />
                <p>Welcome to the Technology Business Incubator at Graphic Era Hill University [SIC-GEHU], established in 2024 by the Department of Science and Technology, Government of India. As the first recognized incubator in Uttarakhand since 2018, we have been pivotal in fostering innovation and entrepreneurship. We support startups, helping them overcome challenges, attract talent and investment, and contribute to the local economy. We are proud of our vibrant entrepreneurial community and are committed to supporting more ventures in the future.</p>
            </div>

            <div className='flex flex-wrap gap-3 justify-around'>
                <div className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md3:max-w-[25rem] object-contain backdrop-blur-sm">
                    <span className='border-2 rounded-lg text-lg border-[#cfcfcf] p-2 w-fit'>Our Vision</span>
                    <p>Our vision is to be the leading force for skill development, innovation, and sustainability in Uttarakhand. We empower entrepreneurs with skills and resources to turn ideas into successful ventures. By fostering continuous learning and innovation, we aim to drive economic growth, promote sustainable practices, and create a vibrant entrepreneurial ecosystem for a prosperous future.</p>
                </div>
                <div className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md3:max-w-[25rem] object-contain backdrop-blur-sm">
                    <span className='border-2 rounded-lg text-lg border-[#cfcfcf] p-2 w-fit'>Our Mission</span>
                    <p>Our mission is to create a thriving entrepreneurial ecosystem in Uttarakhand by focusing on four key areas: Skill Development & Internships, Innovation & Incubation Support, Sustainable Practices & Economic Growth, and Community Building and Networking. By concentrating on these pillars, we contribute to the region's economic growth and prosperity.</p>
                    <Image src={assets.mission} />
                </div>
            </div>

            <div className="flex flex-col border md:p-8 p-4 md:gap-5 gap-2 rounded-md bg-[#f7f6f6] md:max-w-[51rem] backdrop-blur-sm">
                <span className='border-2 rounded-lg text-lg border-[#cfcfcf] p-2 w-fit'>SIC-GEHU's History</span>
                <p>Founded in 2010 as the Entrepreneurship Development Cell (EDC), SIC-GEHU has undergone significant growth to become a cornerstone of entrepreneurial support in Uttarakhand. In 2015, we solidified our commitment by affiliating with Graphic Era Deemed to be University. Since then, we have been dedicated to providing comprehensive resources, including mentorship, incubation, and networking opportunities, to nurture startups and SMEs. Through our emphasis on collaboration and innovation, we continue to catalyze economic growth and cultivate an entrepreneurial ecosystem in the region.</p>
            </div>

            <div className="flex flex-col xl:px-28 lg:px-22 sm:px-6 px-3 my-8 items-center gap-4">
                <h1 className='text-3xl font-semibold'>President's Message</h1>
                <div className="flex flex-col md3:flex-row md3:gap-20 gap-6 items-center">
                    <Image src={assets.president} className='w-80 h-[25rem]' />
                    <div className="flex flex-col gap-10">
                        <p className='italic font-[100] text-gray-600 '>"We strive to create a learning environment for students where they unfold their potential and closely interact with the practitioners from the corporate world."</p>
                        <p>Today the world is witnessing drastic changes in the institutional and industrial environment because of technology interventions at almost all levels of production and planning. It has affected the job market adversely. Apparently jobs are going to be fewer with more number of takers. This calls for a case of shift of focus from job seeking to job creating.
                            At Graphic Era, we strive to create an ecosystem aiming to nurture the entrepreneurial capabilities of the inmates where they can unfold their potential and closely work with the changing technology and industry environment as innovators, producers and job creators. Since beginning Graphic Era has continuously adapted to the rapid changes in the academic, technological and industrial landscapes. As we build on this remarkable journey of Graphic Era over the last 30 years, we envision a future where entrepreneurial spirit and innovation will drive transformative changes.
                            At SIC-GEHU, our vision is to become a leading center of enterprise development and innovation, empowering the next generation leaders to shape the future of the country. We are committed to building entrepreneurial excellence, introducing innovative programs, customizing and updating our content to match industry and market requirements, and fostering a culture of research and consultancy. We fore-see SIC-GEHU as a launching pad for groundbreaking startups and entrepreneurial ventures that make a significant impact on society.
                            We are dedicated to nurture talent and foster innovation by providing them industry mentorship, space and scope to work on their innovative ideas and extend all support needed during ideation, product conception and prototype and final commercialization of the product, and create opportunities for budding entrepreneurs to excel and lead in the global marketplace.
                            I welcome you to be a part of this wonderful ecosystem of making visionary leaders and change-makers of tomorrow.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between px-3 my-8 items-center gap-4">
                <h1 className='text-3xl font-semibold'>Meet Our Team</h1>
                <div className="flex flex-wrap justify-center gap-5 gap-y-5 mb-5 xl:px-5">
                    <div className="flex flex-col items-center justify-center md2:max-w-[22rem] 3xl:max-w-[30em] 4xl:max-w-[34rem] max-w-[32rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-2 bg-[#f2f2f2]">
                        <Image src={assets.tMem} className='w-[25rem] object-contain h-96 border-0 rounded-md' />
                        <span className='font-semibold text-lg'>Dr. ABCDEF XYZ</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md2:max-w-[22rem] 3xl:max-w-[30em] 4xl:max-w-[34rem] max-w-[32rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-2 bg-[#f2f2f2]">
                        <Image src={assets.tMem} className='w-[25rem] object-contain h-96 border-0 rounded-md' />
                        <span className='font-semibold text-lg'>Dr. ABCDEF XYZ</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md2:max-w-[22rem] 3xl:max-w-[30em] 4xl:max-w-[34rem] max-w-[32rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-2 bg-[#f2f2f2]">
                        <Image src={assets.tMem} className='w-[25rem] object-contain h-96 border-0 rounded-md' />
                        <span className='font-semibold text-lg'>Dr. ABCDEF XYZ</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md2:max-w-[22rem] 3xl:max-w-[30em] 4xl:max-w-[34rem] max-w-[32rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-2 bg-[#f2f2f2]">
                        <Image src={assets.tMem} className='w-[25rem] object-contain h-96 border-0 rounded-md' />
                        <span className='font-semibold text-lg'>Dr. ABCDEF XYZ</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md2:max-w-[22rem] 3xl:max-w-[30em] 4xl:max-w-[34rem] max-w-[32rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494] gap-2 bg-[#f2f2f2]">
                        <Image src={assets.tMem} className='w-[25rem] object-contain h-96 border-0 rounded-md' />
                        <span className='font-semibold text-lg'>Dr. ABCDEF XYZ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page