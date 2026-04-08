"use client";

import { MapPin, Calendar, Car, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Categorie from "./categorie";

const HomeLanding = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center pt-20 pb-26 overflow-hidden hero-gradient">

                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-secondary-container blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start">
                    {/* Block 1: Titre et Paragraphe */}
                    <div className="lg:col-span-7 order-1">
                        <span className="mt-2 inline-block py-1 px-4 rounded-full bg-secondary-container/10 text-secondary-container text-sm font-semibold tracking-widest mb-6 uppercase">Expérience Premium</span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white leading-[1.05] tracking-tighter mb-8 shadow-sm">
                            Louez <span className="text-secondary-container">l'excellence</span> avec Cyris Cars
                        </h1>
                        <p className="text-base md:text-lg text-on-primary-container max-w-xl mb leading-relaxed font-light">
                            Redéfinissez vos trajets avec notre sélection exclusive de véhicules de prestige. Une conduite fluide, un service impeccable, une émotion pure à chaque kilomètre.
                        </p>
                    </div>

                    {/* Block 2: Image (Entre le texte et les boutons sur mobile) */}
                    <div className="lg:col-span-4 lg:row-span-2 order-2 lg:order-2 relative mt-6 mb-10 lg:mt-0 lg:mb-0 self-center">
                        {/* Lueur d'ambiance pour mobile */}
                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-secondary-container/15 blur-[60px] rounded-full lg:hidden"></div>
                        
                        <div className="relative z-20 transform lg:translate-x-0 transition-premium">
                            <img 
                                className="rounded-2xl shadow-[0_22px_70px_4px_rgba(0,0,0,0.56)] w-full border border-white/5" 
                                data-alt="Side profile of a sleek black premium sports car with golden ambient light reflections on its polished surface" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIX3iBeNVje828nQzKzXd06kC_AztkKtgdKM_qtfc6YVYJYklwyN29ZIpXcftfjdq5qkWP4pm0QIelcEC9EJfVoi-QexEVKW1zp7IZFnLaxp3ne9qGF31ukVwkiQ73ByIJF3xxmBSI4DsP3_Bla-hQKMQD6VdIDpDezWEMsEYCO521JVlaN9ONpAMj2Plb-DI4ZaUi9efQSg7bzS_YdLUIW9RGVSS1RLsbZqWqr76D842DtYzVzsamcpnaCDVNs2ngjq8xuuhd0ubA" 
                            />
                        </div>

                        <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-secondary-container/20 rounded-full -z-10 hidden lg:block"></div>
                    </div>

                    {/* Block 3: Boutons d'action */}
                    <div className="lg:col-span-7 order-3 lg:order-3 mt-8 lg:mt-0">
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4">
                            <button className="bg-secondary-container text-on-secondary-fixed px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg amber-glow transition-all flex items-center justify-center group whitespace-nowrap">
                                Réserver
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform sm:block hidden" />
                            </button>
                            <button className="border border-outline-variant/30 text-white px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-white/5 transition-all whitespace-nowrap">
                                Catalogue
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-30 -mt-20 px-8 max-w-7xl mx-auto">
                <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] shadow-premium border border-outline-variant/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant flex items-center opacity-70 mb-2 px-1">
                                <MapPin className="text-secondary mr-2" size={16} />
                                Emplacement
                            </label>
                            <Select defaultValue="Paris, France">
                                <SelectTrigger className="w-full bg-surface-container-highest/40 border-none rounded-xl py-0 px-5 focus:ring-2 focus:ring-secondary text-on-surface h-[56px] font-medium transition-all">
                                    <SelectValue placeholder="Sélectionner un emplacement" />
                                </SelectTrigger>
                                <SelectContent className="bg-surface-container-highest border-outline-variant/10 text-on-surface rounded-xl">
                                    <SelectItem value="Paris, France">Paris, France</SelectItem>
                                    <SelectItem value="Lyon, France">Lyon, France</SelectItem>
                                    <SelectItem value="Nice, France">Nice, France</SelectItem>
                                    <SelectItem value="Monaco">Monaco</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant flex items-center opacity-70 mb-2 px-1">
                                <Calendar className="text-secondary mr-2" size={16} />
                                Dates
                            </label>
                            <Input className="w-full bg-surface-container-highest/40 border-none rounded-xl px-5 focus:ring-2 focus:ring-secondary text-on-surface h-[56px] font-medium transition-all" type="date" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant flex items-center opacity-70 mb-2 px-1">
                                <Car className="text-secondary mr-2" size={16} />
                                Type de voiture
                            </label>
                            <Select defaultValue="Luxe & Prestige">
                                <SelectTrigger className="w-full bg-surface-container-highest/40 border-none rounded-xl py-0 px-5 focus:ring-2 focus:ring-secondary text-on-surface h-[56px] font-medium transition-all">
                                    <SelectValue placeholder="Type de voiture" />
                                </SelectTrigger>
                                <SelectContent className="bg-surface-container-highest border-outline-variant/10 text-on-surface rounded-xl">
                                    <SelectItem value="Luxe & Prestige">Luxe & Prestige</SelectItem>
                                    <SelectItem value="SUV Familial">SUV Familial</SelectItem>
                                    <SelectItem value="Urbaine Compacte">Urbaine Compacte</SelectItem>
                                    <SelectItem value="Électrique">Électrique</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <button className="w-full bg-primary-container text-white h-[56px] rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/5">
                            <Search size={20} />
                            Vérifier
                        </button>
                    </div>
                </div>
            </section>

            <Categorie />
        </>
    );
}
export default HomeLanding;