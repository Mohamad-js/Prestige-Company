'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Ham from './ham'

// Keep submenu content beside its parent. Adding a section is now only a data change.
const navItems = [
   {
      id: 'home',
      url: '/',
      fa: 'صفحه اصلی',
      en: 'Home'
   },
   {
      id: 'courses',
      url: '/courses',
      fa: 'دوره ها',
      en: 'Courses',

      children: {

         languages: [
            {url: '/languages/english', fa: 'انگلیسی', en: 'English'},
            {url: '/languages/french', fa: 'فرانسوی', en: 'French'},
            {url: '/languages/spanish', fa: 'اسپانیایی', en: 'Spanish'},
            {url: '/languages/duth', fa: 'هلندی', en: 'Dutch'},
            {url: '/languages/danish', fa: 'دانمارکی', en: 'Danish'},
            {url: '/languages/turkish', fa: 'ترکی استانبولی', en: 'Turkish'},
            {url: '/languages/german', fa: 'آلمانی', en: 'German'},
            {url: '/languages/portuguese', fa: 'پرتغالی', en: 'Portuguese'},
            {url: '/languages/chinese', fa: 'چینی', en: 'Chinese'},
            {url: '/languages/korean', fa: 'کره ای', en: 'Korean'},
            {url: '/languages/japanese', fa: 'ژاپنی', en: 'Japanese'},
            {url: '/languages/arabic', fa: 'عربی', en: 'Arabic'},
         ],

         general: [
             {url: '/general/elementary', fa: 'مبتدی', en: 'Elementary'},
             {url: '/general/pre_intermediate', fa: 'پیش متوسط', en: 'Pre-Intermediate'},
             {url: '/general/intermediate', fa: 'متوسط', en: 'Intermediate'},
             {url: '/general/upper_intermediate', fa: 'پیش پیشرفته', en: 'Upper-Intermediate'},
             {url: '/general/advanced', fa: 'پیشرفته', en: 'Advanced'},
             {url: '/general/journey', fa: 'آمادگی سفر', en: 'Journey'},
             {url: '/general/journey', fa: 'آمادگی مهاجرت', en: 'Journey'},
         ],

         subSkills: [
             {url: '/sub_skills/switch', fa: 'سوئیچ', en: 'Switch'},
             {url: '/sub_skills/accent', fa: 'اکسنت', en: 'Accent'},
             {url: '/sub_skills/netflix', fa: 'نت فلیکس', en: 'Netflix'},
             {url: '/sub_skills/netflix', fa: 'استریت', en: 'Street Talk'},
             {url: '/kids/rangahang', fa: 'رنگاهنگ', en: 'Rangahang'},
             {url: '/sub_skills/writing', fa: 'رایتینگ', en: 'Writing'},
             {url: '/sub_skills/listening', fa: 'لیسنینگ', en: 'Listening'},
             {url: '/sub_skills/speaking', fa: 'اسپیکینگ', en: 'Speaking'},
             {url: '/sub_skills/reading', fa: 'ریدینگ', en: 'Reading'},
             {url: '/sub_skills/literature', fa: 'درک ادبیات', en: 'Literature'},
             {url: '/sub_skills/essay', fa: 'مقاله نویسی', en: 'Essay'},
             {url: '/sub_skills/essay', fa: 'شدوئینگ', en: 'Shadowing'},
         ],

         ttc: [
             {url: '/ttc/', fa: 'روانشناسی آموزش', en: ''},
             {url: '/ttc/', fa: 'آموزش اسپیکینگ', en: ''},
             {url: '/ttc/', fa: 'آموزش رایتینگ', en: ''},
             {url: '/ttc/', fa: 'آموزش ریدینگ', en: ''},
             {url: '/ttc/', fa: 'آموزش لیسنینگ', en: ''},
             {url: '/ttc/', fa: 'متد CLIL', en: ''},
             {url: '/ttc/', fa: 'متد TBLT', en: ''},
             {url: '/ttc/', fa: 'متد CLT', en: ''},
             {url: '/ttc/', fa: 'ارزیابی عملکرد', en: ''},
             {url: '/ttc/', fa: 'مدیریت کلاس', en: ''},
             {url: '/ttc/', fa: 'دوره ی CELTA', en: ''},
             {url: '/ttc/', fa: 'دوره ی DELTA', en: ''},
         ],

         jobs: [
             {url: '/jobs/', fa: 'زبان پزشکی', en: ''},
             {url: '/jobs/', fa: 'زبان پرستاری', en: ''},
             {url: '/jobs/', fa: 'زبان مهندسی', en: ''},
             {url: '/jobs/', fa: 'زبان کامپیوتر', en: ''},
             {url: '/jobs/', fa: 'زبان گردشگری', en: ''},
             {url: '/jobs/', fa: 'زبان هتلداری', en: ''},
             {url: '/jobs/', fa: 'زبان مهمانداری', en: ''},
             {url: '/jobs/', fa: 'زبان حقوق', en: ''},
             {url: '/jobs/', fa: 'زبان مدیریت', en: ''},
             {url: '/jobs/', fa: 'زبان برنامه نویسی', en: ''},
             {url: '/jobs/', fa: 'زبان معماری', en: ''},
             {url: '/jobs/', fa: 'زبان تجارت', en: ''},
         ],

         conversation: [
             {url: '/conversations/', fa: '۲ نفره پیش متوسط', en: ''},
             {url: '/conversations/', fa: '۲ نفره متوسط', en: ''},
             {url: '/conversations/', fa: '۲ نفره پیشرفته', en: ''},
             {url: '/conversations/', fa: 'گروهی پیش متوسط', en: ''},
             {url: '/conversations/', fa: 'گروهی متوسط', en: ''},
             {url: '/conversations/', fa: 'گروهی پیشرفته', en: ''},
         ],

         enExams: [
             {url: '/enExams/', fa: 'IELTS', en: 'IELTS'},
             {url: '/enExams/', fa: 'TOEFL', en: 'TOEFL'},
             {url: '/enExams/', fa: 'TOEIC', en: 'TOEIC'},
             {url: '/enExams/', fa: 'SAT', en: 'SAT'},
             {url: '/enExams/', fa: 'DUOLINGO', en: 'DUOLINGO'},
             {url: '/enExams/', fa: 'PEARSON', en: 'PEARSON'},
             {url: '/enExams/', fa: 'IGSCE', en: 'IGSCE'},
             {url: '/enExams/', fa: 'ACT', en: 'ACT'},
             {url: '/enExams/', fa: 'CELPIP', en: 'CELPIP'},
             {url: '/enExams/', fa: 'OET', en: 'OET'},
             {url: '/enExams/', fa: 'FCE', en: 'FCE'},
             {url: '/enExams/', fa: 'CAE', en: 'CAE'},
         ],

         exams: [
             {url: '/exams/', fa: 'TEF', en: 'TEF'},
             {url: '/exams/', fa: 'TCF', en: 'TCF'},
             {url: '/exams/', fa: 'DELF / DALF', en: 'DELF / DALF'},
             {url: '/exams/', fa: 'DELE', en: 'DELE'},
             {url: '/exams/', fa: 'CCSE', en: 'CCSE'},
             {url: '/exams/', fa: 'Prøve i Dansk', en: 'Prøve i Dansk'},
             {url: '/exams/', fa: 'TÖMER', en: 'TÖMER'},
             {url: '/exams/', fa: 'Goethe', en: 'Goethe'},
             {url: '/exams/', fa: 'TestDaF', en: 'TestDaF'},
             {url: '/exams/', fa: 'HSK', en: 'HSK'},
             {url: '/exams/', fa: 'JLPT', en: 'JLPT'},
             {url: '/exams/', fa: 'HAMZA', en: 'HAMZA'},
         ],

      }
   },

   {
      id: 'join',
      url: '/join',
      fa: 'استخدام',
      en: 'Join Us',

      children: {
         opportunities: [
            {url: '/teachers/english', fa: 'استاد انگلیسی', en: 'English', icon: false, textIcon:'EN'},
            {url: '/teachers/french', fa: 'استاد فرانسوی', en: 'French', icon: false, textIcon:'FR'},
            {url: '/teachers/spanish', fa: 'استاد اسپانیایی', en: 'Spanish', icon: false, textIcon:'SP'},
            {url: '/teachers/duth', fa: 'استاد هلندی', en: 'Dutch', icon: false, textIcon:'DU'},
            {url: '/teachers/danish', fa: 'استاد دانمارکی', en: 'Danish', icon: false, textIcon:'DA'},
            {url: '/teachers/turkish', fa: 'استاد ترکی استانبولی', en: 'Turkish', icon: false, textIcon:'TU'},
            {url: '/teachers/german', fa: 'استاد آلمانی', en: 'German', icon: false, textIcon:'GE'},
            {url: '/teachers/portuguese', fa: 'استاد پرتغالی', en: 'Portuguese', icon: false, textIcon:'PO'},
            {url: '/teachers/chinese', fa: 'استاد چینی', en: 'Chinese', icon: false, textIcon:'CH'},
            {url: '/teachers/korean', fa: 'استاد کره ای', en: 'Korean', icon: false, textIcon:'KO'},
            {url: '/teachers/japanese', fa: 'استاد ژاپنی', en: 'Japanese', icon: false, textIcon:'JA'},
            {url: '/teachers/arabic', fa: 'استاد عربی', en: 'Arabic', icon: false, textIcon:'AR'},
            {url: '/office/', fa: 'منشی', en: 'Secretary', icon: true},
            {url: '/office/', fa: 'بازاریاب', en: 'Marketing', icon: true},
            {url: '/office/', fa: 'طراح گرافیک', en: 'Graphic Designer', icon: true},
            {url: '/office/', fa: 'توسعه دهنده وب', en: 'Developer', icon: true},
         ],
      }

   },

   {
      id: 'books',
      url: '/books',
      fa: 'کتاب‌ها',
      en: 'Books',

      children: {
         kids: [
            {url: '/books/kids/', fa: 'Pockets', en: 'Pockets'},
            {url: '/books/kids/', fa: 'Phonics', en: 'Phonics'},
            {url: '/books/kids/', fa: 'First Friends', en: 'First Friends'},
            {url: '/books/kids/', fa: 'Tiny Talk', en: 'Tiny Talk'},
            {url: '/books/kids/', fa: "Let's Go", en: "Let's Go"},
            {url: '/books/kids/', fa: 'Family and Friends', en: 'Family and Friends'},
            {url: '/books/kids/', fa: 'Teen 2 Teen', en: 'Teen 2 Teen'},
            {url: '/books/kids/', fa: 'Project', en: 'Project'},
            {url: '/books/kids/', fa: 'Super Minds', en: 'Super Minds'},
            {url: '/books/kids/', fa: 'Big English', en: 'Big English'},
            {url: '/books/kids/', fa: 'Got it', en: 'Got it'},
            {url: '/books/kids/', fa: 'Connect', en: 'Connect'},
         ],

         adults: [
            {url: '/books/adults/', fa: 'Speak Out', en: 'Speak Out'},
            {url: '/books/adults/', fa: 'Speak Now', en: 'Speak Now'},
            {url: '/books/adults/', fa: 'Evolve', en: 'Evolve'},
            {url: '/books/adults/', fa: 'English File', en: 'English File'},
            {url: '/books/adults/', fa: 'English Result', en: 'English Result'},
            {url: '/books/adults/', fa: 'Business Result', en: 'Business Result'},
            {url: '/books/adults/', fa: 'Touchstone', en: 'Touchstone'},
            {url: '/books/adults/', fa: 'Four Corners', en: 'Four Corners'},
            {url: '/books/adults/', fa: 'Headway', en: 'Headway'},
            {url: '/books/adults/', fa: 'Solutions', en: 'Solutions'},
            {url: '/books/adults/', fa: 'Connectivity', en: 'Connectivity'},
            {url: '/books/adults/', fa: 'Top Notch', en: 'Top Notch'}
         ],

         specialSkills: [
            {url: '/books/special/', fa: 'The Apple Book', en: 'The Apple Book'},
            {url: '/books/special/', fa: 'Academic Writing', en: 'Academic Writing'},
            {url: '/books/special/', fa: 'Language Files', en: 'Language Files'},
            {url: '/books/special/', fa: 'Linguistics, An Introduction', en: 'Linguistics, An Introduction'},
            {url: '/books/special/', fa: 'Applied Linguistics', en: 'Applied Linguistics'},
            {url: '/books/special/', fa: 'Street Talk', en: 'Street Talk'},
            {url: '/books/special/', fa: 'How to', en: 'How to'},
            {url: '/books/special/', fa: 'English Language Teaching', en: 'English Language Teaching'},
            {url: '/books/special/', fa: 'Elements of Literature', en: 'Elements of Literature'},
            {url: '/books/special/', fa: 'Literature & Composition', en: 'Literature & Composition'},
            {url: '/books/special/', fa: 'American Accent Training', en: 'American Accent Training'},
            {url: '/books/special/', fa: 'Active Listening', en: 'Active Listening'},
         ],

         otherLanguages: [
            {url: '/books/moreLans/', fa: 'Le Nouveau Taxi !', en: 'Le Nouveau Taxi !'},
            {url: '/books/otherLans/', fa: 'Alter Ego +', en: 'Alter Ego +'},
            {url: '/books/otherLans/', fa: 'Mon Alter Ego', en: 'Mon Alter Ego'},
            {url: '/books/otherLans/', fa: 'Aula Internacional', en: 'Aula Internacional'},
            {url: '/books/otherLans/', fa: 'Nuevo Prisma', en: 'Nuevo Prisma'},
            {url: '/books/otherLans/', fa: 'Nuovo Espresso', en: 'Nuovo Espresso'},
            {url: '/books/otherLans/', fa: 'Progetto Italiano', en: 'Progetto Italiano'},
            {url: '/books/otherLans/', fa: 'Momente', en: 'Momente'},
            {url: '/books/otherLans/', fa: 'Netzwerk neu', en: 'Netzwerk neu'},
            {url: '/books/otherLans/', fa: 'Menschen', en: 'Menschen'},
            {url: '/books/moreLans/', fa: 'Samba', en: 'Samba'},
            {url: '/books/moreLans/', fa: 'Novo Avenida Brasil', en: 'Novo Avenida Brasil'},
         ],

         moreLanguages: [
            {url: '/books/moreLans/', fa: 'Videre mod dansk', en: 'Videre mod dansk'},
            {url: '/books/moreLans/', fa: 'Bem Brasil', en: 'Bem Brasil'},
            {url: '/books/moreLans/', fa: 'Português XXI', en: 'Português XXI'},
            {url: '/books/otherLans/', fa: 'På vej til dansk', en: 'På vej til dansk'},
            {url: '/books/otherLans/', fa: 'Vi taler dansk', en: 'Vi taler dansk'},
            {url: '/books/moreLans/', fa: 'Midtvejs til dansk', en: 'Midtvejs til dansk'},
            {url: '/books/moreLans/', fa: 'HSK Series', en: 'HSK Series'},
            {url: '/books/moreLans/', fa: 'Yonsei Korean', en: 'Yonsei Korean'},
            {url: '/books/moreLans/', fa: 'Sogang Korean', en: 'Sogang Korean'},
            {url: '/books/moreLans/', fa: 'Nour Al Arabiya', en: 'Nour Al Arabiya'},
            {url: '/books/otherLans/', fa: 'Yeni İstanbul', en: 'Yeni İstanbul'},
            {url: '/books/moreLans/', fa: 'Uluslararası Öğrenciler İçin Türkçe', en: 'Uluslararası Öğrenciler İçin Türkçe'},
         ],
      }
   },

   { id: 'level', url: '/level', fa: 'تعیین سطح', en: 'Level test' },
   { id: 'about', url: '/about', fa: 'درباره ی ما', en: 'About us' },
]

// Each mega menu owns its composition: feature image, copy, image position, and link columns.
const megaMenus = {
   courses: {
      type: 'raw',
      imgName: 'Languages.png',
      imgSize: 'Vertical',
      imgPosition: 'Left',

      columns: [
         {
            fa: 'زبان ها',
            en: 'European Languages',
            items: navItems[1].children.languages
         },
         {
            fa: 'جنرال',
            en: 'General',
            items: navItems[1].children.general
         },
         {
            fa: 'ریز مهارت',
            en: 'Sub-Skills',
            items: navItems[1].children.subSkills
         },
         {
            fa: 'تربیت مدرس',
            en: 'TTC',
            items: navItems[1].children.ttc
         },
         {
            fa: 'مکالمه',
            en: 'Free Discussion',
            items: navItems[1].children.conversation
         },
         {
            fa: 'مشاغل',
            en: 'Jobs',
            items: navItems[1].children.jobs
         },
         {
            fa: 'آمادگی آزمون',
            en: 'English Exam Prep',
            items: navItems[1].children.enExams
         },
         {
            fa: 'دیگر آزمون ها',
            en: 'Other Exams',
            items: navItems[1].children.exams
         },
      ],
   },

   join: {
      type: 'visual',
      imgName: 'JoinUs.png',
      imgSize: 'Square',
      imgPosition: 'Right',
      items: navItems[2].children.opportunities
   },

   books: {
      type: 'raw',
      imgName: 'all-books.png',
      imgSize: 'Square',
      imgPosition: 'Right',

      columns: [
         {
            fa: 'Kids English',
            en: 'Kids English',
            items: navItems[3].children.kids
         },
         {
            fa: 'Adults English',
            en: 'Adults English',
            items: navItems[3].children.adults
         },
         {
            fa: 'Special',
            en: 'Special',
            items: navItems[3].children.specialSkills
         },
         {
            fa: 'Other Languages',
            en: 'Other Languages',
            items: navItems[3].children.otherLanguages
         },
         {
            fa: 'More Languages',
            en: 'More Languages',
            items: navItems[3].children.moreLanguages
         },
      ],
   },
}

function Navbar() {
   const pathname = usePathname()
   const router = useRouter()
   const headerRef = useRef(null)
   const [language, setLanguage] = useState('fa')
   const [openMenuId, setOpenMenuId] = useState(null)

   const closeMenu = () => setOpenMenuId(null)

   useEffect(() => {
      const closeOnOutsidePointer = (event) => {
         if (!headerRef.current?.contains(event.target)) closeMenu()
      }

      const closeOnEscape = (event) => {
         if (event.key === 'Escape') closeMenu()
      }

      document.addEventListener('pointerdown', closeOnOutsidePointer)
      document.addEventListener('keydown', closeOnEscape)

      return () => {
         document.removeEventListener('pointerdown', closeOnOutsidePointer)
         document.removeEventListener('keydown', closeOnEscape)
      }
   }, [])

   const label = (item) => item[language]
   const isCurrent = (item) => pathname === item.url || pathname.startsWith(`${item.url}/`)
   const openItem = navItems.find((item) => item.id === openMenuId)
   const openMegaMenu = openItem ? megaMenus[openItem.id] : null

   return (
      <header
         ref={headerRef}
         className="fixed top-0 z-50 flex min-w-full justify-center"
         onMouseLeave={closeMenu}
         onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
         }}
      >
         <nav
            aria-label="Primary navigation"
            className="absolute bg-white border-0 border-b-2 top-0 z-50 flex h-15 w-full flex-row-reverse items-end justify-between gap-x-15 px-5 max-[1070px]:invisible"
            onMouseEnter={closeMenu}
         >
            <div className="flex items-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
               {navItems.map((item) => {
                  const hasSubmenu = Boolean(megaMenus[item.id])
                  const isOpen = openMenuId === item.id
                  const currentItem = isCurrent(item)

                  return (
                     <div
                        key={item.id}
                        className="group relative"
                        onMouseEnter={() => hasSubmenu ? setOpenMenuId(item.id) : closeMenu()}
                        onFocusCapture={() => hasSubmenu ? setOpenMenuId(item.id) : closeMenu()}
                     >
                        <div className="flex items-center justify-end">
                           <Link
                              href={item.url}
                              className={`relative isolate px-3 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${language === 'fa' ? 'font-(family-name:--vazirt)' : ''} ${currentItem ? 'font-(family-name:--vazirb)' : ''}`}
                              aria-current={currentItem ? 'page' : undefined}
                              onClick={closeMenu}
                           >
                              <div className='flex items-center gap-1'>
                                 {label(item)}

                                 {
                                    hasSubmenu && (
                                    <ChevronDown aria-hidden="true" size={14} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                                 )}
                              </div>

                              {currentItem && (
                                 <span
                                    aria-hidden="true"
                                    className="absolute inset-1 -z-10 rounded-md bg-black/5"
                                 />
                              )}

                              {
                                 !currentItem && (
                                 <span
                                    aria-hidden="true"
                                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-center bg-current transition-transform duration-200 group-hover:scale-x-100 group-focus-within:scale-x-100 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
                                 />
                              )}

                           </Link>

                        </div>

                     </div>
                  )
               })}
            </div>

            <div className="flex w-30 items-end justify-between">
               <Link href="/" aria-label="Prestige home" className="flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" onClick={closeMenu}>
                  <span className="relative size-15 text-black flex justify-center items-center">
                     <svg
                        className="logo_nest"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >

                        <path
                           className="logo_anim"
                           pathLength="1"
                           d="M 132 193 L 159 236 L 189 276 L 202 290 L 202 291 L 218 307 L 240 324 L 247 327 L 249 329 L 251 329 L 260 333 L 265 333 L 266 334 L 280 333 L 283 331 L 285 331 L 294 325 L 301 317 L 306 309 L 299 316 L 293 320 L 282 324 L 266 324 L 265 323 L 262 323 L 256 321 L 249 317 L 247 317 L 239 312 L 221 298 L 192 268 L 154 219 L 145 205 L 139 198 L 140 197 L 153 197 L 154 198 L 168 199 L 169 200 L 183 202 L 187 204 L 190 204 L 201 208 L 204 208 L 213 212 L 218 213 L 221 215 L 223 215 L 237 222 L 239 222 L 241 224 L 243 224 L 245 226 L 263 235 L 286 251 L 304 267 L 304 268 L 312 276 L 321 289 L 328 306 L 329 319 L 321 337 L 313 348 L 300 361 L 292 367 L 281 373 L 279 373 L 274 376 L 268 377 L 265 379 L 255 382 L 237 391 L 225 399 L 210 413 L 199 428 L 193 441 L 191 447 L 190 456 L 189 457 L 189 466 L 192 456 L 201 438 L 211 424 L 222 413 L 241 400 L 257 392 L 259 392 L 264 389 L 279 384 L 293 377 L 306 368 L 318 357 L 326 347 L 331 337 L 333 335 L 333 333 L 336 328 L 340 316 L 340 313 L 344 301 L 351 287 L 359 276 L 369 266 L 382 257 L 390 253 L 392 253 L 395 251 L 407 247 L 420 246 L 421 245 L 437 245 L 438 246 L 455 247 L 456 248 L 460 248 L 461 249 L 465 249 L 466 250 L 481 253 L 488 256 L 494 257 L 497 259 L 500 259 L 513 265 L 516 265 L 512 264 L 495 256 L 493 256 L 490 254 L 466 246 L 463 246 L 454 243 L 450 243 L 449 242 L 430 240 L 429 239 L 424 239 L 423 238 L 417 237 L 408 232 L 400 226 L 385 219 L 382 219 L 378 217 L 372 217 L 371 216 L 358 217 L 347 222 L 343 225 L 336 233 L 344 227 L 353 223 L 356 223 L 357 222 L 371 222 L 372 223 L 375 223 L 381 225 L 393 231 L 405 239 L 384 246 L 364 258 L 355 266 L 343 282 L 340 289 L 338 291 L 336 297 L 334 299 L 333 298 L 333 295 L 327 283 L 316 268 L 302 254 L 291 245 L 262 226 L 233 212 L 231 212 L 220 207 L 211 204 L 208 204 L 201 201 L 198 201 L 197 200 L 194 200 L 185 197 L 181 197 L 180 196 L 168 195 L 167 194 L 158 194 L 157 193 Z"/>
                     </svg>

                  </span>
               </Link>

               {/*<button*/}
               {/*   type="button"*/}
               {/*   className={`ml-2 flex size-6 cursor-pointer items-center justify-center rounded bg-gray-100 p-1 text-xs font-semibold text-gray-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${language === 'fa' ? 'font-(family-name:--vazirt)' : ''}`}*/}
               {/*   onClick={navigate}*/}
               {/*   aria-label="Change language"*/}
               {/*>*/}
               {/*   {language === 'fa' ? 'EN' : 'فا'}*/}
               {/*</button>*/}
            </div>
         </nav>

         {
            openMegaMenu && (
            <div id={`${openItem.id}-submenu`} className="fixed inset-0 z-40 hidden min-[1071px]:block" aria-label={`${label(openItem)} submenu`}>
               <div className="absolute inset-0 bg-black/20 backdrop-blur-md" onMouseEnter={closeMenu} onClick={closeMenu} />
               <section
                  className="absolute inset-x-0 top-15 overflow-y-auto bg-white text-black shadow-2xl backdrop-blur-xl"
                  onClick={(event) => event.stopPropagation()}
               >

                  <div className={`flex items-stretch gap-10 px-10 py-12 ${openMegaMenu.imgPosition === 'Right' && 'flex-row-reverse'} ${language === 'fa' ? 'font-(family-name:--vazirt)' : ''}`} dir={language === 'fa' && openItem.id !== 'books' ? 'rtl' : 'ltr'}>
                        <div className={`w-full flex justify-between`}>
                           {
                              openMegaMenu.type === 'raw' ?

                                 openMegaMenu.columns.map((column, index) => (
                                    <div className='' key={index}>
                                       <h3 className="text-sm font-semibold ">{label(column)}</h3>
                                       <ul className=''>
                                          {
                                             column.items.map((child, index) => (
                                                <li key={index}>
                                                   <Link
                                                      href={child.url}
                                                      className={`group/link flex rounded-md py-2 text-black transition-colors focus-visible:bg-black/5 focus-visible:text-black focus-visible:outline-none`}
                                                      onClick={closeMenu}
                                                   >
                                                      <span className="text-xs border-b border-transparent group-hover/link:border-current">{label(child)}</span>
                                                   </Link>
                                                </li>
                                             ))
                                          }
                                       </ul>
                                    </div>
                                 ))
                              :

                              openMegaMenu.type === 'visual' ?
                                 <div className="w-full flex flex-wrap gap-5">
                                    {openMegaMenu?.items?.map((opportunity, index) => (
                                       <div
                                          key={index}
                                          className="flex grow basis-40 max-w-52 items-center justify-between p-2 rounded-full bg-gray-50 border border-transparent hover:border-black/50 active:scale-98 cursor-pointer"
                                       >
                                          <div className="flex shrink-0 justify-center items-center bg-gray-100 w-10 h-10 rounded-full">
                                             {opportunity.icon ? (
                                                <div className="relative w-8 h-8 overflow-hidden">
                                                   <Image
                                                      src={`/pics/navbar/icons/${opportunity.en}.svg`}
                                                      alt={`${opportunity.en} icon`}
                                                      fill
                                                   />
                                                </div>
                                             ) : (
                                                <div className="text-gray-500 font-(family-name:--font-bold)">
                                                   {opportunity.textIcon}
                                                </div>
                                             )}
                                          </div>

                                          <div className="px-2 whitespace-nowrap">
                                             {opportunity.fa}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              :

                              <div className='text-red-500'>MegaMenu Invalid Type</div>
                           }
                        </div>

                        {
                           openMegaMenu.imgName &&

                              openMegaMenu.imgSize === 'Vertical' ?
                                 <div className='relative shrink-0 w-50 self-stretch border'>
                                    <Image
                                       className='object-cover'
                                       src={`/pics/navbar/${openMegaMenu.imgName}`}
                                       alt='Mega Menu Image'
                                       fill
                                    />
                                 </div>

                              :

                              openMegaMenu.imgSize === 'Square' ?
                                 <div className='relative shrink-0 w-100 self-stretch border'>
                                    <Image
                                       className='object-cover'
                                       src={`/pics/navbar/${openMegaMenu.imgName}`}
                                       alt='Mega Menu Image'
                                       fill
                                    />
                                 </div>

                              :

                              <div className='text-red-500'>Unsupported Image Size</div>
                        }
                     </div>
               </section>
            </div>
         )}

         <div className="invisible top-0 left-0 z-3 flex min-w-full justify-between max-[1070px]:visible">
            <Ham />
            <Link href="/" className="absolute right-3 top-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
               <span className="relative block size-10 overflow-hidden">
                  <Image className="object-contain" src="/logo.webp" alt="Humming home" fill sizes="40px" />
               </span>
            </Link>
         </div>
      </header>
   )
}

export default Navbar
