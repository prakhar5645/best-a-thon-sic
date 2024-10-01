'use client'
import { assets } from "@/assets/assets";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Home() {
  const [value, onChange] = useState(new Date());

  const services = [
    { id: 1, img: assets.service1, title: "Skills Development and Interships", path: "/skill-development" },
    { id: 2, img: assets.service2, title: "Extensive Resources", path: "/resources" },
    { id: 3, img: assets.service3, title: "Innovation and Incubation Support", path: "/incubation" },
    { id: 4, img: assets.service4, title: "About Us", path: "/about" },
    { id: 5, img: assets.service5, title: "Events and Workshops", path: "/events" },
    { id: 6, img: assets.service6, title: "Community Building and Network", path: "/community" },
  ]

  return (
    <div className="flex flex-col px-2 md:px-4 lg:px-14 divide-y divide-black gap-2">
      <Carousel />
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold md:text-4xl text-2xl">Our Services</h1>
        <div className="flex flex-wrap gap-5 justify-center gap-y-5 mb-5 xl:px-5 min-h-[100vh]">
          {services.map((service, index) => (
            <Link key={service.id} href={service.path} className="relative flex justify-center md2:max-w-[26rem] 3xl:max-w-[34rem] 4xl:max-w-[38rem] max-w-[36rem] bg-whiteborder border rounded-md hover:shadow-[-7px_7px_0px_#949494]">
              <Image src={service.img} className="object-contain" />
              <span className="absolute top-5 md:text-2xl text-xl bg-opacity-40 bg-gray-800 p-2 border rounded-lg border-opacity-20 border-gray-800 font-semibold text-white m-2 ">{service.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="p-5 bg-gray-100 rounded-lg shadow-lg mx-auto">
        <Calendar
          onChange={onChange}
          value={value}
          className="bg-white p-3 rounded-lg shadow-md w-full"
        />
      </div> */}

      <div className="flex flex-col gap-5">
        <h1 className="font-semibold md:text-3xl text-xl items-center flex justify-center pt-3">Supported By</h1>
        <div className="flex flex-wrap gap-10 justify-center py-4">
          <Image src={assets.sp1} className="md:w-[190px] md:h-[210px] w-36 h-38" />
          <Image src={assets.gehuLogo} className="md:w-[180px] md:h-[218px] w-36 h-38" />
          <Image src={assets.sp2} className="md:w-[190px] md:h-[210px] w-36 h-38" />
          <Image src={assets.sp3} className="md:w-[190px] md:h-[210px] w-36 h-38" />
        </div>
      </div>

    </div >
  );
}
