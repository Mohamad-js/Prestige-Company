import SmoothScrolling from "@/components/SmoothScrolling";
import "./../globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Ghazal Center | مرکز زبان غزل",
  description: "دوره‌های آموزش زبان انگلیسی و زبان‌های خارجی، آمادگی آزمون‌های بین‌المللی و کلاس تخصصی اکسنت در Ghazal Center.",
  alternates: { canonical: "/" },
};


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
