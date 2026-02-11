'use client'
import { useState, useEffect } from "react";
import Image from "next/image";




export default function Home() {

   return (
      <div className="min-w-full min-h-dvh flex flex-col items-center justify-center bg-white overflow-hidden">
         <div className="fixed top-0 left-0 w-full min-h-dvh flex justify-center items-center visible max-[870px]:invisible z-1">
            <div className="w-full visible max-[870px]:hidden">
               <Image className="object-cover object-center"
                  src='/pics/LandingMain.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-full invisible max-[870px]:visible">
               <Image className="object-cover object-top"
                  src='/pics/Landing_mobi.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="flex flex-col justify-center items-center">
               <div className="z-1 right-3 text-white/70 text-9xl mb-5 font-[family-name:var(--font-dancing-script),cursive] max-[1000px]:text-[#ff0048]">Prestige</div>
               <div className="z-1 font-sans tracking-widest text-xs mb-5 text-white">WHERE THE FASHION IS BORN ONCE AGAIN</div>
               
               <button className="relative flex items-center gap-1 bg-white/20 px-9 py-4 border-1 text-base bg-inherit rounded-xl font-semibold text-white cursor-pointer overflow-hidden transition-all duration-600 ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700"
               >
                  <svg
                     viewBox="0 0 24 24"
                     className="absolute w-6 fill-white z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-[#212121]"
                  >
                     <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                     ></path>
                  </svg>
                  <span className="relative z-[1] font-light transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
                     Learn More
                  </span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"
                  ></span>
                  <svg
                     viewBox="0 0 24 24"
                     className="absolute w-6 fill-white z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-[#212121]"
                  >
                     <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                     ></path>
                  </svg>
               </button>

            </div>
         </div>

         <div className="w-full min-h-dvh bg-green/0"></div>
         <div className="z-2 w-full min-h-dvh backdrop-blur-sm flex justify-center items-end min-[870px]:items-center">
            <div className="w-full h-full flex justify-between items-start visible max-[870px]:hidden">
               <Image className={`max-[1000px]:object-cover max-[1000px]:object-top-right object-contain object-left`}
                  src='/pics/Section_A.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-fit invisible max-[870px]:visible">
               <Image className={`object-cover object-top`}
                  src='/pics/SectionA_mobi.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-1/2 h-dvh min-[870px]:bg-[linear-gradient(to_left,#ff8c00_60%,rgba(255,140,0,0.8)_70%,rgba(255,140,0,0.6)_80%,rgba(255,140,0,0.4)_90%,rgba(255,140,0,0.2)_95%,rgba(255,140,0,0)_100%)] z-10 pr-10 flex flex-col items-end justify-center
            
            max-[870px]:h-fit
            max-[870px]:w-full
            max-[870px]:absolute
            max-[870px]:items-center
            max-[870px]:p-5
            max-[870px]:bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.1)_90%,rgba(0,0,0,0)_100%)]
            ">
               <p className="min-w-dvw font-[family-name:var(--font-marker),san-serif] text-[#ffcc92] text-8xl text-right mb-2 max-[870px]:text-center max-[870px]:text-5xl max-[870px]:text-[#ffae00]">Glamour Girls</p>
               <p className="w-full font-[family-name:var(--font-quicksand),san-serif] text-white text-xl font-semibold text-end max-[870px]:text-white max-[870px]:text-center">Maximizing Attractiveness and Elegance</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>

         <div className="z-2 w-full min-h-dvh bg-white shadow-[1px_0_10px_0_#0000007a] backdrop-blur-sm flex justify-start items-end min-[870px]:items-center">
            <div className="w-fit visible max-[870px]:hidden">
               <Image className={`max-[1000px]:object-cover max-[1000px]:object-top-right object-contain object-right`}
                  src='/pics/SectionB.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-fit invisible max-[870px]:visible">
               <Image className={`object-cover object-top`}
                  src='/pics/SectionB_mob.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-1/2 h-dvh min-[870px]:bg-[linear-gradient(to_right,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.4)_90%,rgba(255,255,255,0.2)_95%,rgba(255,255,255,0)_100%)] z-10 pl-10 flex flex-col items-start justify-center 
            
            max-[870px]:w-full
            max-[870px]:h-fit
            max-[870px]:p-10
            max-[870px]:text-center
            max-[870px]:items-center
            max-[870px]:bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.1)_90%,rgba(0,0,0,0)_100%)]
            ">
               <p className="font-[family-name:var(--font-msmadi),san-serif] text-[rgb(130,0,0)] text-8xl font-light max-[870px]:text-white max-[870px]:text-6xl">Persian Style</p>
               <p className="font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-3xl font-semibold max-[870px]:text-white max-[870px]:text-xl">Showcasing The Iranian Beauties</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>

         <div className="z-2 w-full min-h-dvh backdrop-blur-sm flex justify-center items-end min-[870px]:items-center">
            <div className="w-full h-full flex justify-between items-start visible max-[870px]:hidden">
               <Image className={`max-[1000px]:object-cover max-[1000px]:object-top-right object-contain object-left`}
                  src='/pics/SectionC.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-fit invisible max-[870px]:visible">
               <Image className={`object-cover object-top`}
                  src='/pics/SectionC_mob.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-full h-dvh min-[870px]:bg-[linear-gradient(to_left,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.3)_90%,rgba(255,255,255,0.1)_95%,rgba(255,255,255,0)_100%)] z-10 pr-10 flex flex-col items-end justify-center
            
            max-[870px]:h-fit
            max-[870px]:absolute
            max-[870px]:items-center
            max-[870px]:p-5
            max-[870px]:bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.1)_90%,rgba(0,0,0,0)_100%)]
            ">
               <p className="font-[family-name:var(--font-comforta),san-serif] text-[#a30000] text-7xl text-right font-bold mb-2 max-[870px]:text-white max-[870px]:text-center max-[870px]:text-5xl">TNP Modeling</p>
               <p className="w-full font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-xl font-semibold text-end max-[870px]:text-white max-[870px]:text-center">Photographing Models in Nature</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>

         <div className="z-2 w-full min-h-dvh bg-white backdrop-blur-sm flex justify-start items-end min-[870px]:items-center">
            <div className="w-fit visible max-[870px]:hidden">
               <Image className="object-contain object-right"
                  src='/pics/SectionE.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-fit invisible max-[870px]:visible">
               <Image className="object-cover object-top"
                  src='/pics/SectionE_mob.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-1/2 h-dvh min-[870px]:bg-[linear-gradient(to_right,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.4)_90%,rgba(255,255,255,0.2)_95%,rgba(255,255,255,0)_100%)] z-10 pl-10 flex flex-col items-start justify-center
            
            max-[870px]:w-full
            max-[870px]:h-fit
            max-[870px]:absolute
            max-[870px]:items-center
            max-[870px]:p-5
            max-[870px]:bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.1)_90%,rgba(0,0,0,0)_100%)]
            ">
               <p className="font-[family-name:var(--font-audiowide),san-serif] text-[#a30000] text-7xl font-light max-[870px]:text-white max-[870px]:text-5xl">EXOTIC FEEL</p>
               <p className="font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-3xl font-semibold max-[870px]:text-white max-[870px]:text-xl">To destinguish you from others!</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>

         <div className="fixed top-0 min-w-dvw min-h-dvh custom_appear">
            <div className="w-fit visible max-[870px]:hidden">
               <Image className="object-contain object-right"
                  src='/pics/Section.jpg'
                  alt='image'
                  fill
               />
            </div>
            <div className="w-fit invisible max-[870px]:visible">
               <Image className="object-cover object-bottom custom_zoom2"
                  src='/pics/footer_mob.jpg'
                  alt='image'
                  fill
               />
            </div>
         </div>

         <div className="min-w-dvw min-h-dvh z-2"></div>

      </div>
   );
}
