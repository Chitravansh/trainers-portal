// components/Navbar.tsx
"use client";
import { NavLinks } from '@/constant/constant';
import Link from "next/link";
import { BiBriefcase } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-black text-white duration-200 h-[12vh] z-[1000] fixed w-full">
      
      <Link href="/" className='flex items-center gap-3'>
      <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
        <BiBriefcase size={28} />
      </div>
      <span className='text-xl font-bold text-white'>Hire Trainer</span>
      </Link>
      
      {/* <div className="text-xl font-bold">
        <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center gap-4'>
          <div>Hire Trainer</div>
        </div>
        </div> */}

      {/* <ul className="hidden md:flex gap-8 ">
        <li><Link className='hover:text-blue-200' href="/">Home</Link></li>
        <li><Link href="/trainings">Trainings</Link></li>
        <li><Link href="/trainers">Trainers</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul> */}
            <div className='hidden lg:flex items-center space-x-10' >
                {NavLinks.map((link)=>{
                    return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                        <p>{link.label}</p>
                    </Link>
                    })}
            </div>

      <div className="flex gap-4">
        <Link href="/login" className=" px-4 py-2 rounded-md text-white hover:text-cyan-300">Login</Link>
        <Link
          href="/register"
          className="bg-teal-500 px-4 py-2 rounded-md text-white hover:bg-cyan-300"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
