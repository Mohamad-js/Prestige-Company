'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Ham from './ham'
import GradientText from '@/components/GradientText'

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

function BrandWordmark() {
   return (
      <span className="flex items-center justify-center gap-1">
         <GradientText colors={["#6b00ff", "#ff00f7", "#ff0060"]} animationSpeed={8} variant="flow" className="h-7 w-auto whitespace-nowrap font-(family-name:--font-julius-sans-one) text-base">
            GHAZAL
         </GradientText>
         <span className="whitespace-nowrap font-(family-name:--font-righteous) text-xs">CENTER</span>
      </span>
   )
}

function Navbar() {
   const pathname = usePathname()
   const router = useRouter()
   const headerRef = useRef(null)
   const previousScrollY = useRef(0)
   const [language, setLanguage] = useState('fa')
   const [openMenuId, setOpenMenuId] = useState(null)
   const [isScrolled, setIsScrolled] = useState(false)
   const [isVisible, setIsVisible] = useState(true)
   const closeTimer = useRef(null)

   useEffect(() => {
      const updateScrollState = () => {
         const currentScrollY = window.scrollY
         setIsScrolled(currentScrollY > 8)

         if (openMenuId) {
            setIsVisible(true)
            previousScrollY.current = currentScrollY
            return
         }

         if (currentScrollY <= 8) {
            setIsVisible(true)
         } else if (currentScrollY < previousScrollY.current) {
            setIsVisible(true)
         } else if (currentScrollY > previousScrollY.current && currentScrollY >= window.innerHeight * 0.5) {
            setIsVisible(false)
         }

         previousScrollY.current = currentScrollY
      }

      previousScrollY.current = window.scrollY
      setIsScrolled(window.scrollY > 8)
      window.addEventListener('scroll', updateScrollState, { passive: true })
      return () => window.removeEventListener('scroll', updateScrollState)
   }, [openMenuId])

   useEffect(() => {
      if (!openMenuId) return

      setIsVisible(true)
   }, [openMenuId])

   const cancelScheduledClose = () => {
      if (closeTimer.current) {
         clearTimeout(closeTimer.current)
         closeTimer.current = null
      }
   }

   const closeMenu = () => {
      cancelScheduledClose()
      setOpenMenuId(null)
   }

   const scheduleMenuClose = () => {
      cancelScheduledClose()
      closeTimer.current = setTimeout(() => {
         closeTimer.current = null
         setOpenMenuId(null)
      }, 180)
   }

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
         cancelScheduledClose()
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
         onMouseLeave={scheduleMenuClose}
         onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
         }}
      >
         <nav
            aria-label="Primary navigation"
            className={`absolute top-0 p-10 z-50 flex h-15 w-full justify-center items-center gap-x-15 border-0 px-10 transition-all duration-300 ease-out max-[1070px]:invisible ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            onMouseEnter={cancelScheduledClose}
         >
            <div className={`w-full flex justify-between flex-row-reverse items-center py-1 px-2 rounded-3xl bg-white text-black shadow-lg shadow-black/10`}>
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
                                       className="absolute inset-1 -z-10 rounded-2xl bg-black/5"
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

               <div className="flex pl-2 w-30 h-full items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" aria-label="Ghazal Center home">
                     <span className="relative block size-7 overflow-hidden">
                        <Image
                           className="object-contain"
                           src="/OurLogo.png"
                           alt="Humming home"
                           fill
                           sizes="40px"
                        />
                     </span>
                     <GradientText colors={["#6b00ff", "#ff00f7", "#ff0060"]} animationSpeed={8} variant="flow" className="whitespace-nowrap font-(family-name:--font-cal-sans) text-xl">
                        Ghazal
                     </GradientText>
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
            </div>
         </nav>

         {openMegaMenu && (
            <div
               id={`${openItem.id}-submenu`}
               className="fixed inset-0 z-40 hidden min-[1071px]:block"
               aria-label={`${label(openItem)} submenu`}
            >
               <div
                  className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
                  onMouseEnter={(event) => event.clientY < 80 ? scheduleMenuClose() : closeMenu()}
                  onClick={closeMenu}
               />
               <section
                  className="absolute inset-x-10 top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-white/30 bg-white text-black shadow-2xl backdrop-blur-xl"
                  onMouseEnter={cancelScheduledClose}
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
                                 <div className='relative shrink-0 w-50 self-stretch overflow-hidden rounded-3xl border'>
                                    <Image
                                       className='object-cover'
                                       src={`/pics/navbar/${openMegaMenu.imgName}`}
                                       alt='Mega Menu Image'
                                       fill
                                    />
                                 </div>

                              :

                              openMegaMenu.imgSize === 'Square' ?
                                 <div className='relative shrink-0 w-100 self-stretch overflow-hidden rounded-3xl border'>
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

         <div className={`invisible top-0 left-0 z-3 flex min-w-full justify-between transition-transform duration-300 ease-out max-[1070px]:visible ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <Ham isScrolled={isScrolled} isVisible={isVisible} />
            <Link href="/" className="absolute right-3 top-3 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" aria-label="Ghazal Center home">
               <span className="relative block size-10 overflow-hidden">
                  <Image className="object-contain" src="/OurLogo.png" alt="Ghazal Center" fill sizes="40px" />
               </span>
               <BrandWordmark />
            </Link>
         </div>
      </header>
   )
}

export default Navbar
