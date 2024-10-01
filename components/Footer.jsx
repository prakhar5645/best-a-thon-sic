import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-4'>
            <div className='flex flex-col-reverse md:flex-row gap-5 bg-black p-4 text-white'>
                <div className="social-media flex flow-row gap-4 mx-auto my-auto">
                    <a href="" className='border border-white border-r-6 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="" className='border border-white border-r-6 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="" className='border border-white border-r-6 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube text-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                    </a>
                    <a href="" className='border border-white border-r-6 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                </div>
                <div className="flex flex-col gap-3 mx-auto">
                    <h1>Contact Us-</h1>
                    <div className="flex flex-row items-start gap-[3rem]">
                        <div className="flex flex-col gap-5 text-background">
                            <p>Email</p>
                            <p>Email</p>
                            <p>Contact No.</p>
                            <p>Office Address</p>
                        </div>
                        <div className="flex flex-col gap-5 text-background max-w-[23.25rem]">
                            <a href="">example.sic@gehu.ac.in</a>
                            <a href="">manager@gehu.ac.in</a>
                            <a href="">+91 98971 XXXXX</a>
                            <p>SIC-GEHU office, 1st Floor Beriparao, Haldwani, Nainital, Uttarakhand 243139</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-40 bg-[#191919] flex flex-col gap-3 h-auto items-center py-4 text-sm text-white">
                <p>© Copyright SIC GEHU. All Rights Reserved</p>
                <p>Designed and Developed by &nbsp;<a href="" target="_blank" className="font-[500]">SIC GEHU Web Team</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer