"use client";

// import { signOut } from "next-auth/react";
import { 
    LogOut, 
    Menu, 
    Search, 
    Bell, 
    Languages, 
    HelpCircle,
    ConciergeBell,
    User,
    LanguagesIcon
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import LanguageUrlHandler from "../language/LanguageUrlHandler";

interface TopbarProps {
    onMenuClick: () => void;
    userName: string;
}

const Topbar = ({ onMenuClick, userName }: TopbarProps) => {
    const { t } = useTranslation('student')

    return (
        <>
            <header className="sticky top-0 w-full z-40 flex justify-between items-center px-4 lg:px-12 py-3 bg-white/80 dark:bg-[#0d1c32]/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm">
                <div className="flex items-center gap-4 lg:gap-0 flex-1 max-w-xl">
                    <button 
                        onClick={onMenuClick}
                        className="lg:hidden p-2 hover:bg-surface-container-low rounded-lg transition-colors"
                    >
                        <Menu className="w-6 h-6 text-slate-600" />
                    </button>
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-12 pr-4 text-sm font-inter focus:ring-2 focus:ring-[#feb300] transition-all" placeholder="Search..." type="text" />
                    </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-6">
                    {/* Utils Group */}
                    <div className="hidden xl:flex items-center gap-2 text-slate-500">
                        <button className="p-2 hover:text-[#feb300] hover:bg-surface-container-low rounded-lg transition-all duration-200"><Bell className="w-5 h-5" /></button>
                        <button className="p-2 hover:text-[#feb300] hover:bg-surface-container-low rounded-lg transition-all duration-200"><LanguagesIcon /></button>
                    </div>

                    <div className="hidden xl:block h-6 w-[1px] bg-outline-variant/30"></div>

                    {/* User Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full border bg-secondary border-transparent hover:border-outline-variant/10 hover:bg-secondary/80 transition-all cursor-pointer group">
                                <div className="hidden sm:flex flex-col items-end">
                                    <p className="text-primary text-[11px] font-black uppercase tracking-tighter leading-none">{userName}</p>
                                    <p className="text-[9px] text-slate-900 font-bold uppercase tracking-widest mt-0.5">Admin</p>
                                </div>
                                <div className="relative">
                                    <img 
                                        alt="Portrait" 
                                        className="w-10 h-10 rounded-full border-2 border-[#feb300]/20 object-cover group-hover:border-secondary transition-colors" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5VmP-1t_dJEGvJQyhOYSoyAiyHo4ckzgdGwFsRmusr3soNVy81R6zyP3jk7VvDn3VtR4OCyyfeT3D8wzUooxy_vIn0UiG8gixg_pfBPriEfjnKXhek4jnBa7fFjDwg6ODfLo4aRXi0d-aRgDOSqrbDsNgphnIOPfOoSOIJfUsUFCUmkqEOzE59a-1fnuRcv5rtJ5VwbhAk92tYNEKGwbMmUx3ivrl9l3IclKlxXduJ2Q4jI_ZzF-D3b21tyGaIn5cIKWynLEPQiHS" 
                                    />
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 mt-2">
                            <DropdownMenuItem className="cursor-pointer">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profil</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-error hover:text-error hover:bg-error/10">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Se déconnecter</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    );
};

export default Topbar;