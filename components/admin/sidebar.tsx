"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
    X, 
    Shield, 
    LayoutDashboard, 
    Car, 
    Calendar, 
    Users as UsersIcon, 
    BarChart3, 
    Settings,
    ConciergeBell
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface NavigationItem {
    name: string;
    href: string;
    icon: LucideIcon;
}

interface SidebarProps {
    navigation: NavigationItem[];
    userName: string;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ navigation, userName, sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const pathname = usePathname();
    const { t } = useTranslation('student')
    return (
        <>
            {/* Mobile Backdrop */}
            <div 
                className={cn(
                    "fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
                    sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar container */}
            <aside className={cn(
                "fixed left-0 top-0 h-full w-72 z-50 bg-[#0d1c32] dark:bg-black flex flex-col py-10 shadow-[12px_0_32px_-4px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Mobile Close Button */}
                <button 
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden absolute top-6 right-6 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                    <X className="w-6 h-6" />
                </button>
              
                {/* Brand Logo Section */}
                <div className="px-8 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <span className="text-xl font-black italic tracking-tighter text-white block leading-none">CYRIS</span>
                            <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-bold">Admin Panel</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={cn(
                                    "flex items-center py-3.5 px-6 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                                    isActive 
                                        ? "bg-secondary text-primary shadow-lg shadow-secondary/10" 
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <Icon className={cn(
                                    "w-5 h-5 mr-4 transition-transform group-hover:scale-110",
                                    isActive ? "text-primary" : "text-slate-500 group-hover:text-secondary"
                                )} />
                                <span className="font-plus-jakarta-sans font-bold tracking-tight text-sm">{item.name}</span>
                                
                                {isActive && (
                                    <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

            </aside>
        </>
    );
};

export default Sidebar;