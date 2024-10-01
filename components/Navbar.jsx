'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import Links from './link/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const pathName = usePathname();   // tell current path

    const showOpen = () => {
        setShow(true);
    }

    const closeShow = () => {
        setShow(false);
    }

    const links = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Events", path: "/events" },
        { id: 4, name: "Skills Development", path: "/skill-development" },
        { id: 5, name: "Incubation", path: "/incubation" },
        { id: 6, name: "Resources", path: "/resources" },
        { id: 7, name: "Community", path: "/community" },
        { id: 8, name: "Blogs", path: "/blogs" }
    ]

    return (
        <nav className='px-3 py-2 flex flex-row items-center justify-between md:px-6'>
            <Image src={assets.logo} className='w-14 h-14' alt='TBI_LOGO' />

            {/* for mobile/tablet devices */}
            <div className="lg:hidden">
                <svg onClick={showOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                >
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                {show &&
                    <div className={`inset-0 w-full h-full bg-black bg-opacity-60 fixed z-20 flex flex-col gap-8 items-end transform transition-transform ease-in-out duration-300 ${show ? "translate-x-0 " : "translate-x-full"}`} style={{transition: 'all .3s ease-in-out'}} >
                        <div className={`max-w-[350px] w-full bg-slate-50 `}>
                            <div className='flex flex-col gap-8 py-5'>
                                <div className="flex flex-row items-center justify-end px-6">
                                    <svg onClick={closeShow}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='cursor-pointer transition ease-out duration-500 hover:stroke-red-800'
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    {links.map((item) => (
                                        <Links key={item.id} name={item.name} path={item.path} fun={closeShow} currentPath={pathName} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* for big screen */}
            <div className="hidden lg:flex lg:flex-row lg:items-center gap-5">
                {links.map((item) => (
                    <Link key={item.id} href={item.path} className={pathName === item.path ? "text-red-700" : "text-black"}>{item.name}</Link>
                ))}
            </div>
            <div className=" hidden lg:block">
                <Image src={assets.gehuLogo} className='w-[70px] h-22 fixed top-1 right-10' alt='GEHULOGO' />
            </div>
        </nav>
    )
}

export default Navbar