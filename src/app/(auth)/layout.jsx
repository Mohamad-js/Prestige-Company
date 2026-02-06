import SmoothScrolling from "@/components/SmoothScrolling";
import "./../globals.css";


export default function RootLayout({ children }) {
  return (
    
   <div>
      
      <SmoothScrolling>
         {children}
      </SmoothScrolling>
      
   </div>
    
  );
}
