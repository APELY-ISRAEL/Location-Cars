"use client";

import { Gauge, ShieldCheck, Zap, Diamond, Leaf, Headset, MapPin } from "lucide-react";

const Apropos = () => {
    return (
        <>
            <main>

                <section className="relative px-8 py-24 md:py-20 max-w-7xl mx-auto overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="z-10">
                            <span className="inline-block text-secondary font-headline font-bold tracking-[0.2em] mb-6 text-sm uppercase">Depuis 2012</span>
                            <h1 className="font-headline text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-8 text-primary">
                                L'Art de la <br /> <span className="text-secondary italic">Velocity.</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-10">
                                Cyris Cars n'est pas qu'une agence de location. C'est une promesse d'excellence, une expérience cinématographique sur chaque kilomètre parcouru.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                            <div className="car-mask bg-primary-container h-[500px] w-full overflow-hidden">
                                <img alt="Luxury car front profile" className="w-full h-full object-cover opacity-80" data-alt="Close-up of a sleek black luxury performance car in a dark studio setting with cinematic rim lighting on its curves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIwW2QnF7wb26Hwvg1VlHTxjoS-MjHSEz4CnFicNnpjM96JbDciaDsN_clNjRH8MapgWNmzY57Q4BWjjOjIW2tKDXpM43FjH5a0jJCsSYW6lGXhq6qXMk9QgvByZLXB5JckWMAVQCivW72qFHBduiNhhVa9UB46fePIzgsw1cQMYwaD2akJp7qtFMY9jp-qJ-UZ_UrTRyyRT4VtGKlJ75Anp2ovmEEFxCTStvzIYTy3Mm7Us3bMMj_ojl86OY9Hw27zi1M7PLqANrU" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs">
                                <p className="font-headline font-bold text-2xl text-primary">Cinematic Velocity</p>
                                <p className="text-sm text-on-surface-variant mt-2">Notre philosophie de mouvement, d'esthétique et de puissance pure.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-container-low py-30 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-24">
                            <div className="lg:w-1/3">
                                <h2 className="font-headline text-4xl font-bold tracking-tight mb-8">Notre Mission</h2>
                                <div className="w-20 h-1 bg-secondary mb-8"></div>
                                <p className="text-on-surface-variant leading-relaxed italic text-xl">
                                    "Redéfinir le voyage en transformant chaque trajet en une séquence mémorable de luxe et de performance."
                                </p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h3 className="font-headline text-2xl font-bold">Une Histoire de Passion</h3>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Fondée par des passionnés d'automobile et de design, Cyris Cars a vu le jour avec une vision simple : combler le fossé entre la location utilitaire et l'expérience automobile de prestige.
                                    </p>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Ce qui a commencé avec une flotte de trois voitures de sport est devenu aujourd'hui une référence européenne, reconnue pour son exigence esthétique et technique.
                                    </p>
                                </div>
                                <div className="bg-surface-container-lowest p-12 rounded-xl relative overflow-hidden group">
                                    <div className="absolute -right-8 -bottom-8 text-surface-variant/20 scale-150 group-hover:text-secondary/10 transition-colors duration-500">
                                        <Gauge size={160} strokeWidth={1} />
                                    </div>
                                    <h3 className="font-headline text-5xl font-black text-primary mb-2">500+</h3>
                                    <p className="font-headline font-bold text-secondary tracking-widest text-sm uppercase mb-6">Véhicules d'exception</p>
                                    <p className="text-on-surface-variant text-sm">Une sélection rigoureuse des modèles les plus emblématiques de l'industrie automobile mondiale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-28 px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-headline text-5xl font-bold mb-4">Nos Valeurs Fondamentales</h2>
                        <p className="text-on-surface-variant">Les piliers qui soutiennent chaque interaction chez Cyris Cars.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-surface-container-lowest shadow-2xl p-10 rounded-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-transparent hover:border-secondary">
                            <div className="bg-primary-container w-16 h-16 rounded-xl flex items-center justify-center mb-8">
                                <ShieldCheck className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-4">Confiance</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Transparence totale sur nos tarifs et l'état de nos véhicules. Votre sérénité est notre priorité absolue, de la réservation à la restitution.
                            </p>
                        </div>

                        <div className="bg-surface-container-lowest shadow-2xl p-10 rounded-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-transparent hover:border-secondary">
                            <div className="bg-primary-container w-16 h-16 rounded-xl flex items-center justify-center mb-8">
                                <Zap className="text-secondary w-8 h-8" fill="currentColor" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-4">Vitesse</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Pas seulement sur la route. Un processus de réservation digitalisé ultra-rapide et un service client réactif en moins de 15 minutes.
                            </p>
                        </div>

                        <div className="bg-surface-container-lowest shadow-2xl p-10 rounded-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-transparent hover:border-secondary">
                            <div className="bg-primary-container w-16 h-16 rounded-xl flex items-center justify-center mb-8">
                                <Diamond className="text-secondary w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-4">Qualité</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Chaque véhicule subit un contrôle technique et esthétique approfondi avant chaque location. Le luxe ne souffre aucune imperfection.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative bg-primary py-32 px-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img alt="Blurred city night lights" className="w-full h-full object-cover" data-alt="Abstract bokeh of golden city lights and car taillights at night, moody cinematic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqjZMQAo_dsW2q6zd1CQNlGK1nmfciTDmfzgrArgA_7SjEvOoQh4yhPwH_4OdWXMkyuAvS69ighOYl27Pqdc2fH3inuK2p4l73Z7vXWHjxQV-T7NQoC3akRrZyy_9dWWQscK--dOUaVN8pktT3-CxiPfKnu6mDRW0gxpOHoZtw9OBf37SzgDgypW-W18YSYH2WMMXdfnrPeecSo81ZzlwfK5n3edzFiGI5xW7z61_nCyxlllV9YNUCXYRsG7T070NuZKRh-cemq6SX" />
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Notre Engagement</h2>
                        <p className="text-white/80 text-xl leading-relaxed mb-12">
                            Nous nous engageons à maintenir une empreinte carbone responsable en renouvelant notre flotte avec les dernières technologies hybrides et électriques haute performance.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12">
                            <div className="flex items-center gap-4 text-white">
                                <Leaf className="text-secondary w-10 h-10" />
                                <span className="font-bold tracking-tight">Flotte Eco-Prestige</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <Headset className="text-secondary w-10 h-10" />
                                <span className="font-bold tracking-tight">Support 24/7 Premium</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <MapPin className="text-secondary w-10 h-10" />
                                <span className="font-bold tracking-tight">Livraison Partout</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Apropos;