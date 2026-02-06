
'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



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

   return(
      <div className="rounded-[0_0_20px_20px] fixed top-0 z-199 w-full p-3 flex justify-center gap-10 items-center">
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
   )
}

export default Navbar;