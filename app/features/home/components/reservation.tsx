"use client";

import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Calendar,
    ShieldCheck,
    Car,
    Info,
    CheckCircle2,
    ArrowRight,
    Zap,
    Mail,
    Phone,
    User,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VOITURES, Voiture } from "./voiture";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Schéma de validation Zod
const reservationSchema = z.object({
    carId: z.string({
        required_error: "Veuillez sélectionner un véhicule.",
    }),
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    email: z.string().email("Adresse email invalide."),
    phone: z.string().min(10, "Numéro de téléphone invalide."),
    startDate: z.string().min(1, "Date de début requise."),
    startTime: z.string().min(1, "Heure de début requise."),
    endDate: z.string().min(1, "Date de fin requise."),
    endTime: z.string().min(1, "Heure de fin requise."),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const Reservation = () => {
    const form = useForm<ReservationFormValues>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            carId: VOITURES[1].id.toString(),
            name: "Israel K.",
            email: "israel@example.com",
            phone: "+33 6 12 34 56 78",
            startDate: "2024-09-12",
            startTime: "09:00",
            endDate: "2024-09-15",
            endTime: "18:00",
        },
    });

    // Surveillance du véhicule et calcul dynamique du prix
    const watchedCarId = form.watch("carId");
    const selectedCar = useMemo(() => 
        VOITURES.find(v => v.id.toString() === watchedCarId) || VOITURES[1], 
    [watchedCarId]);

    const watchedDates = form.watch(["startDate", "endDate"]);
    const diffDays = useMemo(() => {
        const start = new Date(watchedDates[0]);
        const end = new Date(watchedDates[1]);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1;
        const diffTime = end.getTime() - start.getTime();
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return days > 0 ? days : 1;
    }, [watchedDates]);

    const prixTotal = selectedCar.prix * diffDays + 45;

    const onSubmit = (data: ReservationFormValues) => {
        console.log("Formulaire soumis:", { ...data, prixTotal });
        // Ici, logique de paiement ou redirection
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-40 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* EN-TÊTE PAGE PREMIUM */}
                <div className="mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[9px] font-black uppercase tracking-[0.2em]">
                        <Zap className="w-2.5 h-2.5" />
                        Expérience de Réservation Exclusive
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black font-headline text-black tracking-tighter uppercase italic leading-none">
                        Finalisez votre <span className="text-secondary">Location</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* COLONNE GAUCHE : FORMULAIRE SHADCN + ZOD */}
                    <div className="lg:col-span-8">
                        <Card className="bg-white shadow-2xl rounded-[2.5rem] border-outline-variant/30 shadow-ambient overflow-hidden">
                            <CardHeader className="border-b border-outline-variant/10 p-8 lg:p-12 pb-6">
                                <CardTitle className="text-2xl font-black font-headline text-black uppercase tracking-tight flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center">
                                        <ShieldCheck className="w-4 h-4 text-black" />
                                    </div>
                                    Configuration de la Réservation
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 lg:p-12 space-y-10">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                                        
                                        {/* SECTION 1 : VÉHICULE (GRID 2 COLONNES : SELECT + IMAGE) */}
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                                                <FormField
                                                    control={form.control}
                                                    name="carId"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-4">
                                                            <FormLabel className="text-[10px] uppercase font-black text-outline tracking-widest px-2">Modèle de véhicule</FormLabel>
                                                            <Select onValueChange={field.onChange} value={field.value || ""}>
                                                                <FormControl>
                                                                    <SelectTrigger className="h-20 w-full bg-white shadow-lg border-outline-variant/20 rounded-3xl px-10 text-black text-sm transition-all focus:ring-2 focus:ring-secondary">
                                                                        <SelectValue>
                                                                            {selectedCar.nom}
                                                                        </SelectValue>
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="rounded-3xl border-outline-variant/20 shadow-[0_25px_60px_rgba(0,0,0,0.2)] md:min-w-[500px] p-2 bg-white">
                                                                    {VOITURES.map((v) => (
                                                                        <SelectItem key={v.id} value={v.id.toString()} className="h-15 font-bold text-black focus:bg-secondary/10 focus:text-secondary cursor-pointer rounded-2xl mb-1 last:mb-0 transition-all px-10">
                                                                            <div className="flex justify-between w-full gap-16 items-center">
                                                                                <div className="flex flex-col items-start">
                                                                                    <span className="text-[15px] tracking-tight">{v.nom}</span>
                                                                                    <span className="text-[10px] text-outline-variant uppercase tracking-[0.2em] font-bold mt-1">{v.categories[0]}</span>
                                                                                </div>
                                                                                <div className="flex items-center gap-6">
                                                                                    <div className="flex flex-col items-end border-r border-outline-variant/20 pr-10">
                                                                                        <span className="text-secondary font-black text-[20px] leading-none">{v.prix}€</span>
                                                                                        <span className="text-[8px] text-black/40 font-black uppercase tracking-widest mt-1">par jour</span>
                                                                                    </div>
                                                                                    <div className="flex items-center gap-2 text-black/20 group-focus:text-secondary">
                                                                                        <Users className="w-4 h-4" />
                                                                                        <span className="text-xs font-black">{v.places}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Image de prévisualisation sur la même ligne */}
                                                <div className="relative group rounded-3xl overflow-hidden border border-outline-variant/20 shadow-xl bg-white h-48 animate-in fade-in slide-in-from-right-4 duration-700">
                                                    <img src={selectedCar.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Preview" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                                    <div className="absolute bottom-4 left-6">
                                                        <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">{selectedCar.categories[0]}</p>
                                                        <div className="flex items-center gap-3">
                                                            <h4 className="text-sm font-black text-white uppercase">{selectedCar.nom}</h4>
                                                            <div className="flex items-center gap-1 text-white/60 text-[9px] font-bold border-l border-white/20 pl-3">
                                                                <Users className="w-3 h-3 text-secondary" />
                                                                {selectedCar.places} Places
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECTION 2 : COORDONNÉES PERSONNELLES */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-[10px] uppercase text-black font-black text-outline tracking-widest px-2">Nom Complet</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                                                                <Input {...field} className="h-12 w-full bg-white shadow-lg border-outline-variant/20 rounded-2xl text-black focus:ring-2 focus:ring-secondary px-13" placeholder="Jean Dupont" />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-[10px] uppercase text-black font-black text-outline tracking-widest px-2">Adresse Email</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                                                                <Input {...field} className="h-12 w-full bg-white shadow-lg border-outline-variant/20 rounded-2xl text-black focus:ring-2 focus:ring-secondary px-13" placeholder="jean@exemple.com" />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="text-[10px] uppercase text-black font-black text-outline tracking-widest px-2">Téléphone</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                                                                <Input {...field} className="h-12 w-full bg-white shadow-lg border-outline-variant/20 rounded-2xl text-black focus:ring-2 focus:ring-secondary px-13" placeholder="+33 6 ..." />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {/* SECTION 3 : DATES DE LOCATION */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10">
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-primary">
                                                    <Calendar className="w-5 h-5 text-secondary" />
                                                    <span className="font-black text-black text-xs uppercase tracking-widest">Prise en charge</span>
                                                </div>
                                                <div className="flex gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="startDate"
                                                        render={({ field }) => (
                                                            <FormItem className="flex-1">
                                                                <FormControl>
                                                                    <Input type="date" {...field} className="h-14 bg-white border-outline-variant/20 rounded-xl px-5 font-bold" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="startTime"
                                                        render={({ field }) => (
                                                            <FormItem className="w-32">
                                                                <FormControl>
                                                                    <Input type="time" {...field} className="h-14 bg-white border-outline-variant/20 rounded-xl px-4 font-bold" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-2 text-primary">
                                                    <Calendar className="w-5 h-5 text-secondary" />
                                                    <span className="font-black text-black text-xs uppercase tracking-widest">Retour du véhicule</span>
                                                </div>
                                                <div className="flex gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="endDate"
                                                        render={({ field }) => (
                                                            <FormItem className="flex-1">
                                                                <FormControl>
                                                                    <Input type="date" {...field} className="h-14 bg-white border-outline-variant/20 rounded-xl px-5 font-bold" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="endTime"
                                                        render={({ field }) => (
                                                            <FormItem className="w-32">
                                                                <FormControl>
                                                                    <Input type="time" {...field} className="h-14 bg-white border-outline-variant/20 rounded-xl px-4 font-bold" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* RÉCAPITULATIF FINANCIER DANS LE FORMULAIRE */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 h-30 gap-8 items-center bg-secondary/5 p-6 rounded-[2rem] border border-secondary/10">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase font-black text-black tracking-[0.2em] px-2">Estimation Totale</Label>
                                                <div className="relative">
                                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-secondary text-xl">€</span>
                                                    <Input 
                                                        readOnly 
                                                        value={prixTotal.toLocaleString('fr-FR')} 
                                                        className="h-12 w-50 bg-white border-none shadow-xl rounded-3xl pl-12 font-black text-3xl text-black transition-all" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1 text-right md:text-left">
                                                <p className="text-secondary font-black text-sm uppercase tracking-tight italic">Tarif Garanti</p>
                                                <p className="text-black/40 text-[10px] font-bold leading-relaxed">
                                                    Inclut {diffDays} {diffDays > 1 ? 'jours' : 'jour'} de location, <br />
                                                    l'assurance et les frais de service.
                                                </p>
                                            </div>
                                        </div>

                                        {/* CHARTE DE PRUDENCE */}
                                        <div className="bg-black rounded-3xl p-8 flex items-center gap-8 text-white relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-[40px] pointer-events-none"></div>
                                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-12 transition-transform">
                                                <Info className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-sm font-black uppercase tracking-tight italic">L'Art de conduire l'Exception</h4>
                                                <p className="text-white/60 text-[11px] leading-relaxed max-w-xl">La performance de nos motorisations exige une attention constante et un respect scrupuleux des règles de sécurité routière.</p>
                                            </div>
                                        </div>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* COLONNE DROITE : FACTURE STICKY */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <Card className="bg-black rounded-[2.5rem] border-white/10 shadow-ambient overflow-hidden text-white">
                            {/* Visuel Voiture Récap */}
                            <div className="relative h-48 bg-black">
                                <img src={selectedCar.image} className="w-full h-full object-cover opacity-60" alt="Recap" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                                        <span className="text-[8px] font-black text-secondary uppercase tracking-[0.2em]">Votre Sélection</span>
                                    </div>
                                    <h4 className="text-xl font-black font-headline tracking-tighter uppercase">{selectedCar.nom}</h4>
                                </div>
                            </div>

                            <CardContent className="p-10 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-bold">
                                        <span className="text-white/40 uppercase tracking-widest text-[8px]">Prix Journalier</span>
                                        <span>{selectedCar.prix.toLocaleString('fr-FR')} €</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold">
                                        <span className="text-white/40 uppercase tracking-widest text-[8px]">Location ({diffDays} {diffDays > 1 ? 'jours' : 'jour'})</span>
                                        <span>{(selectedCar.prix * diffDays).toLocaleString('fr-FR')} €</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold border-b border-white/10 pb-4">
                                        <span className="text-white/40 uppercase tracking-widest text-[8px]">Frais de service</span>
                                        <span>45,00 €</span>
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    <div className="flex justify-between items-baseline">
                                        <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Total TTC</p>
                                        <p className="text-5xl font-black tracking-tighter font-headline text-white">{prixTotal.toLocaleString('fr-FR')}€</p>
                                    </div>

                                    <div className="space-y-4">
                                        <Button 
                                            onClick={form.handleSubmit(onSubmit)}
                                            className="w-full h-16 bg-secondary hover:bg-secondary/90 text-primary font-black text-sm rounded-2xl shadow-xl flex items-center justify-center gap-3 group/btn transition-all hover:scale-[1.02]"
                                        >
                                            Confirmer & Payer
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                                        </Button>
                                        <div className="bg-white/5 rounded-2xl p-6 space-y-4 border border-white/5">
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3 text-[10px] font-bold text-white/40"><CheckCircle2 className="w-4 h-4 text-secondary" /> Assurance tous risques incluse</li>
                                                <li className="flex items-center gap-3 text-[10px] font-bold text-white/40"><CheckCircle2 className="w-4 h-4 text-secondary" /> Annulation gratuite 24h avant</li>
                                                <li className="flex items-center gap-3 text-[10px] font-bold text-white/40"><ShieldCheck className="w-4 h-4 text-secondary" /> Paiement 100% sécurisé</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reservation;
