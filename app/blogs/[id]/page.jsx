'use client'
import { blogs } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const page = ({ params }) => {

    const [data, setData] = useState({ id: 1, title: "Computer's Era", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus rem reprehenderit exercitationem reiciendis quo, soluta molestias saepe quia unde, recusandae itaque at facilis perferendis ipsam quasi voluptates? Ut voluptatum praesentium nesciunt illum quis! Nisi ducimus dolor voluptatum in voluptate repellendus quisquam porro reiciendis blanditiis doloribus totam, maiores delectus quis accusantium non alias ipsam adipisci impedit. Eligendi voluptatibus voluptas doloribus maiores! Magnam deserunt iure assumenda laborum officiis ut voluptas id libero vitae dolore suscipit vero quis repellendus excepturi, voluptatibus laudantium dolor natus, rem veritatis et nihil? Veritatis quia voluptate eos dignissimos rerum. Molestias quasi a distinctio deserunt dolorem veniam tempora fugiat consequatur doloribus eveniet, aliquam sed, voluptatum nesciunt iure corporis exercitationem pariatur autem, possimus similique impedit id est eligendi. Necessitatibus natus qui excepturi laboriosam reprehenderit vero ex at quibusdam est provident temporibus quos aliquid ipsam, architecto dolor doloremque aut blanditiis quaerat fugit minus. Fuga ipsam reprehenderit dolorum? Laudantium dolore, ratione quo at ducimus dolorem inventore, error adipisci magnam ab repudiandae optio sequi perspiciatis fugit vel minima quaerat. Ipsam est autem aliquid reiciendis, veniam nisi distinctio, sapiente corporis quis, sequi vitae at nobis incidunt! Maxime magni optio qui magnam esse repellendus et ut in, sint dolor, vitae, beatae dolorem commodi sit!", img: "/blog_pic_1.png", date: "2024-09-01", author: "Elon Musk" });
    // const [data, setData] = useState(null);

    // setData(blogs[4]);
    console.log(blogs[4]);

    return (
        <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 container mx-auto items-center justify-center'>
            <div className="flex flex-col bg-[#d9d9d9] border border-r-2 border-black items-center">
                <Image src={data.img} width={800} height={800} />
                <p className='p-2 text-2xl font-semibold'>{data.title}</p>
            </div>
            <div className="flex flex-col items-center gap-6 lg:px-32 px-1 py-6">
                <div className="flex flex-row gap-6">
                    <p className='text-gray-500 '>{data.date}</p>
                    <p className='text-gray-500 '>-{data.author}</p>
                </div>
                <p className='text-gray-500 md:text-xl text-lg '>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default page