'use client'
import { MeshGradientBg } from "@/components/paper-mesh";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";




function Account(){

   const [userValue, setUserValue] = useState('')
   const [passValue, setPassValue] = useState('')

   const router = useRouter()


   const goBack = () => {
      router.back()
   }

   const handleSignup = async () => {
      try {
         const { data, error } = await supabase.auth.signUp({
            email: userValue,
            password: passValue
         });

         if (error) throw error;
         
         router.push('/status')
         localStorage.setItem("currentUser", JSON.stringify(data.user));

      } catch (error) {
         console.error('Signup error:', error.message);
      }
   };


   const handleLogin = async (e) => {
      e.preventDefault();

      const { data, error } = await supabase.auth.signInWithPassword({
         email: userValue,
         password: passValue
      });

      if (error) {
         console.error('Login error:', error.message);

      } else if (data.user) {
         router.push('/status')
         localStorage.setItem("currentUser", JSON.stringify(data.user));
      }
   };



   return(
      <div className="absolute w-full flex flex-col gap-5 min-h-screen items-center justify-center">
         <MeshGradientBg />

         <div className="w-fit h-fit absolute p-5 text-white left-0 top-0 flex justify-between items-center gap-5 border-b border-white/0 hover:border-white"
            onClick={goBack}
         >
            <IoArrowBackOutline />
            <div className="">Back</div>
         </div>

         <div className="w-70 h-100 bg-white/30 px-5 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-col items-center">
               <div className="relative w-1/2 h-11">
                  <Image className="w-full h-full object-contain rounded-2xl" src="/illustrations/logo.png" fill size={50} alt="Logo" />
               </div>
               <div className="text-3xl tracking-widest text-white font-[family-name:var(--font-dancing-script),cursive]">Prestige</div>
            </div>

            <div className="w-full text-xs text-center text-white font-semibold font-[family-name:var(--font-quicksand),san-serif]">Welcome to Prestige Modeling Company</div>

            <div className="w-full flex flex-col gap-5 justify-between text-white">
               <input className="bg-white/50 rounded-lg p-2 text-xs outline-none focus:bg-white border border-white transition-all hover:border-pink-500 text-gray-500" 
                  type="text" 
                  placeholder="Email"
                  value={userValue}
                  onChange={(e) => setUserValue(e.target.value)}
               />

               <input className="bg-white/50 rounded-lg p-2 text-xs outline-none focus:bg-white border border-white transition-all hover:border-pink-500 text-gray-500"
                  type="password"
                  placeholder="Password"   
                  value={passValue}
                  onChange={(e) => setPassValue(e.target.value)}
               />
            </div>

            <div className="w-full flex gap-1 justify-end">
               <button className="px-4 py-2 cursor-pointer bg-white rounded-xl text-sm text-black font-[family-name:var(--font-quicksand),san-serif] font-semibold shadow-xl hover:bg-gray-200 active:scale-95" onClick={handleSignup}>Sign Up</button>

               <button className="px-4 py-2 cursor-pointer bg-white rounded-xl text-sm text-black font-[family-name:var(--font-quicksand),san-serif] font-semibold shadow-xl hover:bg-gray-200 active:scale-95" onClick={handleLogin}>Login</button>
            </div>

         </div>
      </div>
   )
}

export default Account;