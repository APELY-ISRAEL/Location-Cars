"use client";

// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  BookOpen, 
  Home,   
  Users,
  User
} from "lucide-react";

import { useTranslation } from "react-i18next";
import I18nProvider from "../locales/i18nprovider";
import LanguageUrlHandler from "@/components/language/LanguageUrlHandler";

import Topbar from "@/components/admin/topbar";
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation('student')

//   useEffect(() => {
//     if (status === "loading") return;
    
//     if (!session) {
//       router.push("/login");
//       return;
//     }

//     if (session.user.role !== "ADMIN") {
//       router.push("/dashboard");
//       return;
  // const status = "authenticated"; // Mock status for development


//   if (!session) {
//     return null;
//   }

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
     { name: "Gestion de document", href: "/admin/document", icon: BookOpen },
    { name: "Gestion de voiture", href: "/admin/voiture", icon: BookOpen },
     { name:"Gestion de categorie", href: "/admin/categorie", icon: Users },
    { name: "Gestion de location", href: "/admin/location", icon: BookOpen },
    { name: "Gestion d'utilisateur", href: "/admin/profile", icon: User },
    { name: "Setting", href: "/admin/setting", icon: User }
  ];


  return (
    <I18nProvider>
    <LanguageUrlHandler />
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        navigation={navigation}
        userName="Marcus Vane"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Contenu principal */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <Topbar 
          onMenuClick={() => setSidebarOpen(true)} 
          userName="Marcus Vane"
        />

        <div className="flex-1 relative">
          <main className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  </I18nProvider>
  );
}