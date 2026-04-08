import { Settings, User, Zap, CheckCircle, Star, Truck, ShieldCheck, MapPin } from "lucide-react";
const Categorie = () => {
    return (
        <>

            <section className="py-24 max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-end mb-12">
                        <div>
                        <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-2">Nos Catégories</h2>
                        <div className="h-1 w-20 bg-secondary-container rounded-full"></div>
                    </div>
                    <p className="text-on-surface-variant max-w-xs text-right hidden md:block">Trouvez le véhicule parfait adapté à votre destination et votre style de vie.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="group relative overflow-hidden rounded-3xl h-[350px] car-card-shadow">
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Interior of a luxury car with cream leather seats and wooden accents in high resolution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7_Y5HpX66UZmg2QgdxrTyKz155dQOsO239xz8mietcgiJbiZzAnjUCGl9OCAcsKbx688a68QZuuVrR9xv5qe-SauKyTvJtHCa_2W3PrXbHufpP1QqzO9lPBU1bNWTdqBpVPhoYsmWWslkUSpBQJwaILk8r7Fk-soa83bzVD35q_8UiQaJ9J6F6j1OdZpEKa3kl8EdcoG6_YM_NZRa52836J73cn1TDiiDvL3yPFYteUdeEPo_LDNEtDj_ZZxn52U9RKLUopPsHHYZ" />
                            <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <h3 className="text-3xl font-headline font-bold text-white mb-2">Luxe</h3>
                                <p className="text-surface-container-low mb-4 font-light">Élégance, confort et prestige absolu.</p>
                                <button className="bg-secondary-container/20 backdrop-blur-md text-secondary-container border border-secondary-container/30 px-6 py-2 rounded-lg text-sm font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                    <div className="group relative overflow-hidden rounded-3xl h-[350px] car-card-shadow">
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A modern dark silver SUV parked in a scenic mountain overlook during golden hour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFJMS5EzB8Uljt-y2s2iMegK35vobyVLJ6qAorM_gzznKd_VkkX_gjCEbGAidM44NhRj5FsIKJvVIuecQI00S0KclQoHgPvFVXa8pLR2gOFgzbJoEmuYkzI2614NpHQbjuRBOUEzsXpDJVu433yahggMCjjmvoGVPjVKuEW4c2hoJB8WvVKjizD3rHB-wNnae6C_VQOx0xdxR9f-AhiFIHB9Y6i0noK1sFuN4mlg9Qm7TXxAProkAq_i3toh5NTblEsIAODU1p_bZ-" />
                        <div className="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <h3 className="text-3xl font-headline font-bold text-white mb-2">SUV</h3>
                                <p className="text-surface-container-low mb-4 font-light">Puissance et espace pour vos aventures.</p>
                                <button className="bg-secondary-container/20 backdrop-blur-md text-secondary-container border border-secondary-container/30 px-6 py-2 rounded-lg text-sm font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                    <div className="group relative overflow-hidden rounded-3xl h-[350px] car-card-shadow">
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of a small bright yellow electric city car parked in a modern urban street with glass buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbUoeMEfdzjF-Hpqs0Ll0skz5zGo09PSad4CtQcxoTwlygY_F1OFZgAOEnHCEI5Piu0Kv-fmnX4aFRsmChcslLFaHVI4smeedN8AZkoU-eX_dOFjNVPEmmi4xzApYq5D0gh6iVmL-5VQqwZ03hi0QRJz5_w1F8Ro4gHkxm2tLFlbEKUBlzEg1PJXiwLuLNsxF6Ae4vgsZRGuqTOVt8ZC2rehdqtt772RjbD5_lpCB7LxZZlxFxjmpXQ7Do65d31T4MIZqX5i4ULHCN" />
                            <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <h3 className="text-3xl font-headline font-bold text-white mb-2">Urbaine</h3>
                                <p className="text-surface-container-low mb-4 font-light">Agilité et style au cœur de la ville.</p>
                                <button className="bg-secondary-container/20 backdrop-blur-md text-secondary-container border border-secondary-container/30 px-6 py-2 rounded-lg text-sm font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors">
                                    Découvrir
                                </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Véhicules en Vedette */}
            <section className="py-20 lg:py-24 bg-surface-container-low border-t border-outline-variant/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 tracking-tight">Véhicules en Vedette</h2>
                        <div className="h-1.5 w-16 bg-secondary-container rounded-full mx-auto mb-6"></div>
                        <p className="text-on-surface-variant max-w-xl mx-auto text-sm md:text-base opacity-80">Découvrez notre flotte soigneusement entretenue pour garantir votre sécurité et votre plaisir.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Car Card 1 */}
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden car-card-shadow transition-transform hover:-translate-y-2 group">
                            <div className="p-4">
                                <div className="relative overflow-hidden rounded-xl mb-3">
                                    <img className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern dark grey Porsche driving on a scenic coastal road with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhi12WXrhacrExsUQ3nICP6BvxyQrxWsKla3z3ZrxMJQ_p27OLJ7IeItWf0ipmWKp-v39GLUKlZc3NB1gD2grMfAabWACJDSmNmivyGUUN0WT7sR94QI-BoGo_DmQBXJdN07KK8uVWT8trwb8CK1_hrmHPlo6WQuXVDOLf25hSIIoH6qadUg5oFZbh1ue_m9uqRHk4ZGAJ82cwQTsgSzxDXbokT2NAnGecJ2WqRg7dSb8tXvDiIwbFwDVPLhIwk3JcdghVZvQeRkn5" />
                                    <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm border border-emerald-400/20">Disponible</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-1.5">Porsche 911 Turbo</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-on-surface-variant text-xs mb-4">
                                    <div className="flex items-center gap-1.5 opacity-80"><Settings size={14} className="text-secondary" /> Auto</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><User size={14} className="text-secondary" /> 2 Places</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><ShieldCheck size={14} className="text-secondary" /> Full Assur.</div>
                                </div>
                                <div className="flex items-baseline justify-between mb-4 border-t border-outline-variant/10 pt-4">
                                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest opacity-60">Tarif Journalier</span>
                                    <span className="text-xl font-headline font-bold text-secondary">180€<span className="text-xs text-on-surface-variant font-normal">/jour</span></span>
                                </div>
                                <button className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-sm">Réserver</button>
                            </div>
                        </div>

                        {/* Car Card 2 */}
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden car-card-shadow transition-transform hover:-translate-y-2 group">
                            <div className="p-4">
                                <div className="relative overflow-hidden rounded-xl mb-3">
                                    <img className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Luxury black BMW sedan parked in a minimalist showroom with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwLbPwpheugwBNoyDoaBJiZbwLV7-R76R7uqa9fQqrgr6MytlB-Q3zlBsudDez4VchRLZ2aXwh50YDWpFJS-tlx_WwHvCecNWJ6AkC_9QMYD2gRBrUFBRbmR-GpDgm54Z2BvhNMtVVHswIpQgsjjuNY7glSnZ1rEcsG0dk97dgWglO7nHQy56RkqVOqYSNjI21n_0TE2mrXoWkq_AJwjExAynAoY3mti3ja7KLaCp5t6WmAinaD_RQg0fenkQrh5PLl2byo7VWNg3k" />
                                    <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm border border-emerald-400/20">Disponible</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-1.5">BMW Serie 7</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-on-surface-variant text-xs mb-4">
                                    <div className="flex items-center gap-1.5 opacity-80"><Settings size={14} className="text-secondary" /> Auto</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><User size={14} className="text-secondary" /> 5 Places</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><MapPin size={14} className="text-secondary" /> GPS Incl.</div>
                                </div>
                                <div className="flex items-baseline justify-between mb-4 border-t border-outline-variant/10 pt-4">
                                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest opacity-60">Tarif Journalier</span>
                                    <span className="text-xl font-headline font-bold text-secondary">145€<span className="text-xs text-on-surface-variant font-normal">/jour</span></span>
                                </div>
                                <button className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-sm">Réserver</button>
                            </div>
                        </div>

                        {/* Car Card 3 */}
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden car-card-shadow transition-transform hover:-translate-y-2 group">
                            <div className="p-4">
                                <div className="relative overflow-hidden rounded-xl mb-3">
                                    <img className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="New Range Rover model in white on a desert road with high contrast sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrb3Q_BNdSJjNOHCl258YCuAOSajkTKuyOVsMRxox7cLsnttVWC0g7ohST49XOSB-j48J9v8SxUkEywmuD1F92CRipgpw9PXrBy27B5_5aJFQi5yVu2QHA-Fsc2c5xoQJaM1X8kWwB_KZdsN7tG7z7lykcuJBo6GJie4nAz4neX3LtUv11X1Iw94ibG1e-bYn3T-yUwLC5bvVASjp3guzDimj8WSyT5h5OXn8HMIV9fJbU9fQd5A1qQlOXCU7y07B0Yrt3Q1fEiZ7o" />
                                    <span className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm border border-red-400/20">Occupé</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-1.5">Range Rover Velar</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-on-surface-variant text-xs mb-4">
                                    <div className="flex items-center gap-1.5 opacity-80"><Settings size={14} className="text-secondary" /> Auto</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><User size={14} className="text-secondary" /> 5 Places</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><ShieldCheck size={14} className="text-secondary" /> Assist. 24h</div>
                                </div>
                                <div className="flex items-baseline justify-between mb-4 border-t border-outline-variant/10 pt-4">
                                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest opacity-60">Tarif Journalier</span>
                                    <span className="text-xl font-headline font-bold text-secondary">120€<span className="text-xs text-on-surface-variant font-normal">/jour</span></span>
                                </div>
                                <button className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-sm">Réserver</button>
                            </div>
                        </div>

                        {/* Car Card 4 */}
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden car-card-shadow transition-transform hover:-translate-y-2 group">
                            <div className="p-4">
                                <div className="relative overflow-hidden rounded-xl mb-3">
                                    <img className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Electric Mercedes-Benz EQ in a futuristic urban environment at night with neon lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFVQ56sVS2ZtzFlCj5ujngHZSyRrJ15Y-hg2Ds1cbzm-H1WY4yCMCfg3skqRJOXUbXpeptqHnC6O1JLZT47Fd9WiYkmXrh7NyWyTuYXwfKF6uV0aKVM-_v2RgOw6UyBrh8y5z0YNVQySFwpK3Sb4t1S5sfus8681Y5TZcNBmIhAJ_27vgtydBzHhjmOhJW4yg3nRATqCsKXNyr2_QgxyBKtCt_fKyzVbQNRp_oiGq64iEnT78PUdg4crlKj-JZDgN55Hr6EbezEUN" />
                                    <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm border border-emerald-400/20">Disponible</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-1.5">Mercedes EQE</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-on-surface-variant text-xs mb-4">
                                    <div className="flex items-center gap-1.5 opacity-80"><Settings size={14} className="text-secondary" /> Auto</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><Zap size={14} className="text-secondary" /> Electrique</div>
                                    <div className="flex items-center gap-1.5 opacity-80"><ShieldCheck size={14} className="text-secondary" /> Eco-Pass</div>
                                </div>
                                <div className="flex items-baseline justify-between mb-4 border-t border-outline-variant/10 pt-4">
                                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest opacity-60">Tarif Journalier</span>
                                    <span className="text-xl font-headline font-bold text-secondary">135€<span className="text-xs text-on-surface-variant font-normal">/jour</span></span>
                                </div>
                                <button className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl font-bold hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-sm">Réserver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-primary h-[500px] w-full rounded-3xl overflow-hidden relative">
                            <img className="w-full h-full object-cover " data-alt="A refined gentleman in a well-tailored suit handing over car keys in a premium showroom with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFVQ56sVS2ZtzFlCj5ujngHZSyRrJ15Y-hg2Ds1cbzm-H1WY4yCMCfg3skqRJOXUbXpeptqHnC6O1JLZT47Fd9WiYkmXrh7NyWyTuYXwfKF6uV0aKVM-_v2RgOw6UyBrh8y5z0YNVQySFwpK3Sb4t1S5sfus8681Y5TZcNBmIhAJ_27vgtydBzHhjmOhJW4yg3nRATqCsKXNyr2_QgxyBKtCt_fKyzVbQNRp_oiGq64iEnT78PUdg4crlKj-JZDgN55Hr6EbezEUN" />
                            </div>
                        <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-8 rounded-2xl car-card-shadow max-w-xs border border-outline-variant/10">
                            <p className="text-secondary font-headline font-extrabold text-5xl mb-1">15+</p>
                            <p className="text-on-surface-variant font-bold text-sm tracking-widest uppercase">Années d'excellence</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface-variant leading-tight">
                                Plus qu'une location,<br /><span className="text-secondary">une expérience.</span>
                            </h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                                Depuis 2009, Cyris Cars redéfinit les standards de la location automobile de prestige. Notre mission est d'offrir bien plus qu'un simple moyen de transport : nous offrons la liberté, le style et une sérénité totale.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                <CheckCircle className="text-secondary mr-4" size={24} />
                                    <div>
                                    <p className="font-bold">Service Conciergerie 24/7</p>
                                    <p className="text-sm text-on-surface-variant">Un support dédié pour chaque étape de votre voyage.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                <Star className="text-secondary mr-4" size={24} />
                                    <div>
                                    <p className="font-bold">Véhicules Dernière Génération</p>
                                    <p className="text-sm text-on-surface-variant">Une flotte renouvelée tous les 12 mois pour le summum de la technologie.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                <Truck className="text-secondary mr-4" size={24} />
                                    <div>
                                    <p className="font-bold">Livraison à Domicile</p>
                                    <p className="text-sm text-on-surface-variant">Nous amenons votre véhicule là où vous en avez besoin.</p>
                                    </div>
                                </li>
                            </ul>
                        <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">En savoir plus</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Categorie;;