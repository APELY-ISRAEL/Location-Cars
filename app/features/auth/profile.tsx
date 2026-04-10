"use client";

import React, { useState, useRef } from "react";

import {
    Pencil,
    FileText,
    Download,
    ShieldCheck,
    ArrowRight,
    MoreHorizontal,
    ChevronDown,
    Clock,
    Calendar,
    MapPin,
    CreditCard,
    Lock,
    User,
    Mail,
    Phone,
    Key,
    Plus,
    Trash2,
    CheckCircle2,
    ReceiptText,
    DownloadCloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";


const Profile = () => {
    const [activeTab, setActiveTab] = useState("profil");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const heuresRestantes = 14;

    const tabs = [
        { id: "profil", label: "Profil & Sécurité", icon: <User className="w-4 h-4" /> },
        { id: "documents", label: "Documents", icon: <FileText className="w-4 h-4" /> },
        { id: "reservations", label: "Réservations", icon: <Calendar className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-surface">
            <main className="pt-28 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
                <header className="mb-8">
                    <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-primary mb-2">Espace Personnel</h1>
                    <p className="text-on-surface-variant max-w-2xl">Gérez vos identifiants, votre sécurité et suivez vos locations actives.</p>
                </header>

                {/* ── NAVIGATION (NAV KW STYLE) ── */}
                <nav className="flex items-center gap-1 md:gap-8 border-b border-surface-container mb-12 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 pb-4 px-2 text-sm font-bold transition-all relative whitespace-nowrap group ${
                                activeTab === tab.id ? "text-primary" : "text-outline hover:text-primary"
                            }`}
                        >
                            <span className={`p-1.5 rounded-lg transition-colors ${activeTab === tab.id ? "bg-primary/10" : "bg-transparent group-hover:bg-surface-container"}`}>
                                {tab.icon}
                            </span>
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-t-full shadow-[0_-4px_12px_rgba(var(--secondary-rgb),0.4)]"></div>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="w-full transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    
                    {/* ── VUE 1 : MON PROFIL & SÉCURITÉ ── */}
                    {activeTab === "profil" && (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            
                            {/* BLOC : IDENTITÉ */}
                            <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-ambient border border-outline-variant/10 space-y-10 h-full">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black font-headline text-primary uppercase tracking-tight">Identité</h3>
                                        <p className="text-xs text-outline font-bold uppercase tracking-widest">Coordonnées du conducteur</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                        <User className="w-7 h-7 text-secondary" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Nom complet</Label>
                                        <Input defaultValue="Jean-Sébastien Durand" className="h-12 bg-surface-container-low border-none rounded-xl px-4 font-bold text-primary focus-visible:ring-2 focus-visible:ring-secondary/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">E-mail</Label>
                                        <Input defaultValue="js.durand@premium-travel.com" className="h-12 bg-surface-container-low border-none rounded-xl px-4 font-bold text-primary focus-visible:ring-2 focus-visible:ring-secondary/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Téléphone</Label>
                                        <Input defaultValue="+33 6 12 34 56 78" className="h-12 bg-surface-container-low border-none rounded-xl px-4 font-bold text-primary focus-visible:ring-2 focus-visible:ring-secondary/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Numéro de Permis</Label>
                                        <div className="relative">
                                            <Input defaultValue="FR-920384755102" className="h-12 bg-surface-container-low border-none rounded-xl px-4 font-mono font-bold text-primary focus-visible:ring-2 focus-visible:ring-secondary/20 tracking-widest" />
                                            <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline/40" />
                                        </div>
                                    </div>
                                    <Button className="w-full bg-secondary text-on-secondary-fixed font-black py-7 text-sm rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-secondary/20 mt-4">
                                        Enregistrer les modifications
                                    </Button>
                                </div>
                            </div>

                            {/* BLOC : SÉCURITÉ */}
                            <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-ambient border border-outline-variant/10 space-y-10 h-full">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black font-headline text-primary uppercase tracking-tight">Sécurité</h3>
                                        <p className="text-xs text-outline font-bold uppercase tracking-widest">Gestion des accès</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Key className="w-7 h-7 text-primary" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Ancien mot de passe</Label>
                                        <Input type="password" placeholder="••••••••" className="h-12 bg-surface-container-low border-none rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Nouveau mot de passe</Label>
                                        <Input type="password" placeholder="••••••••" className="h-12 bg-surface-container-low border-none rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black text-outline tracking-widest px-1">Confirmation</Label>
                                        <Input type="password" placeholder="••••••••" className="h-12 bg-surface-container-low border-none rounded-xl px-4" />
                                    </div>
                                    <Button className="w-full bg-primary text-white font-black py-7 text-sm rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20 mt-4">
                                        Sauvegarder les modifications
                                    </Button>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* VUE SÉCURITÉ SUPPRIMÉE (FUSIONNÉE CI-DESSUS) */}

                    {/* ── VUE 3 : DOCUMENTS ── */}
                    {activeTab === "documents" && (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 space-y-8">
                            <div className="bg-surface-container-lowest rounded-[2.5rem] shadow-ambient border border-outline-variant/10 overflow-hidden">
                                <div className="p-10 border-b border-surface-container bg-surface-container-low/30 flex justify-between items-center flex-wrap gap-6">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black font-headline text-primary uppercase tracking-tight">Mes Documents</h3>
                                        <p className="text-xs text-outline font-bold uppercase tracking-widest">Registre contractuel et pièces d'identité</p>
                                    </div>
                                    <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        accept="application/pdf"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                console.log("Fichier sélectionné :", file.name);
                                                // Ici on pourrait ajouter une logique de toast ou d'upload
                                            }
                                        }}
                                    />
                                    <Button 
                                        onClick={() => fileInputRef.current?.click()}
                                        className="bg-secondary text-on-secondary-fixed font-black px-8 py-6 text-sm rounded-2xl flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
                                    >
                                        <Plus className="w-5 h-5" />
                                        Importer un document
                                    </Button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-surface-container-low/50 text-[10px] uppercase tracking-[0.2em] font-black text-outline">
                                            <tr>
                                                <th className="px-10 py-6">Nom du fichier</th>
                                                <th className="px-10 py-6">Type</th>
                                                <th className="px-10 py-6">Date d'import</th>
                                                <th className="px-10 py-6">Taille</th>
                                                <th className="px-10 py-6 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-outline-variant/10">
                                            {[
                                                { name: "Contrat de location #8829", type: "PDF", date: "12 Septembre 2024", size: "1.2 MB" },
                                                { name: "Assurance Complète CP-2024", type: "PDF", date: "10 Août 2024", size: "0.8 MB" },
                                                { name: "Permis de conduire - Recto", type: "Image", date: "01 Janvier 2024", size: "2.5 MB" },
                                                { name: "Justificatif de domicile", type: "PDF", date: "15 Janvier 2024", size: "1.5 MB" }
                                            ].map((doc, i) => (
                                                <tr key={i} className="hover:bg-surface-container-low/50 transition-colors group">
                                                    <td className="px-10 py-8">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                                                                <FileText className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                                                            </div>
                                                            <span className="text-lg font-bold text-primary underline decoration-outline-variant/30">{doc.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8 text-sm font-bold text-outline uppercase tracking-wider">{doc.type}</td>
                                                    <td className="px-10 py-8 text-sm font-medium text-primary">{doc.date}</td>
                                                    <td className="px-10 py-8 text-sm font-medium text-outline">{doc.size}</td>
                                                    <td className="px-10 py-8 text-right">
                                                        <div className="flex items-center justify-end gap-3">
                                                            <button className="p-3 rounded-xl bg-surface-container hover:bg-secondary/10 hover:text-secondary transition-all shadow-sm">
                                                                <Download className="w-5 h-5" />
                                                            </button>
                                                            <button className="p-3 rounded-xl bg-surface-container hover:bg-red-500/10 hover:text-red-500 transition-all shadow-sm">
                                                                <Trash2 className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── VUE 4 : MES RÉSERVATIONS ── */}
                    {activeTab === "reservations" && (
                        <div className="space-y-12 w-full">
                            
                            {/* LOCATION ACTIVE (FULL-WIDTH BANNER) */}
                            <div className="relative group overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary rounded-2xl p-4 text-white shadow-xl border border-white/5 w-full flex flex-col md:flex-row items-center gap-6 min-h-[140px]">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[40px] pointer-events-none"></div>
                                
                                <div className="flex-[1.8] z-10 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="px-1.5 py-0.5 bg-secondary text-on-secondary-fixed text-[8px] font-black rounded-sm uppercase tracking-widest">
                                            Live
                                        </span>
                                        <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-sm border border-white/5">
                                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-[7px] font-bold uppercase tracking-wider text-white/40">Suivi actif</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-0.5">
                                        <h3 className="text-xl font-black font-headline tracking-tighter leading-none group-hover:text-secondary transition-colors">Porsche 911 GT3 RS</h3>
                                        <p className="text-white/30 text-[9px] font-medium uppercase tracking-widest italic">"Performance pure"</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
                                        <div className="space-y-0">
                                            <p className="text-[7px] uppercase font-black text-white/30 tracking-widest flex items-center gap-1">
                                                <Clock className="w-2 h-2 text-secondary" /> Temps
                                            </p>
                                            <p className="text-base font-black text-secondary">{heuresRestantes}h <span className="text-[9px] text-white/40">rest.</span></p>
                                        </div>
                                        <div className="space-y-0">
                                            <p className="text-[7px] uppercase font-black text-white/30 tracking-widest flex items-center gap-1">
                                                <MapPin className="w-2 h-2 text-white/40" /> Retour
                                            </p>
                                            <p className="text-xs font-bold truncate">Nice Terminal 2</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-0.5">
                                        <Button className="bg-white text-primary hover:bg-secondary hover:text-on-secondary-fixed transition-all font-black px-4 h-7 text-[9px] rounded-lg shadow-lg">
                                            Prolonger
                                        </Button>
                                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 font-bold px-4 h-7 text-[9px] rounded-lg">
                                            Aide
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative flex-1 w-full md:w-auto h-24 md:h-28 z-10">
                                    <div className="absolute inset-0 bg-secondary/10 blur-2xl opacity-10"></div>
                                    <img 
                                        alt="Current Car" 
                                        className="relative w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] scale-110 md:scale-125 group-hover:scale-135 transition-all duration-700 pointer-events-none" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJCy0KcbsdyxHefP2jUCtCKoOxwYeu8V8xEwFlELgThRi0Dxu6Z-mVlAbCCk5RSpK-Z-tPG5NO6vGmldLmETRZm1DItncecRTW0B6r6KOGH-pyzH1xLr0mM9Jp4RKzDG7Mrr1ogpkD6vD0xFJUH--8oj1CM1YLNxEEmVCi3jPymSz2bq2Z72bnEpF35zfITQVAKvsbCPBOiwCAkU94vz6cCrwv33ULqqhCt0bNk4U_3kZGdOC6KbEv6wlRuuAdDr8-J90oik_XXJ69" 
                                    />
                                </div>
                            </div>

                            {/* HISTORIQUE (BAS) */}
                            <div className="bg-surface-container-lowest rounded-[2.5rem] shadow-ambient border border-outline-variant/10 overflow-hidden">
                                <div className="p-10 border-b border-surface-container bg-surface-container-low/30 flex justify-between items-center">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black font-headline text-primary tracking-tight">Historique des Locations</h3>
                                        <p className="text-[10px] text-outline font-bold uppercase tracking-widest">Registre complet de vos trajets premium</p>
                                    </div>
                                    <button className="px-6 py-3 bg-surface-container hover:bg-surface-container-high text-xs font-black text-primary transition-all rounded-xl border border-outline-variant/10">
                                        Exporter au format PDF
                                    </button>
                                </div>
                                <div className="overflow-x-auto min-w-full">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-surface-container-low/50 text-[10px] uppercase tracking-[0.2em] font-black text-outline">
                                            <tr>
                                                <th className="px-10 py-6">Véhicule</th>
                                                <th className="px-10 py-6">Période du contrat</th>
                                                <th className="px-10 py-6">Total HT</th>
                                                <th className="px-10 py-6">Statut de la session</th>
                                                <th className="px-10 py-6 text-right">Détails</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-surface-container">
                                            {[
                                                { id: "#44921", car: "Ferrari F8 Tributo", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHfkX6sKOxrxFdd7c0hcKj1kY3WauWo1S3Vs5Is7oAXfMTPwYXmHi6rLCYCQgZ0nn4M_whsaJjaed2y-oklWSH4ujAByctEGdX2CpfMM7m5z02mcYMJyhl9xwRBZqgJPw3gLH_zKlTUBs561ue9LNPxQMurmR3gYPpcryJ-j1awkFs0Avu8dr12SxPbSaGGlCEGvooitOxoKf9W00KlaBVbFVeyar7RGMPAsKo2Ftb7Co2kpDA-N3ZOTrIyFwRjOpRCj2bSz_BPbng", dates: "12 - 15 Septembre 2024", total: "2,450.00 €", status: "Terminée" },
                                                { id: "#44810", car: "Lamborghini Urus", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBToAHqauABDpZxCFBhVLBd1syGy2PI-3NOWmV80bA66qOUXggz7o-AoO4DL8sMacWoSHmcfeqWhGwatpRNyRCX2xKaS7Z02sY_IpUlP41Ptyxz_9BQfgXTcMLsyMGrWsrJmyBXvF_C2fsS3GmjcCOS1LG8UGjEN74M0pzDrxEPP7N3xSGBLZ6Hx9scbnQaAGd18UZwkTrz4oGmCjoPWGqYhMY83gkNCDkaVuMTxKAyFitYqyLSSaurAgblC-FKpJrC2p46K4SgJI04", dates: "01 - 04 Août 2024", total: "3,200.00 €", status: "Terminée" },
                                                { id: "#44755", car: "Mercedes G63 AMG", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOxJ_iTAHEwp2bdhMQaKgoWZin_Z2-mWAZqxaPBAWAz9eyCEPzt8YTbrMR8rWl2lH1jzaq_2Sq3OvhOjy7AufWTb8aDSZp8h5Lz6sSU6fa0LrDe0-i5hNRR2C15WCboe6CYka4buAhbYd0JWgJwvhcsBlnNNM7qaK2oJ39c07t8nFswBDGVYl0kxNjNE6SQ7Mh-KAmlK6O8Jurv7-DHFbRoLyAIuWH81gfTxxXY_z3G5Eforu1c87PvrKIQzIPpzZbvKzBU-1Ef66k", dates: "15 - 18 Novembre 2024", total: "1,950.00 €", status: "Confirmée" }
                                            ].map((row) => (
                                                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                                                    <td className="px-10 py-8">
                                                        <div className="flex items-center gap-6">
                                                            <div className="w-16 h-16 bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm group-hover:scale-110 transition-transform">
                                                                <img alt={row.car} className="w-full h-full object-cover" src={row.img} />
                                                            </div>
                                                            <div>
                                                                <p className="font-black text-lg text-primary">{row.car}</p>
                                                                <p className="text-[11px] text-outline font-black uppercase tracking-widest">{row.id}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <p className="text-base font-bold text-primary">{row.dates}</p>
                                                        <p className="text-[10px] text-outline uppercase font-black tracking-widest">SÉJOUR PREMIUM</p>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <p className="text-xl font-black text-primary font-headline">{row.total}</p>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${
                                                            row.status === "Terminée" 
                                                            ? "bg-green-500/10 text-green-600 border-green-500/20" 
                                                            : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                                        }`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-8 text-right">
                                                        <Sheet>
                                                            <SheetTrigger render={
                                                                <button className="p-3 rounded-2xl bg-surface-container hover:bg-primary hover:text-white transition-all shadow-sm">
                                                                    <ArrowRight className="w-5 h-5" />
                                                                </button>
                                                            } />
                                                            <SheetContent className="w-full sm:max-w-xl bg-surface-container-lowest border-l border-outline-variant/10 p-0 overflow-y-auto">
                                                                {/* HEADER AVEC IMAGE */}
                                                                <div className="relative h-64 bg-primary overflow-hidden">
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10"></div>
                                                                    <img 
                                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJCy0KcbsdyxHefP2jUCtCKoOxwYeu8V8xEwFlELgThRi0Dxu6Z-mVlAbCCk5RSpK-Z-tPG5NO6vGmldLmETRZm1DItncecRTW0B6r6KOGH-pyzH1xLr0mM9Jp4RKzDG7Mrr1ogpkD6vD0xFJUH--8oj1CM1YLNxEEmVCi3jPymSz2bq2Z72bnEpF35zfITQVAKvsbCPBOiwCAkU94vz6cCrwv33ULqqhCt0bNk4U_3kZGdOC6KbEv6wlRuuAdDr8-J90oik_XXJ69" 
                                                                        className="w-full h-full object-cover opacity-60 scale-125 translate-y-4"
                                                                        alt="Vehicule"
                                                                    />
                                                                    <div className="absolute bottom-8 left-8 z-20">
                                                                        <span className="px-3 py-1 bg-secondary text-on-secondary-fixed text-[10px] font-black rounded-lg uppercase tracking-widest mb-3 inline-block">Commande {row.id}</span>
                                                                        <h4 className="text-3xl font-black text-white font-headline leading-none">{row.car}</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="p-10 space-y-12">
                                                                    {/* TIMELINE SECTION */}
                                                                    <div className="space-y-6">
                                                                        <h5 className="text-[10px] uppercase font-black text-outline tracking-[0.2em] flex items-center gap-2">
                                                                            <Clock className="w-4 h-4" /> Détails de la location
                                                                        </h5>
                                                                        <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
                                                                            <div className="relative">
                                                                                <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center border-4 border-surface-container-lowest">
                                                                                    <div className="w-1.5 h-1.5 bg-on-secondary-fixed rounded-full"></div>
                                                                                </div>
                                                                                <div className="space-y-1">
                                                                                    <p className="text-sm font-black text-primary">Départ - 12 Septembre, 09:00</p>
                                                                                    <p className="text-xs text-outline font-bold">Aéroport Nice Côte d'Azur, Terminal 2</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="relative">
                                                                                <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-outline-variant flex items-center justify-center border-4 border-surface-container-lowest">
                                                                                    <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
                                                                                </div>
                                                                                <div className="space-y-1">
                                                                                    <p className="text-sm font-black text-primary">Retour - 15 Septembre, 18:00</p>
                                                                                    <p className="text-xs text-outline font-bold">Aéroport Nice Côte d'Azur, Terminal 2</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* FINANCIAL SUMMARY */}
                                                                    <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">
                                                                        <h5 className="text-[10px] uppercase font-black text-outline tracking-[0.2em]">Récapitulatif financier</h5>
                                                                        <div className="space-y-4">
                                                                            <div className="flex justify-between items-center text-sm">
                                                                                <span className="font-medium text-outline">Prix journalier (3j)</span>
                                                                                <span className="font-bold text-primary">2 100,00 €</span>
                                                                            </div>
                                                                            <div className="flex justify-between items-center text-sm">
                                                                                <span className="font-medium text-outline">Assurance Premium</span>
                                                                                <span className="font-bold text-primary">350,00 €</span>
                                                                            </div>
                                                                            <div className="flex justify-between items-center text-sm">
                                                                                <span className="font-medium text-outline">TVA (20%)</span>
                                                                                <span className="font-bold text-primary">490,00 €</span>
                                                                            </div>
                                                                            <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                                                                                <span className="text-base font-black text-primary uppercase">Total TTC</span>
                                                                                <span className="text-2xl font-black text-secondary">{row.total}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* ACTIONS */}
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <Button className="h-16 rounded-2xl bg-primary hover:scale-[1.02] transition-transform font-black text-xs uppercase tracking-widest gap-2">
                                                                            <ReceiptText className="w-4 h-4" />
                                                                            Facture
                                                                        </Button>
                                                                        <Button variant="outline" className="h-16 rounded-2xl border-outline-variant/30 hover:bg-surface-container-low font-black text-xs uppercase tracking-widest gap-2">
                                                                            <DownloadCloud className="w-4 h-4" />
                                                                            Contrat
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </SheetContent>
                                                        </Sheet>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
};

export default Profile;