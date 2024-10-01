import { assets, blogs } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 gap-4 container mx-auto items-center'>
             <h1 className='md:text-6xl text-5xl font-bold pb-3'>Blogs</h1>
            <div className="flex flex-wrap gap-5 justify-center gap-y-5 m-5 xl:px-5xl">
                {blogs.map((blog, index) => (
                    <div className='max-w-[330px] sm:max-w-[300px] bg-whiteborder border border-black hover:shadow-[-7px_7px_0px_#5c5c5e] rounded-md'>
                        <Image src={blog.img} alt='' width={400} height={400} className='border-b border-black' />
                        <div className="p-5">
                            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{blog.title}</h5>
                            <p className='mb-3 text-sm tracking-tight text-gray-700'>
                                {blog.desc.length >= 100 ? blog.desc.slice(0,100) : blog.desc}...
                            </p>
                            <Link href={`/blogs/${blog.id}`} className='inline-flex items-center py-2 font-semibold text-center '>
                                Read More <Image src={assets.arrow} alt='' width={12} className='ml-2' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page