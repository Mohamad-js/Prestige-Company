'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { MeshGradientBg } from "@/components/paper-mesh";





export default function Home() {

   return (
      <div className="min-w-full min-h-dvh flex flex-col items-end justify-center bg-gradient-to-r from-violet-200 to-pink-200 overflow-hidden">
         <div className="fixed top-0 left-0 w-full min-h-dvh flex justify-end items-center z-2">
            
            <div className="absolute flex flex-col justify-center items-end custom_left p-10">
               <div className="z-1 right-3 text-white text-7xl mb-5 max-[1000px]:text-[#ff0048] font-(family-name:--vazirb) custom_go">آکادمی پرستیژ</div>
               <div className="z-1 tracking-widest text-md mb-10 text-white font-(family-name:--vazirt) custom_go">کلاس های خاص برای زبان آموزان خاص</div>
               
               <button className="relative flex items-center gap-1 bg-white/20 px-9 py-4 border text-base rounded-xl font-semibold text-white cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-550 hover:duration-550 custom_go">
                  <svg
                     viewBox="0 0 24 24"
                     className="absolute w-6 fill-white z-9 transition-all duration-550 ease-custom left-4 rotate-180 group-hover:-left-1/4 group-hover:fill-[#212121]"
                  >
                     <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 20.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                     ></path>
                  </svg>

                  <span className="relative group-hover:bg-gray-1000 font-(family-name:--vazirb) z-1 font-light transition-all  text-white/80 hover:text-whiteduration-550 ease-custom translate-x-3 group-hover:text-black group-hover:-translate-x-3">
                     تعیین سطح بده
                  </span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-full bg-[#f1f1f1] rounded-full opacity-0 transition-all duration-550 ease-custom group-hover:w-55 group-hover:opacity-100"
                  ></span>
                  
                  <svg
                     viewBox="0 0 24 24"
                     className="absolute w-6 fill-gray-300 z-9 transition-all duration-550 ease-custom -right-1/4 rotate-180 group-hover:right-4 group-hover:fill-[#212121]"
                  >
                     <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 20.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                     ></path>
                  </svg>
               </button>

            </div>
         </div>

         <div className="w-full min-h-dvh bg-green/0"></div>

         <div className="z-2 w-full min-h-dvh flex justify-end items-end">
            <div className="w-2/3 min-h-screen flex flex-col justify-start items-center gap-10 ml-5">

               <div className="w-full h-fit flex flex-wrap justify-evenly gap-5">
                  <div className="w-full text-black tracking-widest text-sm text-center font-(family-name:--vazirb)">آموزشگاهی برای همه ی نیاز های شما</div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-(family-name:--font-comforta) bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">IELTS</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TOEFL</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">CIPLE</div>
                     </div>
                  </div>
               </div>

               <div className="w-full h-fit flex flex-wrap justify-evenly">
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">KIDS</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TEENS</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">ADULT</div>
                     </div>
                  </div>
               </div>

               <div className="w-full h-fit flex flex-wrap justify-evenly">
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">CELTA</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TTC</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-55 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TESOL</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>


         <div className="z-2 pl-10 w-2/3 min-h-dvh flex justify-start items-center content-center flex-wrap gap-5 font-(family-name:--vazirb)">
            <div className="w-full text-gray-800 tracking-widest text-sm text-center font-(family-name:--vazirb)">زبان های متنوع برای همه</div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/Portugal.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-3">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">پرتغالی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">اروپایی و برزیلی</p>
                  </div>
               </div>
            </div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/England.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-3">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">انگلیسی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">امریکن و بریتیش</p>
                  </div>
               </div>
            </div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/Germany.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-3">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">آلمانی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">هوکدویچ و پلات‌دویچ</p>
                  </div>
               </div>
            </div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/French.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-3">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">فرانسوی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">متروپولیتن و کبک</p>
                  </div>
               </div>
            </div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/Denmark.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-3">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">دانمارکی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">استاندارد و جوتلاندیک</p>
                  </div>
               </div>
            </div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/Holand.jpg'
                        alt='image'
                        fill
                     />
                  </div>
                  <div className="w-0.5 h-full bg-white group-hover:bg-gray-300"></div>
                  <div className="w-fit h-full flex flex-col justify-center items-end gap-4">
                     <p className="text-2xl text-white font-bold group-hover:text-gray-500">هلندی</p>
                     <p className="text-sm tracking-widest text-white font-(family-name:--vazirt) group-hover:text-gray-500">استاندارد, هلندیک, فلاندری</p>
                  </div>
               </div>
            </div>
            
         </div>


         <div className="w-full min-h-dvh flex flex-col justify-end items-end z-2 p-5">
            <div className="w-full min-h-[60dvh] border bg-[#fff3] rounded-xl backdrop-blur-lg flex flex-row-reverse items-center justify-start pr-20 gap-20 text-white font-(family-name:--vazirt)">

               <div className="w-fit h-full flex flex-col justify-evenly items-end gap-2">
                  <div className="text-white font-(family-name:--vazirb) mb-3">آزمون ها</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">IELTS</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">TOEFL</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">SAT</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">PTE</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">CAE</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">TOLIMO</div>
               </div>

               <div className="w-fit h-full flex flex-col justify-evenly items-end gap-2">
                  <div className="font-(family-name:--vazirb) mb-3">زبان ها</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">انگلیسی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">فرانسوی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">پرتغالی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">آلمانی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">هلندی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">دانمارکی</div>
               </div>

               <div className="w-fit h-full flex flex-col justify-evenly items-end gap-2">
                  <div className="font-(family-name:--vazirb) mb-3">دوره ها</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">گروهی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">خصوصی</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">کودکان</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">نوجوانان</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">بزرگسال</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">مهاجرت</div>
               </div>

               <div className="w-fit h-full flex flex-col justify-evenly items-end gap-2">
                  <div className="font-(family-name:--vazirb) mb-3">دیگر</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">استخدام در پرستیژ</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">تربیت مدرس</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">کتاب ها</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">تعیین سطح</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">اطلاعات تماس</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">درباره ی ما</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer"></div>
               </div>

               <div className="absolute left-0 w-1/4 h-fit flex flex-col justify-center items-center gap-3">
                  <div className="relative size-50 overflow-hidden flex justify-center items-center">
                     <Image className='object-contain drop-shadow-sm'
                        src='/illustrations/logo.png'
                        alt='logo'
                        fill
                        size={100}
                     />

                  </div>
                  <div className="z-1 text-black text-3xl font-(family-name:--vazirt)">آکادمی پرستیژ</div>
               </div>

               <div className="w-full absolute left-0 bottom-0 text-center text-xs mb-2 text-black font-(family-name:--vazirt)">تمامی حقوق برای آکادمی پرستیژ محفوظ است</div>
            </div>

         </div>

      </div>
   );
}
