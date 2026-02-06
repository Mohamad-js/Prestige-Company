import SmoothScrolling from "@/components/SmoothScrolling";
import "./../globals.css";
import Navbar from "@/components/navbar";


export default function RootLayout({ children }) {
  return (
    
   <div>

      <Navbar />
      
      <SmoothScrolling>
         {children}
      </SmoothScrolling>
      
   </div>
    
  );
}
