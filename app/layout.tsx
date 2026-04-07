import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "./locales/i18nprovider";
import Navbar from "./features/home/components/navbar";
import Footer from "./features/home/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Location de voiture",
  description: "Location de voiture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)} >
     <body
       
      >
        <I18nProvider>
          <Navbar/>
        {children}
        <Footer/>
        </I18nProvider>
      </body>
    </html>
  );
}
