'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { MeshGradientBg } from "@/components/paper-mesh";





export default function Home() {

   return (
      <div className="min-w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden">
         <div className="w-full min-h-dvh flex justify-center items-center z-2">
            <div className='absolute w-full min-h-4/5 top-0 left-0 bg-linear-to-r from-fuchsia-500 to-pink-500'></div>
            
            <div className="absolute w-full flex flex-col justify-center items-center gap-4">
               <div className='relative w-full h-40 flex flex-col'>
                  <Image
                      className='object-contain'
                      src='/nameLogo.png'
                      alt='TOEFL logo'
                      fill
                  />
               </div>
               <div className="relative bottom-0 mb-10 tracking-widest z-1 text-xl font-light text-white font-(family-name:--vazirt)" dir='rtl'>آخرین کلاس زبانی که میری :)</div>

               <div className='flex gap-5'>
                  <button className="relative font-(family-name:--vazirt) z-1 bg-white text-sm text-black px-4 py-2 rounded-xl font-light transition-all ease-custom hover:cursor-pointer hover:scale-105 active:scale-100">
                     مشاوره تخصصی
                  </button>

                  <button className="relative font-(family-name:--vazirt) z-1 text-white border border-white text-sm px-4 py-2 rounded-xl font-light transition-all hover:cursor-pointer hover:scale-105 active:scale-100">
                     تعیین سطح
                  </button>
               </div>
            </div>

         </div>

         <div className="z-2 w-full min-h-dvh flex justify-end items-end p-10">
            <div className="w-full min-h-screen flex flex-col justify-between items-center">

               <div className="w-full h-fit flex flex-wrap justify-evenly gap-5 font-(family-name:--vazirt)">
                  <div className="w-full text-black py-3 rounded-3xl bg-white tracking-widest text-2xl text-center font-(family-name:--vazirt)">دوره های آمادگی برای آزمون های بین المللی</div>
                  
                  <div className='w-full flex flex-col gap-10'>

                     <div className='w-full flex justify-between items-center gap-10'>
                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-red-500 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/IELTS-.webp'
                                    alt='IELTS logo'
                                    fill
                                 />
                              </div>
                           </div>

                              <div className='text-black text-xl font-semibold'>دوره ی آیلتس</div>

                              <div className='w-full flex flex-col items-start text-sm'>
                                 <div className='text-gray-700'>- گروهی و خصوصی</div>
                                 <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                                 <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                                 <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                                 <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                              </div>

                              <div className='w-full flex justify-end items-center'>
                                 <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                              </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-blue-500 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/TOEFL.webp'
                                    alt='TOEFL logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی تافل</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-black/10 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/PTE.webp'
                                    alt='TOEFL logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی پیرسون PTE</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-blue-500 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/TOEIC.webp'
                                    alt='TOEFL logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی توئیک</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>
                     </div>

                     <div className='w-full flex justify-between items-center gap-10'>
                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-blue-500 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/sat-exam.webp'
                                    alt='TOEFL logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی SAT</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-[#69C6CE] flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/IGCSE.webp'
                                    alt='IGSCE logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی IGCSE</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 flex bg-[#8EE000] items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/Duolingo.webp'
                                    alt='TOEFL logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی دولینگو</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>

                        <div className="relative bg-white/90 border shadow-sm flex-1 flex flex-col justify-between items-start gap-5 text-center rounded-3xl transition ease-out p-5 hover:scale-105 hover:shadow-xl hover:bg-white" dir='rtl'>
                           <div className='w-full p-5 bg-black/20 flex items-center justify-center rounded-xl'>
                              <div className='relative w-full h-50'>
                                 <Image
                                    className='object-contain'
                                    src='/pics/exams/ACT.webp'
                                    alt='IGSCE logo'
                                    fill
                                 />
                              </div>
                           </div>

                           <div className='text-black text-xl font-semibold'>دوره ی ACT</div>

                           <div className='w-full flex flex-col items-start text-sm'>
                              <div className='text-gray-700'>- خصوصی و نیمه خصوصی</div>
                              <div className='text-gray-700'>- فوکس: ۲۴ و ۱۸ ماهه</div>
                              <div className='text-gray-700'>- فشرده: ۱۲ و ۶ ماهه</div>
                              <div className='text-gray-700'>- میکرو: تقویت تک مهارت</div>
                              <div className='text-gray-700'>- تستینگ: شبیه سازی آزمون</div>
                           </div>

                           <div className='w-full flex justify-end items-center'>
                              <button className='w-full p-3 cursor-pointer rounded-xl border transition-all border-black/30 text-xs hover:bg-black/5 active:scale-95'>اطلاعات بیشتر</button>
                           </div>
                        </div>
                     </div>

                  </div>


               </div>

            </div>
         </div>


         <div className="z-2 w-full min-h-dvh flex justify-end items-end">
            <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10">

               <div className="w-full h-fit flex flex-wrap justify-evenly gap-5">
                  <div className="w-full text-white tracking-widest text-2xl text-center font-(family-name:--vazirt)">دوره های عمومی</div>

                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-(family-name:--font-comforta) bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">teenagers</div>
                     </div>
                  </div>

                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">private</div>
                     </div>
                  </div>

                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">CIPLE</div>
                     </div>
                  </div>

               </div>

               <div className="w-full h-fit flex flex-wrap justify-evenly">
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">KIDS</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TEENS</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">ADULT</div>
                     </div>
                  </div>
               </div>

               <div className="w-full h-fit flex flex-wrap justify-evenly">
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">CELTA</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TTC</div>
                     </div>
                  </div>
                  <div className="group overflow-hidden rounded-xl cursor-pointer w-100 h-20 flex flex-col justify-between items-center active:scale-98">
                     <div className="relative w-full h-full flex justify-center items-end">
                        <div className="w-full h-full relative top-13 transition-top duration-300 ease-in-out group-hover:top-0 rounded-xl bg-white/20 group-hover:bg-gray-100"></div>
                        <div className="absolute text-white text-5xl font-[family-name:var(--font-comforta),cursive] bottom-0 transition-bottom duration-300 ease-in-out group-hover:bottom-3 group-hover:scale-120 group-hover:text-[#ff85eb]">TESOL</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>


         <div className="z-2 pl-10 w-2/3 min-h-dvh flex justify-start items-center content-center flex-wrap gap-5 font-(family-name:--vazirb)">
            <div className="w-full text-white tracking-widest text-2xl text-center font-(family-name:--vazirt)">زبان های ما</div>

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
            <div className="relative w-full min-h-[60dvh] border bg-black rounded-xl  flex flex-row-reverse items-center justify-start pr-20 gap-20 text-white font-(family-name:--vazirt)">

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
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">استخدام در هامینگ</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">تربیت مدرس</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">کتاب ها</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">تعیین سطح</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">اطلاعات تماس</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer">درباره ی ما</div>
                  <div className="font-light tracking-widest text-white/80 hover:text-white cursor-pointer"></div>
               </div>

               <div className="absolute left-0 w-1/4 h-fit flex flex-col justify-center items-center gap-3">
                  <div className="relative w-70 h-40 overflow-hidden flex justify-center items-center">
                     <Image className='object-contain drop-shadow-sm'
                        src='/Logo.webp'
                        alt='logo'
                        fill
                        size={100}
                     />
                  </div>
                  <div className='relative h-20 w-full flex flex-col'>
                     <Image
                        className='object-contain'
                        src='/nameLogo.png'
                        alt='TOEFL logo'
                        fill
                     />
                  </div>
               </div>
               <div className="w-full absolute left-0 bottom-0 text-center text-xs mb-2 text-white font-(family-name:--vazirt)">تمامی حقوق برای آکادمی هامینک محفوظ است</div>

            </div>

         </div>

      </div>
   );
}


