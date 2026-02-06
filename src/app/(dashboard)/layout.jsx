'use client'
import SmoothScrolling from "@/components/SmoothScrolling";
import "./../globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 



export default function RootLayout({ children }) {

   const router = useRouter()

   useEffect(() => {
      const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));

      if(isLoggedIn) return

      router.push('/')

   }, [router])

  return (
    
   <div>
      
      <SmoothScrolling>
         {children}
      </SmoothScrolling>
      
   </div>
    
  );
}
