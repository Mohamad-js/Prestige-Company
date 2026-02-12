'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


function Ham(){
   
   const [open, setOpen] = useState(false)
   
   const options = [
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


   return(
      <div className={`w-full fixed top-0 left-0 p-2 flex flex-col justify-between items-start transition-all ease-in-out ${open ? 'backdrop-blur-xs bg-white/20 h-dvh' : ''}`}
         onClick={(e) => {
            setOpen(false)
         }}
      >

         <div className={`absolute top-0 min-w-1/2 min-h-dvh pt-20 px-2 bg-white rounded-[0_20px_20px_0] transition-all ease-in-out duration-300 ${open ? 'left-0' : '-left-full'} invisible max-[850px]:visible`} onClick={(e) => e.stopPropagation()}>

            <div className="w-full min-full flex flex-col items-start justify-start gap-1 text-xs">
               {
                  options.map((item, index) => (
                     <Link href={item.url} key={index} className="w-full" onClick={() => setOpen(!open)}>
                        <div key={index} className='w-full p-2 text-black/70 rounded-xl active:bg-gray-100'>
                           {item.title}
                        </div>
                     </Link>
                  ))
               }
            </div>
         </div>

         <div className="">
            <div className="absolute w-10 h-10 z-3 cursor-pointer" onClick={(e) => {
               e.stopPropagation()
               setOpen(!open)
            }}></div>
            <label>
               <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center" >
                  <input className="hidden peer" type="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)}/>
                  <div
                     className="w-[50%] h-0.5 bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:-rotate-45 peer-checked:bg-black"
                  ></div>
                  <div
                     className="w-[50%] h-0.5 bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden peer-checked:bg-black"
                  ></div>
                  <div
                     className="w-[50%] h-0.5 bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-45 peer-checked:bg-black"
                  ></div>
               </div>
            </label>
         </div>

      </div>
   )
}

export default Ham;