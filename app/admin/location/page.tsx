"use client";
import { 
    FileDown, 
    Plus, 
    Clock, 
    Car, 
    CheckCircle2, 
    Banknote, 
    SlidersHorizontal, 
    MoreHorizontal, 
    ChevronLeft, 
    ChevronRight, 
    TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function LocationPage() {
    return (
        <>
 <main className="pb-12 px-12">
        
                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tighter text-slate-800 mb-2">Gestion de réservation</h1>
                            <p className="text-on-surface-variant font-medium">Manage and track all customer vehicle rentals from a central hub.</p>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="secondary" className="px-6 py-3 font-bold rounded-xl flex items-center gap-2">
                                <FileDown className="size-5" />
                                <span>Exporter</span>
                            </Button>
                            <Button className="px-6 py-3 bg-secondary text-white font-bold rounded-xl flex items-center gap-2 shadow-[0_12px_32px_-4px_rgba(126,87,0,0.3)] hover:scale-105 transition-transform">
                                <Plus className="size-5" />
                                <span>Ajouter une réservation</span>
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                                    <Clock className="size-5" />
                                </div>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">En attente</span>
                            </div>
                            <p className="text-3xl font-black mb-1">12</p>
                            <p className="text-sm text-on-surface-variant font-medium">New requests</p>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <Car className="size-5" />
                                </div>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">En cours</span>
                            </div>
                            <p className="text-3xl font-black mb-1">28</p>
                            <p className="text-sm text-on-surface-variant font-medium">Active rentals</p>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                    <CheckCircle2 className="size-5" />
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Terminé</span>
                            </div>
                            <p className="text-3xl font-black mb-1">142</p>
                            <p className="text-sm text-on-surface-variant font-medium">Past month</p>
                        </div>
                        <div className="bg-primary text-white p-6 rounded-xl shadow-xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/10 text-white rounded-lg">
                                    <Banknote className="size-5" />
                                </div>
                            </div>
                            <p className="text-3xl font-black text-on-surface-variant mb-1">42.5k €</p>
                            <p className="text-sm text-slate-400 font-medium">Monthly revenue</p>
                        </div>
                    </div>

                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <TabsList className="bg-surface-container-high p-1 rounded-xl h-auto border-none">
                                <TabsTrigger value="all" className="px-6 py-2 data-active:bg-surface-container-lowest data-active:shadow-sm text-primary font-bold rounded-lg border-none">All</TabsTrigger>
                                <TabsTrigger value="pending" className="px-6 py-2 text-on-surface-variant font-semibold hover:text-primary transition-colors border-none">En attente</TabsTrigger>
                                <TabsTrigger value="ongoing" className="px-6 py-2 text-on-surface-variant font-semibold hover:text-primary transition-colors border-none">En cours</TabsTrigger>
                                <TabsTrigger value="completed" className="px-6 py-2 text-on-surface-variant font-semibold hover:text-primary transition-colors border-none">Terminé</TabsTrigger>
                            </TabsList>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <Input className="bg-white border-outline-variant/20 rounded-lg text-sm px-4 py-2 focus:ring-secondary" type="date" />
                                </div>
                                <Button variant="outline" size="icon" className="p-2 border border-outline-variant/20 rounded-lg hover:bg-white transition-all">
                                    <SlidersHorizontal className="size-5 text-on-surface-variant" />
                                </Button>
                            </div>
                        </div>

                        <TabsContent value="all" className="mt-0">
                            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b border-slate-50 hover:bg-transparent">
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50">Details Reservation</TableHead>
                                            <TableHead className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50">Client</TableHead>
                                            <TableHead className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50">Véhicule</TableHead>
                                            <TableHead className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50">Dates / Durée</TableHead>
                                            <TableHead className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50">Statut</TableHead>
                                            <TableHead className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50 text-right">Montant</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant bg-slate-50/50"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {/* Sample Rows */}
                                        <TableRow className="group">
                                            <TableCell className="px-8 py-6">
                                                <div className="font-bold text-primary">#RES-9402</div>
                                                <div className="text-[10px] text-slate-400 font-medium">ID: 8849-KK</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <img alt="Customer" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKXi9Pf-h5vsiZgiOBkRkOiPUdubhakfBsyNhwfAguh64X7eBr1j8LsNzuBavysUWd5Euk8AUO_cy5VzuegxUqb1eTc0ADhB56UZiUn83kxgIjQUTfGGM2FncMsCy2iUeDTRJkzcKxSpmo4Mtlm4nnhbH423BelRsJwmHx247LP6T0rOYDOjbCeoZazGommbUhW6ckL7CJ6CCoo00SlRTDGourVJZx-LImIMDfRvx4eQDBgkUAdq_ZKOAI1N1PNFSYoHDxU1_dR78a" />
                                                    <div>
                                                        <div className="font-bold text-sm text-primary">Sarah Jenkins</div>
                                                        <div className="text-xs text-slate-500">Premium Member</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-8 rounded bg-slate-100 flex items-center justify-center overflow-hidden">
                                                        <img alt="Porsche 911" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktJTRkHztlQzLsNV_eP8xZ0nQAa-p6pDiZv37JEyZASmYJZZl1ePwJQwB2D0XQOf0Z1dOrD7YXrz5gTQ8Z7AEWNM1mX33bI3vj8HJmKS3V2vlPNh70YINOvmEPsLq0hZRbSIOZdW_dukmiMgCVeyGKcY2LcWnwSu5uxoFxSOFF4DlAz9fnVAHF1dcIVP1j6FpXbt_ySE8jROSjiaXLnEyOHpdu6EZQKWimI2-f_odEyaMEWnxPuACVbIVy7Aar-oEW5jFKBkWcudp" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">Porsche 911 GT3</div>
                                                        <div className="text-xs text-slate-500">Noir Intense</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="text-sm font-semibold">12 Oct — 15 Oct</div>
                                                <div className="text-xs text-slate-400">3 jours</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                                    En attente
                                                </span>
                                            </TableCell>
                                            <TableCell className="px-6 py-6 text-right">
                                                <div className="font-black text-primary">1,450.00 €</div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-right">
                                                <Button variant="ghost" size="icon" className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                    <MoreHorizontal className="size-5" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow className="group">
                                            <TableCell className="px-8 py-6">
                                                <div className="font-bold text-primary">#RES-9388</div>
                                                <div className="text-[10px] text-slate-400 font-medium">ID: 1102-ZX</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <img alt="Customer" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1c2bRppfwmlJdZmeGuRZaaCLbYELAbhHVxWF6_PSb_KSRWvfn6WNRzCqqYZFRQ32_c2f8EX4w1lO4sStC438AUPuS904FS6tpiZ6rOrAz7-CQZXdmTuyVzvLlCBawsGT9N_1pc8NhO93SV_kgFlDtR0oMFGzMGGqhAqJyQ5cqExbv7n5qf3PkoO2fQ8fzxbtbUHrSXEQ5noAPbo65Jb8piPAfe_Ku9592xDj177GogsYfmg6cg3ZFKcmjLCLrXn11wfGvsEcxukPj" />
                                                    <div>
                                                        <div className="font-bold text-sm text-primary">Marc-Antoine Dupont</div>
                                                        <div className="text-xs text-slate-500">Corporate</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-8 rounded bg-slate-100 flex items-center justify-center overflow-hidden">
                                                        <img alt="Mercedes S-Class" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsnWLFEhHctZ9s-26EOgFP8z-7V8Uz4O2ETyDkOuvwV1qX4PTusUxGTtLw5bGd0DmSbOVVS7XtxakMTt-UjQIuA-UhKxCZtQFVcYWwIGJg58Wv-QLZ-p8J00UtuYc1RUYFh1gPbe0x5RlTn51CaH04ZOWNEOazB6X1jy-KDacWF58TvHDp5GwuyfRow4JAdV14gb7_S6EyseDizJPKlVFVf_aRfjcdBSBUTDbzc9YXbhLOdPMp7hkHRRG6J41jRK0e8cBjnROCieq" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">Mercedes S-Class</div>
                                                        <div className="text-xs text-slate-500">Gris Sélénite</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="text-sm font-semibold">10 Oct — 17 Oct</div>
                                                <div className="text-xs text-slate-400">7 jours</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                                    En cours
                                                </span>
                                            </TableCell>
                                            <TableCell className="px-6 py-6 text-right">
                                                <div className="font-black text-primary">2,100.00 €</div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-right">
                                                <Button variant="ghost" size="icon" className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                    <MoreHorizontal className="size-5" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow className="group">
                                            <TableCell className="px-8 py-6">
                                                <div className="font-bold text-primary">#RES-9372</div>
                                                <div className="text-[10px] text-slate-400 font-medium">ID: 4545-PL</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <img alt="Customer" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmqWj-cjT5GUlwJ0Z61bw8ekcdAqSN4vqgvlrOO5lOn0iyTNMD-ulWSdmB5GwLx2qw7PYnAkdBSGsej0TxN9-mYurx6LkvXFatBHyAWNpeVW4GkBqQAa3txvu0kdk_q6dpPnDkTdK3wlhd4_gQ8Xwgbv0FGcloZg5GhDW1WO8hb9iPcJqlcP7Le0yBFv4-Dn1zKNmc7bfxRyLlrincbTKBPiY--PAYnGgCZ911SdcY_QXeLFw_6zptjhejeGs6Qmybu_Au6DqCVlT" />
                                                    <div>
                                                        <div className="font-bold text-sm text-primary">Elena Rossi</div>
                                                        <div className="text-xs text-slate-500">Private</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-8 rounded bg-slate-100 flex items-center justify-center overflow-hidden">
                                                        <img alt="Range Rover" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf-Y_ZrE_lbi7TGqxdjK4HNIK_IDVGspB4VclffLAGe0XJaWl_vqWrr-hDZiD0LVOwDsJ1DpeD7O6xRR3Hj2LNRd_vzlLYaEoGf9ARDlPbLz2mjjDskI_5P0lvF5DoBw4g8PzhOrxKJB_4A48nbGxfRQCVzU4qhDLjyoUbnnvzlUsxRkjuXNwp01DsHjk08eW3kbkxawLyZCVIM55aUJ6inzPWynvbcs2tKqVxZFM6YAeRf0_hqkKij25E8F20PGue14onEUhhOtEQ" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">Range Rover Autobiography</div>
                                                        <div className="text-xs text-slate-500">Blanc Perle</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <div className="text-sm font-semibold">05 Oct — 08 Oct</div>
                                                <div className="text-xs text-slate-400">3 jours</div>
                                            </TableCell>
                                            <TableCell className="px-6 py-6">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-50 text-green-600 border border-green-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                    Terminé
                                                </span>
                                            </TableCell>
                                            <TableCell className="px-6 py-6 text-right">
                                                <div className="font-black text-primary">1,800.00 €</div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-right">
                                                <Button variant="ghost" size="icon" className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                    <MoreHorizontal className="size-5" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <div className="px-8 py-4 bg-slate-50/30 flex items-center justify-between">
                                    <p className="text-xs text-slate-500 font-medium">Affichage de 1-10 sur 182 réservations</p>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="p-2 rounded-lg border border-outline-variant/10 hover:bg-white transition-all disabled:opacity-30">
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <div className="flex items-center gap-1">
                                            <Button size="sm" className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold p-0">1</Button>
                                            <Button variant="ghost" size="sm" className="w-8 h-8 rounded-lg hover:bg-white text-xs font-bold p-0 text-slate-600">2</Button>
                                            <Button variant="ghost" size="sm" className="w-8 h-8 rounded-lg hover:bg-white text-xs font-bold p-0 text-slate-600">3</Button>
                                            <span className="px-2 text-slate-400">...</span>
                                            <Button variant="ghost" size="sm" className="w-8 h-8 rounded-lg hover:bg-white text-xs font-bold p-0 text-slate-600">19</Button>
                                        </div>
                                        <Button variant="outline" size="icon" className="p-2 rounded-lg border border-outline-variant/10 hover:bg-white transition-all">
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Additional TabsContent for Pending/Ongoing/Completed could go here if data was dynamic */}
                    </Tabs>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                            <h3 className="text-xl font-extrabold mb-6">Reservation Velocity</h3>
                            <div className="h-64 flex items-end gap-3">
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[40%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">12</div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[60%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">18</div>
                                </div>
                                <div className="flex-1 bg-secondary rounded-t-lg h-[85%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">24</div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[50%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">15</div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[70%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">21</div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[45%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">14</div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-t-lg h-[90%] relative group">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">27</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 text-[10px] font-black uppercase text-slate-400 tracking-widest px-2">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                        <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">

                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-black italic mb-2">Exclusive Insight</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">You have 12 pending requests from VIP members. Processing these within 30 minutes improves conversion by 45%.</p>
                            </div>
                            <Button className="w-full py-4 bg-white text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all">
                                <span>View VIP Priority</span>
                                <TrendingUp className="size-5" />
                            </Button>
                        </div>
                    </div>
                </div>
          </main>
        </>
    )
}