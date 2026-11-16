import { Geist, Geist_Mono, Dancing_Script, Quicksand, Ms_Madi, Comfortaa, Audiowide, Rubik_Marker_Hatch, Ramabhadra} from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import localFont from 'next/font/local'




const vazirt = localFont({
  src: '../../public/fonts/vazir/Vazir-Thin.ttf',
  display: 'swap',
  variable: '--vazirt',
})

const vazirb = localFont({
  src: '../../public/fonts/vazir/Vazir-Bold.ttf',
  display: 'swap',
  variable: '--vazirb',
})

const motevasel = localFont({
  src: '../../public/fonts/Motevasel/Motavaseliyan.ttf',
  display: 'swap',
  variable: '--motevasel',
})

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const dancingScript = Dancing_Script({
   weight: "400",
   variable: "--font-dancing-script",
   subsets: ["latin"],
   display: "swap",
});

const quicksand = Quicksand({
   weight: "300",
   variable: "--font-quicksand",
   subsets: ["latin"],
   display: "swap",
});

const msMadi = Ms_Madi({
   weight: "400",
   variable: "--font-msmadi",
   subsets: ["latin"],
   display: "swap",
});

const comforta = Comfortaa({
   weight: "300",
   variable: "--font-comforta",
   subsets: ["latin"],
   display: "swap",
});

const audiowide = Audiowide({
   weight: "400",
   variable: "--font-audiowide",
   subsets: ["latin"],
   display: "swap",
});

const marker = Rubik_Marker_Hatch({
   weight: "400",
   variable: "--font-marker",
   subsets: ["latin"],
   display: "swap",
});

const bold = Ramabhadra({
   weight: "400",
   variable: "--font-bold",
   subsets: ["latin"],
   display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
   metadataBase: siteUrl ? new URL(siteUrl) : undefined,
   title: {
      default: "Ghazal Center | مرکز زبان غزل",
      template: "%s | Ghazal Center",
   },
   description: "موسسه زبان‌های خارجی غزل؛ دوره‌های آموزش زبان انگلیسی و زبان‌های خارجی، آمادگی آزمون‌های بین‌المللی و دوره های خاص",
   applicationName: "Ghazal Center",
   keywords: ["موسسه زبان غزل", "آموزش زبان انگلیسی", "کلاس زبان", "آمادگی آیلتس", "آمادگی تافل", "آموزش زبان‌های خارجی", "accent course"],
   alternates: { languages: { fa: "/", en: "/homeEn" } },
   openGraph: {
      type: "website",
      siteName: "Ghazal Center",
      title: "Ghazal Center | مرکز زبان غزل",
      description: "دوره‌های آموزش زبان‌های خارجی، آمادگی آزمون‌های بین‌المللی و کلاس تخصصی اکسنت.",
      locale: "fa_IR",
      images: [{ url: "/OurLogo.png", width: 1500, height: 1500, alt: "نشان Ghazal Center" }],
   },
   twitter: {
      card: "summary",
      title: "Ghazal Center | مرکز زبان غزل",
      description: "دوره‌های آموزش زبان‌های خارجی و آمادگی آزمون‌های بین‌المللی.",
      images: ["/OurLogo.png"],
   },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={`${vazirt.variable} ${vazirb.variable} ${motevasel.variable}`}>
      <body
        className={`
            ${geistSans.variable}
            ${geistMono.variable}
            ${dancingScript.variable}
            ${quicksand.variable}
            ${msMadi.variable}
            ${comforta.variable}
            ${audiowide.variable}
            ${marker.variable}
            ${bold.variable}
           antialiased`}
      >
         
         <SmoothScrolling>
            {children}
         </SmoothScrolling>
      </body>
    </html>
  );
}
