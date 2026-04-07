"use client";

import {
    IoLocationOutline,
    IoCalendarOutline,
    IoCarSportOutline,
    IoSearchOutline,
    IoArrowForwardOutline
} from "react-icons/io5";
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
       <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-secondary-container blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-block py-1 px-4 rounded-full bg-secondary-container/10 text-secondary-container text-sm font-semibold tracking-widest mb-6 uppercase">Expérience Premium</span>
<h1 className="text-6xl md:text-8xl font-headline font-extrabold text-white leading-[1.05] tracking-tighter mb-8">
                    Louez <span className="text-secondary-container">l'excellence</span> avec Cyris Cars
                </h1>
<p className="text-lg text-on-primary-container max-w-xl mb-10 leading-relaxed font-light">
                    Redéfinissez vos trajets avec notre sélection exclusive de véhicules de prestige. Une conduite fluide, un service impeccable, une émotion pure à chaque kilomètre.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary-container text-on-secondary-fixed px-10 py-4 rounded-xl font-bold text-lg amber-glow transition-all flex items-center group">
                        Réserver maintenant
                        <IoArrowForwardOutline className="ml-2 group-hover:translate-x-1 transition-transform" />
</button>
<button className="border border-outline-variant/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                        Voir le catalogue
                    </button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="relative z-20 transform translate-x-12 scale-110">
<img className="rounded-2xl shadow-2xl" data-alt="Side profile of a sleek black premium sports car with golden ambient light reflections on its polished surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIX3iBeNVje828nQzKzXd06kC_AztkKtgdKM_qtfc6YVYJYklwyN29ZIpXcftfjdq5qkWP4pm0QIelcEC9EJfVoi-QexEVKW1zp7IZFnLaxp3ne9qGF31ukVwkiQ73ByIJF3xxmBSI4DsP3_Bla-hQKMQD6VdIDpDezWEMsEYCO521JVlaN9ONpAMj2Plb-DI4ZaUi9efQSg7bzS_YdLUIW9RGVSS1RLsbZqWqr76D842DtYzVzsamcpnaCDVNs2ngjq8xuuhd0ubA"/>
</div>

<div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-secondary-container/20 rounded-full -z-10"></div>
</div>
</div>
</section>

        <section className="relative z-30 mt-8 px-8 max-w-6xl mx-auto">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl car-card-shadow border border-outline-variant/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                            <IoLocationOutline className="text-secondary-container mr-2 text-xl" />
                            Emplacement
                        </label>
                        <Select defaultValue="Paris, France">
                            <SelectTrigger className="w-full bg-surface-container-highest border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary-container text-on-surface h-auto">
                                <SelectValue placeholder="Sélectionner un emplacement" />
                            </SelectTrigger>
                            <SelectContent className="bg-surface-container-highest border-outline-variant/10 text-on-surface">
                                <SelectItem value="Paris, France">Paris, France</SelectItem>
                                <SelectItem value="Lyon, France">Lyon, France</SelectItem>
                                <SelectItem value="Nice, France">Nice, France</SelectItem>
                                <SelectItem value="Monaco">Monaco</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                            <IoCalendarOutline className="text-secondary-container mr-2 text-xl" />
                            Dates
                        </label>
                        <Input className="w-full bg-surface-container-highest border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary-container text-on-surface" type="date" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                            <IoCarSportOutline className="text-secondary-container mr-2 text-xl" />
                            Type de voiture
                        </label>
                        <Select defaultValue="Luxe & Prestige">
                            <SelectTrigger className="w-full bg-surface-container-highest border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary-container text-on-surface h-auto">
                                <SelectValue placeholder="Type de voiture" />
                            </SelectTrigger>
                            <SelectContent className="bg-surface-container-highest border-outline-variant/10 text-on-surface">
                                <SelectItem value="Luxe & Prestige">Luxe & Prestige</SelectItem>
                                <SelectItem value="SUV Familial">SUV Familial</SelectItem>
                                <SelectItem value="Urbaine Compacte">Urbaine Compacte</SelectItem>
                                <SelectItem value="Électrique">Électrique</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <button className="w-full bg-primary-container text-white py-4 rounded-lg font-bold hover:bg-black transition-colors flex items-center justify-center">
                        <IoSearchOutline className="mr-2 text-xl" />
                        Vérifier
                    </button>
                </div>
            </div>
        </section>

        <Categorie/>
        </>
    );
}
export default HomeLanding;