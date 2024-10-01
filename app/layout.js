import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ['400','500','600','700'] });

export const metadata = {
  title: "Startup Incubation Center - GEHU, Haldwani",
  description: "This is good website a very good website created by The Prakhar Bhatt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/sicLogo.png" type="image/x-icon" />
      <body className={`${outfit.className} flex flex-col min-h-screen bg-no-repeat bg-center bg-cover z-0`} style={{backgroundImage: `url("${assets.bgGehu}")`, transition: "all .3s ease-in-out"}}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
