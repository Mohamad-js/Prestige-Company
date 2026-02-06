import Image from "next/image";

export default function Home() {
   return (
      <div className="min-w-full min-h-dvh flex flex-col items-center justify-center bg-white overflow-hidden">
         <div className="fixed top-0 w-full h-dvh flex justify-center items-center">
            <Image className="custom_zoom object-cover"
               src='/pics/pc_pic.jpg'
               alt="landing image"
               sizes={100}
               fill
            />
            
            <div className="flex flex-col justify-center items-center">
               <div className="z-1 right-3 text-white/70 text-9xl mb-5 font-[family-name:var(--font-dancing-script),cursive]">Prestige</div>
               <div className="z-1 font-sans tracking-widest text-xs mb-5">WHERE THE FASHION IS BORN ONCE AGAIN</div>
               
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
         <div className="z-1 w-full min-h-dvh bg-white shadow-[1px_0_10px_0_#0000007a] backdrop-blur-sm flex justify-start items-center">
            <div className="w-fit bg-red-500">
               <Image className="object-contain object-right"
                  src='/pics/SectionB.jpg'
                  alt=''
                  fill
               />
            </div>
            <div className="w-1/2 h-dvh bg-[linear-gradient(to_right,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.4)_90%,rgba(255,255,255,0.2)_95%,rgba(255,255,255,0)_100%)] z-10 pl-10 flex flex-col items-start justify-center">
               <p className="font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-3xl font-semibold">Showcasing The Iranian</p>
               <p className="font-[family-name:var(--font-msmadi),san-serif] text-[#a30000] text-8xl font-light">Beautiful Models</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>
         <div className="z-1 w-full min-h-dvh bg-red-500 backdrop-blur-sm flex justify-center items-center">
            <div className="w-full h-full flex justify-between items-start">
               <Image className="object-contain object-right scale-x-[-1]"
                  src='/pics/SectionC.jpg'
                  alt=''
                  fill
               />
            </div>
            <div className="w-full h-dvh bg-[linear-gradient(to_left,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.4)_90%,rgba(255,255,255,0.2)_95%,rgba(255,255,255,0)_100%)] z-10 pr-10 flex flex-col items-end justify-center">
               <p className="font-[family-name:var(--font-comforta),san-serif] text-[#a30000] text-7xl font-bold mb-2">TNP Modeling</p>
               <p className="w-5/6 font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-xl font-semibold text-end">Photographing beautiful Iranian models in Iran&apos;s stunning nature can perfectly showcase your relevant products.</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>
         <div className="z-1 w-full min-h-dvh bg-white backdrop-blur-sm flex justify-start items-center">
            <div className="w-fit bg-red-500">
               <Image className="object-contain object-right"
                  src='/pics/SectionE.jpg'
                  alt=''
                  fill
               />
            </div>
            <div className="w-1/2 h-dvh bg-[linear-gradient(to_right,rgba(255,255,255,1)_60%,rgba(255,255,255,0.8)_70%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0.4)_90%,rgba(255,255,255,0.2)_95%,rgba(255,255,255,0)_100%)] z-10 pl-10 flex flex-col items-start justify-center">
               <p className="font-[family-name:var(--font-audiowide),san-serif] text-[#a30000] text-7xl font-light">EXOTIC FEEL</p>
               <p className="font-[family-name:var(--font-quicksand),san-serif] text-gray-500 text-3xl font-semibold">To destinguish you from others!</p>
               <button className="py-2 px-6 rounded-xl border text-gray-500 font-medium bg-gray-100 hover:border-black hover:text-black cursor-pointer active:scale-95 transition-all mt-5">Visit</button>
            </div>
         </div>


      </div>
   );
}
