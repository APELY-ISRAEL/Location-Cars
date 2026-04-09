
import "../globals.css";
import { Metadata } from "next";
import {
  generateMetadata as generateMetadataUtil,
  getLanguageFromSearchParams,
} from "@/lib/metadata";
import { ReactNode } from "react";
import I18nProvider from "../locales/i18nprovider";
import Navbar from "../features/home/components/navbar";
import Footer from "../features/home/components/footer";


interface LayoutProps {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  searchParams,
}: LayoutProps): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(
    new URLSearchParams(searchParams as Record<string, string>)
  );

  return generateMetadataUtil({
    title: lang === "fr" ? "Accueil" : "Home",
    description:
      lang === "fr"
        ? "Cyris Cars est une plateforme de location de voiture"
        : "Cyris Cars is a platform for the formation of real estate agents",
    path: "",
    currentLang: lang,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className={`flex min-h-screen flex-col `}>
      <I18nProvider>
       <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </I18nProvider>
    </section>
  );
}