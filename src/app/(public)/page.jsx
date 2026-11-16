'use client'
import Image from "next/image";
import {AccordionOS} from "@/components/accordionos";


export default function Home() {

   const courseData = [
      {
         name: 'اکسنت',
         title: 'آموزش لهجه های انگلیسی در سطح نیتیو',
         image: '/pics/courses/Accent.png',
         alt: 'English Accent Course Image',
         backgroundClass: 'bg-[#d0b3ff]',
         content: [
            'آموزش لهجه های American و British',
            'تمرین های ساده اما تخصصی برای تسلط بر روی آوای هر لهجه',
            'تقویت مهارت های Listening و Speaking با درک عمیق از صداها',
            'بدون هیچگونه محدودیت سنی و مناسب همه سنین'
         ]
      },
      {
         name: 'نتفلیکس',
         title: 'تقویت مهارت شنیداری با فیلم و سریال',
         image: '/pics/courses/Netflix.png',
         alt: 'English Netflix Course Image',
         backgroundClass: 'bg-[#75cfff]',
         content: [
            'آموزش اختصاصی تکنیک های شنیداری مهم',
            'آموزش و تمرین تکنیک Shadowing برای تلفظ و لهجه بهتر',
            'آموزش گویش ها و تکنیک های درک هر گویش',
            'درک عمیق از Linking و لهجه در زبان انگلیسی'
         ]
      },
      {
         name: 'استریت',
         title: 'تقویت مکالمه و محاوره ی طبیعی انگلیسی',
         image: '/pics/courses/Street.png',
         alt: 'English Street Course Image',
         backgroundClass: 'bg-[#fff891]',
         content: [
            'طبیعی سازی مکالمه با آموزش و تمرین فرمول های Collocations',
            'آموزش اصطلاحات روزمره و کاربردی در محاوره ی انگلیسی',
            'جلسات Free Discussion برای تمرین و استفاده از مطالب آموزش داده شده',
            'تقویت مکالمه عمومی برای مهاجرت و مکالمه تخصصی برای آزمون های بین المللی'
         ]
      },
      {
         name: 'رنگاهنگ',
         title: 'آموزش زبان انگلیسی به کودکان با رنگ و آهنگ',
         image: '/pics/courses/Rangahang.png',
         alt: 'English Rangahang Course Image',
         backgroundClass: 'bg-[#7af5ca]',
         content: [
            'آموزش زبان با استفاده از آهنگ، نقاشی و بازی های مختلف',
            'تنوع در مدت زمان جلسات براساس علاقه کودک شنا: ۳۰، ۴۵ و ۶۰ دقیقه',
            'استفاده از اساتید متخصص در حوزه ی آموزش زبان به کودکان',
            'مناسب همه ی کودکان زیر ۷ سال'
         ]
      },
      {
         name: 'بحث آزاد',
         title: 'کلاس های ویژه ی مکالمه و بحث آزاد',
         image: '/pics/courses/FreeDiscussion.png',
         alt: 'English Free Discussion Course Image',
         backgroundClass: 'bg-[#ffa69e]',
         content: [
            'آموزش و تمرین ریز مهارت های مکالمه به زبان انگلیسی',
            'استفاده از تسک های بسیار متنوع برای مکالمه',
            'آموزش تکنیک های ضروری برای مکالمات بلند و چالش برانگیز',
            'در دسترس برای هر دو سطح متوسط و پیشرفته',
         ]
      },
   ]

   return (
      <div className="min-w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden">
         <div className="w-full min-h-dvh flex flex-col justify-center items-center z-2">

            <div className="relative w-full h-svh min-h-svh overflow-hidden flex justify-center items-center">

               <div className='relative z-20 w-full h-full min-h-0 flex justify-center items-start'>
                  <AccordionOS
                     className="accordion-os-fullscreen"
                     overlayText="GHAZAL"
                     containerWidth="100%"
                     containerHeight="83.333svh"
                     autoPlayInterval={5000}
                  />


                  {/*<div className='w-150 flex justify-center items-center flex-col'>*/}
                  {/*   <div className="relative mb-5 tracking-widest z-1 text-3xl font-light text-white font-(family-name:--motevasel)" dir='rtl'>آموزشگاه زبان های خارجی غزل</div>*/}

                  {/*   <div className='flex gap-5'>*/}
                  {/*      <button className="relative font-(family-name:--vazirt) z-1 bg-white text-sm text-black px-4 py-2 rounded-xl font-light transition-all ease-custom hover:cursor-pointer hover:scale-105 active:scale-100">*/}
                  {/*         مشاوره تخصصی*/}
                  {/*      </button>*/}

                  {/*      <button className="relative font-(family-name:--vazirt) z-1 text-black bg-white border border-white text-sm px-4 py-2 rounded-xl font-light transition-all hover:cursor-pointer hover:scale-105 active:scale-100">*/}
                  {/*         تعیین سطح*/}
                  {/*      </button>*/}
                  {/*   </div>*/}
                  {/*</div>*/}
               </div>

            </div>

            <div className="z-2 w-full min-h-dvh flex flex-col justify-start items-end py-3 px-10">
               <div className="w-full text-black py-3 rounded-3xl tracking-widest text-2xl text-center font-(family-name:--vazirt)">
                  دوره های خاص ما
               </div>

               <div className="w-full flex gap-10 flex-col justify-start items-center">
                  {
                     courseData.map((course, index) => (
                        <div key={index} className={`w-full h-90 ${course.backgroundClass} border rounded-3xl flex gap-5 justify-between`}>
                           <div className='relative min-w-90 min-h-full rounded-3xl overflow-hidden'>
                              <Image
                                 className='object-cover'
                                 src={course.image}
                                 alt={course.alt}
                                 fill
                                 sizes='(max-width: 640px) 100vw, 400px'
                                 loading='eager'
                              />
                           </div>

                           <div dir='rtl' className='w-full h-full flex p-7 flex-col gap-5 justify-between items-start font-(family-name:--vazirt)'>
                              <div className='flex flex-col gap-3'>
                                 <div className='flex gap-3 items-center'>
                                    <div className='text-3xl'>دوره ی</div>
                                    <div className='text-3xl px-4 py-1 text-white font-(family-name:--motevasel) rounded-3xl bg-gradient-to-r from-fuchsia-600 to-pink-600'>{course.name}</div>
                                 </div>
                                 <div className='text-black font-semibold text-xl'>{course.title}</div>
                              </div>
                              <ul className='text-lg list-disc ps-6'>
                                 {
                                    course.content.map((item, index) => (
                                       <li key={index} className=''>{item}</li>
                                    ))
                                 }
                              </ul>
                              <div className='flex gap-5'>
                                 <button className='px-4 py-2 rounded-3xl bg-white text-black cursor-pointer hover:bg-white active:scale-97'>اطلاعات بیشتر</button>
                                 <button className='px-4 py-2 rounded-3xl bg-white text-black cursor-pointer hover:bg-white active:scale-97'>ثبت نام</button>
                              </div>
                           </div>
                        </div>
                     ))
                  }

               </div>
            </div>
         </div>

         <div className="w-full h-fit flex flex-wrap justify-evenly gap-5 font-(family-name:--vazirt)">
            <div className="w-full text-black py-3 rounded-3xl bg-white tracking-widest text-2xl text-center">دوره های آمادگی برای آزمون های بین المللی</div>

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


         <div className="z-2 pl-10 w-2/3 min-h-dvh flex justify-start items-center content-center flex-wrap gap-5 font-(family-name:--vazirb)">
            <div className="w-full text-white tracking-widest text-2xl text-center font-(family-name:--vazirt)">زبان های ما</div>

            <div className="w-100 h-fit p-5 border backdrop-blur-lg rounded-3xl bg-white/30 flex justify-start items-start overflow-hidden hover:bg-white transition duration-300 cursor-pointer hover:scale-105 group active:scale-103">
               <div className="w-full h-20 flex flex-row-reverse justify-start items-center gap-3">
                  <div className="w-20 h-20 relative overflow-hidden rounded-[50%]">
                     <Image className="object-cover"
                        src='/pics/languages/Portugal.jpg'
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
                        src='/pics/languages/England.jpg'
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
                        src='/pics/languages/Germany.jpg'
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
                        src='/pics/languages/French.jpg'
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
                        src='/pics/languages/Denmark.jpg'
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
                        src='/pics/languages/Holand.jpg'
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
                        src='/OurLogo.png'
                        alt='logo'
                        fill
                        size={100}
                     />
                  </div>
                  <div className="relative bottom-0 mb-5 tracking-widest z-1 text-xl font-light text-white font-(family-name:--motevasel)" dir='rtl'>موسسه زبان های خارجی غزل</div>
               </div>
               <div className="w-full absolute left-0 bottom-0 text-center text-xs mb-2 text-white font-(family-name:--vazirt)">تمامی حقوق برای آکادمی هامینک محفوظ است</div>

            </div>

         </div>

      </div>
   );
}


