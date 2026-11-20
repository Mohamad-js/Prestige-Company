'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {AccordionOS} from "@/components/accordionos";
import { NumberTicker } from "@/components/velora/number-ticker";


export default function Home() {
   const [courseOffset, setCourseOffset] = useState(0);
   const [recyclingCourse, setRecyclingCourse] = useState(null);
   const [recycleStarted, setRecycleStarted] = useState(false);
   const [isCourseFanPaused, setIsCourseFanPaused] = useState(false);

   const courseData = [
      {
         name: 'اکسنت',
         href: '/sub_skills/accent',
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
         href: '/sub_skills/netflix',
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
         href: '/sub_skills/netflix',
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
         href: '/kids/rangahang',
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
         href: '/sub_skills/free-discussion',
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

   const stats = [
      { value: 187, title: "زبان آموز" },
      { value: 7, title: "کشور" },
      { value: 12, title: "سال تجربه" },
      { value: 84, title: "دوره آموزشی" },
   ];

   useEffect(() => {
      if (isCourseFanPaused) return;

      const interval = window.setInterval(() => {
         const exitingIndex = (courseOffset + 3) % courseData.length;
         setRecyclingCourse(courseData[exitingIndex].name);
         setRecycleStarted(false);
         setCourseOffset((offset) => (offset + 1) % courseData.length);

         window.requestAnimationFrame(() => setRecycleStarted(true));
         window.setTimeout(() => {
            setRecyclingCourse(null);
            setRecycleStarted(false);
         }, 750);
      }, 5000);

      return () => window.clearInterval(interval);
   }, [courseOffset, isCourseFanPaused]);

   const renderStatCard = (stat) => (
      <div
         key={stat.title}
         className="relative z-30 flex w-full p-5 flex-col items-center justify-between gap-5 rounded-2xl border  bg-gray-100 text-center shadow-xl"
      >
         <NumberTicker value={stat.value} locale="fa-IR" className="font-(family-name:--vazirt) z-30 text-5xl font-light leading-none text-slate-900" />
         <div className="font-(family-name:--vazirt) text-md leading-relaxed text-slate-900">{stat.title}</div>
      </div>
   );

   const goToCourse = (index) => {
      setRecyclingCourse(null);
      setRecycleStarted(false);
      setCourseOffset(index);
   };

   return (
      <div className="min-w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden">
         <div className="relative w-full min-h-dvh flex flex-col justify-center items-center z-2">

            <div className="relative w-full h-svh min-h-svh overflow-hidden flex flex-col justify-start items-center">

               <div className='relative z-20 w-full h-full min-h-0 flex flex-col justify-start items-center'>
                  <AccordionOS
                     className="accordion-os-fullscreen"
                     containerWidth="100%"
                     containerHeight="83.333svh"
                     autoPlayInterval={5000}
                  />
               </div>

            </div>

            <section aria-label="آمار آموزشگاه" dir="rtl" className="absolute left-0 z-50 grid w-full grid-cols-4 gap-x-30 px-10" style={{ top: 'calc(100svh - 180px)' }}>
               {stats.map(renderStatCard)}
            </section>


            <div id="special-courses" className="z-2 mt-30 w-full min-h-dvh flex flex-col justify-start items-end py-4 px-4 sm:px-10">
               <div className="w-full text-black text-2xl text-center font-(family-name:--vazirt)">
                  دوره های خاص ما
               </div>

               <div className="special-course-fan" dir="ltr">
                  {courseData.map((course, index) => {
                     const slot = (index - courseOffset + 2 + courseData.length) % courseData.length;
                     const fanPosition = [
                        { x: '-145%', y: '34px', rotate: '-16deg', depth: '40px' },
                        { x: '-72%', y: '10px', rotate: '-8deg', depth: '120px' },
                        { x: '0%', y: '-8px', rotate: '0deg', depth: '220px' },
                        { x: '72%', y: '10px', rotate: '8deg', depth: '120px' },
                        { x: '145%', y: '34px', rotate: '16deg', depth: '40px' },
                     ][slot];
                     const isEntering = recyclingCourse === course.name && !recycleStarted;

                     return (
                        <Link
                           href={course.href}
                           key={course.name}
                           className={`special-course-card group${isEntering ? ' is-entering' : ''}`}
                           style={{ '--fan-x': fanPosition.x, '--fan-y': fanPosition.y, '--fan-rotate': fanPosition.rotate, '--fan-depth': fanPosition.depth, '--card-order': [0, 2, 4, 2, 0][slot] }}
                           dir="rtl"
                           onMouseEnter={() => setIsCourseFanPaused(true)}
                           onMouseLeave={() => setIsCourseFanPaused(false)}
                           onFocus={() => setIsCourseFanPaused(true)}
                           onBlur={() => setIsCourseFanPaused(false)}
                        >
                           <Image
                              className="special-course-card-image"
                              src={`${course.image}?v=2`}
                              alt={course.alt}
                              fill
                              sizes="(max-width: 640px) 70vw, 275px"
                              unoptimized
                           />
                           <div className="special-course-card-dim" />
                           <div className="special-course-card-shine" />
                           <div className="special-course-card-copy font-(family-name:--vazirt)">
                              <h3 className="font-(family-name:--motevasel) text-4xl sm:text-5xl">{course.name}</h3>
                              <p className="mt-2 text-sm sm:text-base leading-7 text-white/90">{course.title}</p>
                           </div>
                        </Link>
                     );
                  })}
               </div>
               <div className="special-course-controls" dir="ltr" aria-label="کنترل اسلایدر دوره ها">
                  <button type="button" className="special-course-arrow" onClick={() => goToCourse((courseOffset - 1 + courseData.length) % courseData.length)} aria-label="دوره ی قبلی">
                     <ChevronLeft aria-hidden="true" />
                  </button>
                  <div className="special-course-dots" role="group" aria-label="انتخاب دوره">
                     {courseData.map((course, index) => (
                        <button
                           key={course.name}
                           type="button"
                           className={`special-course-dot${courseOffset === index ? ' is-active' : ''}`}
                           onClick={() => goToCourse(index)}
                           aria-label={`نمایش دوره ی ${course.name}`}
                           aria-current={courseOffset === index ? 'true' : undefined}
                        />
                     ))}
                  </div>
                  <button type="button" className="special-course-arrow" onClick={() => goToCourse((courseOffset + 1) % courseData.length)} aria-label="دوره ی بعدی">
                     <ChevronRight aria-hidden="true" />
                  </button>
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
               <div className="w-full absolute left-0 bottom-0 text-center text-xs mb-2 text-white font-(family-name:--vazirt)">تمامی حقوق برای آموزشگاه زبان های خارجی غزل محفوظ است</div>

            </div>

         </div>

      </div>
   );
}


