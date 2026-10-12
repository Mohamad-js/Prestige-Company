
'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Ham from "./ham";



function Navbar(){
   const path = usePathname()
   const router = useRouter()
   const [train, setTrain] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false);



   const navigate = () => {
      if(language === 'فا'){
         setLanguage('EN')
         router.push('/homeEn')

      } else if(language === 'EN'){
         setLanguage('فا')
         router.push('/')
      }
   }

   const enOptions = [
      {
         title: 'Home',
         url: '/',
      },
      {
         title: 'Languages',
         url: '/languages',
      },
      {
         title: 'Exams',
         url: '/exams',
      },
      {
         title: 'Courses',
         url: '/courses',
      },
      {
         title: 'Training',
         url: '/training',
      },
      {
         title: 'Join Prestige',
         url: '/join',
      },
      {
         title: 'Books',
         url: '/books',
      },
      {
         title: 'Level Test',
         url: '/level',
      },
      {
         title: 'About Us',
         url: '/about',
      }
   ]

   const faOptions = [
      {
         title: 'خانه',
         url: '/',
      },
      {
         title: 'زبان ها',
         url: '/languages',
      },
      {
         title: 'آزمون ها',
         url: '/exams',
      },
      {
         title: 'دوره ها',
         url: '/courses',
      },
      {
         title: 'تربیت مدرس',
         url: '/training',
      },
      {
         title: 'استخدام',
         url: '/join',
      },
      {
         title: 'کتاب ها',
         url: '/books',
      },
      {
         title: 'تعیین سطح',
         url: '/level',
      },
      {
         title: 'درباره ی ما',
         url: '/about',
      }
   ]


   const [language, setLanguage] = useState('فا')


   const showMenu = (option) => {
      option === 'تربیت مدرس' && setTrain(true)
   }

   const closeMenu = () => {
      setTrain(false)
   }

   return (
      <div className='fixed top-0 min-w-full h-fit z-3 flex justify-center items-center'>

         <div
            className={`
               absolute top-0 z-2 w-full h-15 bg-white
               flex flex-wrap flex-row-reverse justify-between
               px-5 gap-x-15 items-end
               max-[1070px]:invisible
            `}

             onMouseEnter={closeMenu}>

            <div className='w-full h-6' onMouseEnter={closeMenu}></div>

            <div className="flex justify-between items-center">
               {
                  language === 'فا' ?
                     faOptions.map((item, index) => (
                        <Link href={item.url} key={index}>
                           <div className={`group flex flex-col justify-start items-center text-xs py-2 px-4 cursor-pointer active:scale-95 ${path === item.url ? 'font-(family-name:--vazirb)' : `${language === 'فا' ? 'font-(family-name:--vazirt) border-b-2 border-b-[#0000] hover:border-b-black/30' : ''}`}`} onMouseEnter={() => showMenu(item.title)}>
                              {item.title}
                           </div>
                        </Link>
                     ))
                     :
                     language === 'EN' ?
                        enOptions.map((item, index) => (
                           <Link href={item.url} key={index}>
                              <div className={`group flex flex-col justify-start items-center text-xs py-2 px-4 cursor-pointer active:scale-95 ${path === item.url ? 'font-(family-name:--vazirb) text-black' : `hover:text-black text-black/50`}`} onMouseEnter={() => showMenu(item.title)}>
                                 {item.title}
                              </div>
                           </Link>
                        ))
                     :
                     null
               }

            </div>

            <div className='absolute left-7 top-4 w-30 flex justify-between items-end'>
               <Link href='/'>
                  <div onMouseEnter={closeMenu} className="w-fit cursor-pointer overflow-hidden flex items-center justify-center z-0">
                     <div className="relative size-8 overflow-hidden flex justify-center items-center">
                        <Image className='object-contain'
                           src='/illustrations/logo.png'
                           alt='logo'
                           fill
                           size={100}
                        />
                     </div>
                  </div>
               </Link>

               <div className={`size-6 text-xs ml-2 font-semibold text-gray-400 bg-gray-100 rounded p-1 flex justify-center items-center hover:text-black cursor-pointer ${language === 'فا' ? 'font-(family-name:--vazirt)' : ''}`} onClick={navigate}>{language}</div>
            </div>

         </div>

         {/* <div className="absolute custom_bg2 top-0 w-[98%] mt-2 z-2 p-2 flex justify-between rounded-[10px] items-center invisible max-[1070px]:min-[850px]:visible">

            <div className={`w-fit flex justify-center items-center ${language === 'فا' ? 'font-(family-name:--vazirb)' : ''}`}>
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
         </div> */}

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

         {
            train && (
                <div className="absolute top-15 left-0 min-w-full min-h-screen">

                   {/* Background */}
                   <div
                       className="absolute inset-0 z-0 backdrop-blur-xs bg-[#0000004d]"
                       onMouseEnter={closeMenu}
                   />

                   {/* White menu */}
                   <div className="relative z-10 w-full h-50 bg-white">

                   </div>

                </div>
            )
         }
      </div>
   )

}

export default Navbar;