
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Ham from "./ham";



function Navbar(){
   const path = usePathname()

   const leftOptions = [
      {
         title: 'Home',
         url: '/',
      },
      {
         title: 'Lines',
         url: '/lines',
      },
      {
         title: 'Models',
         url: '/models',
      },
      {
         title: 'Join Prestige',
         url: '/join',
      },
      {
         title: 'International',
         url: '/international',
      },
   ]

   const rightOptions = [
      {
         title: 'Contact Info',
         url: '/contact',
      },
      {
         title: 'Shows',
         url: '/shows',
      },
      {
         title: 'About Us',
         url: '/about',
      },
      {
         title: 'Studios',
         url: '/studios',
      },
      {
         title: 'Account',
         url: '/account',
      }
   ]

   const allOptions = [...leftOptions, ...rightOptions]

   return(
      <div className='fixed top-0 min-w-full h-23 z-3 flex justify-center items-center'>

         <div className="absolute top-0 z-2 w-full h-full p-3 flex justify-center gap-10 items-center max-[1070px]:invisible">
            <div className="flex justify-between items-center custom_bg rounded-2xl p-2 backdrop-blur-sm">
               {
                  leftOptions.map((item, index) => (
                     <Link href={item.url} key={index}>
                        <div className={`text-xs py-2 px-4 rounded-lg cursor-pointer  active:scale-95 transition ${path === item.url ? 'border border-black/30 text-black' : 'hover:text-black text-black/50'}`}>
                              {item.title}
                        </div>
                     </Link>
                  ))
               }
            </div>

            <Link href='/'>
               <div className="relative cursor-pointer w-20 h-20 overflow-hidden bg-white flex items-center justify-center rounded-full">
                  <div className="w-15 h-15 overflow-hidden flex justify-center items-center">
                     <Image className='object-contain'
                        src='/illustrations/logo.jpg'
                        alt='logo'
                        fill
                        size={100}
                     />
                  </div>
               </div>
            </Link>


            <div className="flex justify-between items-center custom_bg rounded-2xl p-2 backdrop-blur-sm">
               {
                  rightOptions.map((item, index) => (
                     <Link href={item.url} key={index}>
                        <div className={`text-xs py-2 px-4 rounded-lg cursor-pointer hover:text-black transition ${path === item.url ? 'bg-white/20 text-black' : 'hover:text-black text-black/50'}`}>
                              {item.title}
                        </div>
                     </Link>
                  ))
               }
            </div>
         </div>
         
         <div className="absolute custom_bg2 top-0 w-[98%] mt-2 z-2 p-2 flex justify-between rounded-[10px] items-center invisible max-[1070px]:min-[850px]:visible">

            <div className="w-fit flex justify-center items-center">
               {
                  allOptions.map((item, index) => (
                     <Link href={item.url} key={index}>
                        <div className={`text-xs py-2 px-3 rounded-lg cursor-pointer  active:scale-95 transition ${path === item.url ? 'border border-black/30 text-black' : 'hover:text-black text-black/50'}`}>
                              {item.title}
                        </div>
                     </Link>
                  ))
               }
            </div>

            <Link href='/'>
               <div className="relative w-10 h-10 overflow-hidden flex justify-center items-center">
                  <Image className='object-contain'
                     src='/illustrations/logo.png'
                     alt='logo'
                     fill
                     size={100}
                  />
               </div>
            </Link>
         </div>

         <div className={` top-0 left-0 flex justify-between z-3 min-w-full invisible max-[850px]:visible`}>
            <Ham />

            <Link href='/'>
               <div className="absolute right-3 top-3 w-10 h-10 overflow-hidden flex justify-center items-center">
                  <Image className='object-contain'
                     src='/illustrations/logo.png'
                     alt='logo'
                     fill
                     size={100}
                  />
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Navbar;