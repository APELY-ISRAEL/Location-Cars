"use client";

import { useState } from "react";
import {
    Search,
    Settings2,
    Fuel,
    Users,
    Zap,
    ChevronLeft,
    ChevronRight,
    Star,
    SlidersHorizontal,
    X,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// ─── Données voitures ────────────────────────────────────────────────────────

export type Carburant = "Essence" | "Diesel" | "Électrique" | "Hybride";
export type Transmission = "Manuelle" | "Automatique";
export type Categorie = "Luxe" | "Sport" | "SUV" | "Électrique" | "Cabriolet";

export interface Voiture {
    id: number;
    nom: string;
    prix: number;
    transmission: Transmission;
    carburant: Carburant;
    places: number;
    categories: Categorie[];
    badge?: string;
    image: string;
}

export const VOITURES: Voiture[] = [
    {
        id: 1,
        nom: "Mercedes-Benz Classe G",
        prix: 450,
        transmission: "Automatique",
        carburant: "Diesel",
        places: 5,
        categories: ["Luxe", "SUV"],
        badge: "Nouveau",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyWcSmcxTO5qmYM2PCqT2gvNTZi-kNkNjvo3-ObtwNs62c7YMH9Ytj_8hwXi4N52gWPxhPpeBIh_IDg-PvvcQPh4_Cu5r6fT7s_9v4a-S3TjkwU9BwukAGqMfsCaLodINu9Ca65Lk4TstTx5RryqoE2QXloHtO7YArulu-1_uAhJrrOsHQ7SXuuiDTXL-xjN9-fjtSvbwveGdD3aSD8AHaVU7Cotg510BKxcKp-a7TvaIbQ-J_UuBG-5gHj3pimx29hrXXdG80qKQ",
    },
    {
        id: 2,
        nom: "Porsche 911 Carrera S",
        prix: 620,
        transmission: "Automatique",
        carburant: "Essence",
        places: 4,
        categories: ["Sport", "Luxe"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDTR7YC2beqlQsxnQu5njU78rTB5K7MDW3QtDGyQP1_gWn34mECqtscIxgJOqEQamK9ui7KJGZJ9QFcV842BqsvKNmSFjRlfYSo3bwzLlbVdjNQgiDjabZp6EkESXm02dhVXypT3TGyRhTA56qnKawRXaAZHWr-BGGgDhu4M_SmHx5ELG2lL3buayGPpD2eUQwT29OQ_LNOYf0nuP4IRXjkQkDear4wGZmKmEZZPm6C1sNuNT4JDN7LSY6mNrdJA4qZqlKLNXfLFQff",
    },
    {
        id: 3,
        nom: "BMW M4 Competition",
        prix: 380,
        transmission: "Automatique",
        carburant: "Électrique",
        places: 4,
        categories: ["Sport", "Électrique"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDlCFLJLIO-piqx399MC4a67b7whNWUmZi3rsJabtr_x1PzZ_mUvsaHzCKgNyRxBi_-kXJJ4axhaMRnfk0TqSpC1FYUekDfMebKdCQQS7t-dLWQ8trhnkVSWW08x9e6S92u_6LiGfe-m0cl7-R_JeNOAUfBi5FKB8Ed4JPTCoJcIDR-D6ozToSIugrpxmWsTeh9LF3ALpMk9qiJozbuhYRA7oizVVJC1Rgzv9GzyhUTMLd0zq8M3XIrQEmazF_C2aKGaHfEanlNi2",
    },
    {
        id: 4,
        nom: "Range Rover Autobiography",
        prix: 540,
        transmission: "Automatique",
        carburant: "Hybride",
        places: 7,
        categories: ["SUV", "Luxe"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBbgz0t4miFZuKqjdtQgi5ub-zy0USv8Cgd2RT-RxEl_1rMESU_wKKkZEVW3n1rckvadNqMf4rM_xoWll2Mthyv_qrea3Z7klNP3JZhl3zpLhsee43Y1Ln3Fy2cQ89IHkcTOBDFUDqU3ObHnZ4XIn0cG99oGTSG1lANgFzcApTZF4G88nNJRANGrNlKZY61o_ZK0-YUuj1FUQo0GiUOV7RmrLymnQfrXeN5V3szkp26HwHimM01UVbztGn1ijHNW-bLkTfShXhqfXt4",
    },
    {
        id: 5,
        nom: "Ferrari Roma",
        prix: 890,
        transmission: "Automatique",
        carburant: "Essence",
        places: 2,
        categories: ["Sport", "Luxe", "Cabriolet"],
        badge: "Exclusif",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDTR7YC2beqlQsxnQu5njU78rTB5K7MDW3QtDGyQP1_gWn34mECqtscIxgJOqEQamK9ui7KJGZJ9QFcV842BqsvKNmSFjRlfYSo3bwzLlbVdjNQgiDjabZp6EkESXm02dhVXypT3TGyRhTA56qnKawRXaAZHWr-BGGgDhu4M_SmHx5ELG2lL3buayGPpD2eUQwT29OQ_LNOYf0nuP4IRXjkQkDear4wGZmKmEZZPm6C1sNuNT4JDN7LSY6mNrdJA4qZqlKLNXfLFQff",
    },
    {
        id: 6,
        nom: "Tesla Model S Plaid",
        prix: 320,
        transmission: "Automatique",
        carburant: "Électrique",
        places: 5,
        categories: ["Électrique", "Sport"],
        badge: "Éco",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDlCFLJLIO-piqx399MC4a67b7whNWUmZi3rsJabtr_x1PzZ_mUvsaHzCKgNyRxBi_-kXJJ4axhaMRnfk0TqSpC1FYUekDfMebKdCQQS7t-dLWQ8trhnkVSWW08x9e6S92u_6LiGfe-m0cl7-R_JeNOAUfBi5FKB8Ed4JPTCoJcIDR-D6ozToSIugrpxmWsTeh9LF3ALpMk9qiJozbuhYRA7oizVVJC1Rgzv9GzyhUTMLd0zq8M3XIrQEmazF_C2aKGaHfEanlNi2",
    },
    {
        id: 7,
        nom: "Lamborghini Huracán",
        prix: 1200,
        transmission: "Automatique",
        carburant: "Essence",
        places: 2,
        categories: ["Sport", "Luxe"],
        badge: "Premium",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDTR7YC2beqlQsxnQu5njU78rTB5K7MDW3QtDGyQP1_gWn34mECqtscIxgJOqEQamK9ui7KJGZJ9QFcV842BqsvKNmSFjRlfYSo3bwzLlbVdjNQgiDjabZp6EkESXm02dhVXypT3TGyRhTA56qnKawRXaAZHWr-BGGgDhu4M_SmHx5ELG2lL3buayGPpD2eUQwT29OQ_LNOYf0nuP4IRXjkQkDear4wGZmKmEZZPm6C1sNuNT4JDN7LSY6mNrdJA4qZqlKLNXfLFQff",
    },
    {
        id: 8,
        nom: "Audi RS6 Avant",
        prix: 480,
        transmission: "Manuelle",
        carburant: "Essence",
        places: 5,
        categories: ["Sport", "Luxe"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyWcSmcxTO5qmYM2PCqT2gvNTZi-kNkNjvo3-ObtwNs62c7YMH9Ytj_8hwXi4N52gWPxhPpeBIh_IDg-PvvcQPh4_Cu5r6fT7s_9v4a-S3TjkwU9BwukAGqMfsCaLodINu9Ca65Lk4TstTx5RryqoE2QXloHtO7YArulu-1_uAhJrrOsHQ7SXuuiDTXL-xjN9-fjtSvbwveGdD3aSD8AHaVU7Cotg510BKxcKp-a7TvaIbQ-J_UuBG-5gHj3pimx29hrXXdG80qKQ",
    },
];

const CATEGORIES: ("Tout" | Categorie)[] = ["Tout", "Luxe", "Sport", "SUV", "Électrique", "Cabriolet"];
const CARBURANTS: Carburant[] = ["Essence", "Électrique", "Diesel", "Hybride"];
const TRANSMISSIONS: Transmission[] = ["Manuelle", "Automatique"];

// ─── Icône carburant ─────────────────────────────────────────────────────────

function FuelIcon({ carburant }: { carburant: Carburant }) {
    if (carburant === "Électrique") return <Zap className="w-3.5 h-3.5" />;
    return <Fuel className="w-3.5 h-3.5" />;
}

// ─── Carte voiture ────────────────────────────────────────────────────────────

function CarteVoiture({ voiture }: { voiture: Voiture }) {
    return (
        <div className="group relative bg-surface-container-lowest rounded-xl p-6 car-card-shadow transition-transform hover:-translate-y-1">
            <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={voiture.image}
                    alt={voiture.nom}
                />
                {voiture.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                        {voiture.badge}
                    </div>
                )}
            </div>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-primary">
                        {voiture.nom}
                    </h3>
                    <div className="flex gap-4 mt-2">
                        <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                            <Settings2 className="w-3.5 h-3.5" />
                            <span>{voiture.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                            <FuelIcon carburant={voiture.carburant} />
                            <span>{voiture.carburant}</span>
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                            <Users className="w-3.5 h-3.5" />
                            <span>{voiture.places} Places</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-0.5 text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="text-xs font-bold text-on-surface-variant">4.9</span>
                </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div>
                    <span className="text-3xl font-black text-primary">{voiture.prix} €</span>
                    <span className="text-sm text-outline font-medium"> / jour</span>
                </div>
                <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-95">
                    Réserver
                </button>
            </div>
        </div>
    );
}

// ─── Composant principal ─────────────────────────────────────────────────────

const VoiturePage = () => {
    const [categorieActive, setCategorieActive] = useState<"Tout" | Categorie>("Tout");
    const [transmissionsActives, setTransmissionsActives] = useState<Set<Transmission>>(new Set());
    const [carburantsActifs, setCarburantsActifs] = useState<Set<Carburant>>(new Set());
    const [recherche, setRecherche] = useState("");
    const [sidebarOuverte, setSidebarOuverte] = useState(false);
    const [tri, setTri] = useState("prix-croissant");

    // Toggle transmission
    const toggleTransmission = (t: Transmission) => {
        setTransmissionsActives((prev) => {
            const next = new Set(prev);
            next.has(t) ? next.delete(t) : next.add(t);
            return next;
        });
    };

    // Toggle carburant
    const toggleCarburant = (c: Carburant) => {
        setCarburantsActifs((prev) => {
            const next = new Set(prev);
            next.has(c) ? next.delete(c) : next.add(c);
            return next;
        });
    };

    // Filtrage
    const voituresFiltrees = VOITURES.filter((v) => {
        const matchCat = categorieActive === "Tout" || v.categories.includes(categorieActive as Categorie);
        const matchTrans = transmissionsActives.size === 0 || transmissionsActives.has(v.transmission);
        const matchCarb = carburantsActifs.size === 0 || carburantsActifs.has(v.carburant);
        const matchSearch = recherche === "" || v.nom.toLowerCase().includes(recherche.toLowerCase());
        return matchCat && matchTrans && matchCarb && matchSearch;
    });

    return (
        <>
            {/* Bouton filtres mobile */}
            <div className="lg:hidden fixed bottom-6 right-6 z-40">
                <button
                    onClick={() => setSidebarOuverte(!sidebarOuverte)}
                    className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-xl font-bold text-sm transition-all active:scale-95"
                >
                    {sidebarOuverte ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
                    {sidebarOuverte ? "Fermer" : "Filtres"}
                </button>
            </div>

            {/* Overlay mobile */}
            {sidebarOuverte && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setSidebarOuverte(false)}
                />
            )}

            <main className="pt-24 pb-20 px-4 lg:px-8 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* ── Sidebar Filtres ── */}
                <aside className={`
                    fixed inset-y-0 left-0 z-40 w-80 bg-surface pt-20 px-6 pb-6 shadow-2xl transition-transform duration-300 overflow-y-auto space-y-8
                    lg:relative lg:inset-auto lg:z-auto lg:w-80 lg:bg-transparent lg:pt-0 lg:px-0 lg:pb-0 lg:shadow-none lg:translate-x-0
                    lg:shrink-0 lg:sticky lg:top-24 lg:h-fit lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2
                    ${sidebarOuverte ? "translate-x-0" : "-translate-x-full"}
                `}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-2">La Flotte</h1>
                            <p className="text-on-surface-variant text-sm">
                                Découvrez l'exceptionnel parmi notre sélection de véhicules premium.
                            </p>
                        </div>
                        <button
                            className="lg:hidden p-2 rounded-full hover:bg-surface-container-high"
                            onClick={() => setSidebarOuverte(false)}
                        >
                            <X className="w-5 h-5 text-on-surface-variant" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Recherche */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
                            <input
                                className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-xl text-sm focus:ring-2 focus:ring-secondary transition-all"
                                placeholder="Rechercher un modèle..."
                                type="text"
                                value={recherche}
                                onChange={(e) => setRecherche(e.target.value)}
                            />
                        </div>

                        {/* Prix */}
                        <div className="space-y-4">
                            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline">Prix / Jour</h3>
                            <div className="flex items-center gap-4">
                                <input className="w-full accent-secondary" max="2000" min="50" type="range" />
                            </div>
                            <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                                <span>50 €</span>
                                <span>2000 €+</span>
                            </div>
                        </div>

                        {/* Transmission */}
                        <div className="space-y-3">
                            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline">Transmission</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {TRANSMISSIONS.map((t) => {
                                    const actif = transmissionsActives.has(t);
                                    return (
                                        <button
                                            key={t}
                                            onClick={() => toggleTransmission(t)}
                                            className={`py-2 px-4 rounded-lg text-sm border-2 font-semibold transition-all ${
                                                actif
                                                    ? "border-secondary bg-secondary-fixed text-on-secondary-fixed-variant"
                                                    : "border-transparent bg-surface-container-high text-on-surface-variant hover:border-outline-variant"
                                            }`}
                                        >
                                            {t}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Carburant */}
                        <div className="space-y-3">
                            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline">Carburant</h3>
                            <div className="flex flex-wrap gap-2">
                                {CARBURANTS.map((c) => (
                                    <label
                                        key={c}
                                        className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors"
                                    >
                                        <Checkbox
                                            checked={carburantsActifs.has(c)}
                                            onCheckedChange={() => toggleCarburant(c)}
                                        />
                                        <Label className="text-sm font-medium cursor-pointer">{c}</Label>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Nombre de places */}
                        <div className="space-y-3">
                            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline">Nombre de places</h3>
                            <div className="flex gap-2">
                                {["2", "4", "5", "7+"].map((p) => (
                                    <button key={p} className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high text-on-surface-variant font-bold hover:bg-secondary hover:text-white transition-all">
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* ── Section voitures ── */}
                <section className="flex-1">
                    {/* Onglets catégories */}
                    <div className="mb-8 overflow-x-auto pb-2 custom-scrollbar">
                        <div className="flex gap-2 min-w-max">
                            {CATEGORIES.map((cat) => {
                                const actif = categorieActive === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setCategorieActive(cat)}
                                        className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                                            actif
                                                ? "bg-primary text-white shadow-sm"
                                                : "bg-surface-container-high text-on-surface-variant hover:bg-secondary/10 border border-transparent hover:border-secondary/20"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Compteur + tri */}
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                        <p className="text-on-surface-variant font-medium text-sm">
                            <span className="text-primary font-bold">{voituresFiltrees.length}</span> véhicule{voituresFiltrees.length > 1 ? "s" : ""} trouvé{voituresFiltrees.length > 1 ? "s" : ""}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-outline hidden sm:inline">Trier par:</span>
                            <Select value={tri} onValueChange={(v) => setTri(v ?? tri)}>
                                <SelectTrigger className="h-8 text-sm font-bold text-primary border-outline-variant">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="prix-croissant">Prix croissant</SelectItem>
                                    <SelectItem value="nouveautes">Nouveautés</SelectItem>
                                    <SelectItem value="populaires">Populaires</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Grille voitures */}
                    {voituresFiltrees.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {voituresFiltrees.map((v) => (
                                <CarteVoiture key={v.id} voiture={v} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center text-on-surface-variant">
                            <Search className="w-12 h-12 mb-4 opacity-30" />
                            <p className="font-headline text-xl font-bold">Aucun véhicule trouvé</p>
                            <p className="text-sm mt-1">Modifiez vos filtres pour afficher plus de résultats.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-4">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary hover:text-white transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold">1</button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant font-bold hover:bg-surface-container-high">2</button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant font-bold hover:bg-surface-container-high">3</button>
                            <span className="px-2 text-outline">...</span>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant font-bold hover:bg-surface-container-high">8</button>
                        </div>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary hover:text-white transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default VoiturePage;