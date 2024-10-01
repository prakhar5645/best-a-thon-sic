import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col px-2 md:px-4 lg:px-14 py-5 gap-4 container mx-auto items-center justify-center'>
        <Image src={assets.notFound} width={400} height={300} />
    </div>
  )
}

export default Page