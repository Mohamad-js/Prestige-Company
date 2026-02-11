import { Geist, Geist_Mono, Dancing_Script, Quicksand, Ms_Madi, Comfortaa, Audiowide, Rubik_Marker_Hatch } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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

export const metadata = {
   title: "Prestige Modeling",
   description: "The Place Where Fashion Was Born Again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${quicksand.variable} ${msMadi.variable} ${comforta.variable} ${audiowide.variable} ${marker.variable}  antialiased`}
      >
         
         <SmoothScrolling>
            {children}
         </SmoothScrolling>
      </body>
    </html>
  );
}
