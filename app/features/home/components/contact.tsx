"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MapPin, Phone, Mail, Globe, Share2, Camera } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
    email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
    message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const inputClass = "w-full border-0 border-b-2 border-outline-variant focus-visible:border-secondary focus-visible:ring-0 transition-all py-4 px-0 rounded-none bg-transparent placeholder:text-outline-variant/50 text-base shadow-none";
const labelClass = "text-[10px] font-bold tracking-widest uppercase text-on-surface-variant";

const Contact = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", message: "" },
    });

    function onSubmit(values: ContactFormValues) {
        console.log(values);
        toast.success("Message envoyé !", {
            description: "Notre équipe vous contactera sous 15 minutes.",
        });
        form.reset();
    }

    return (
        <>
            <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
                    <div className="lg:col-span-7">
                        <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none mb-8 text-primary">
                            ENTREZ DANS <br /><span className="text-secondary">LA VITESSE.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                            Vous avez une question sur notre flotte premium ou souhaitez réserver une expérience de conduite exceptionnelle ? Notre équipe est prête à répondre à vos besoins.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div className="absolute -top-24 -right-12 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>
                        <img className="rounded-xl ambient-shadow car-image-offset object-cover h-64 w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700" data-alt="Modern sports car steering wheel and dashboard close-up at night with warm interior lighting and cinematic depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmjic9VU_ar0qW2hPxjH7pOFWvCKdz4BRxqqYwXjDUqtteLjgW_BPp-B0GTS6J0NfrreaSi2FWH63x5bb20lbO3wpHOJ15570ibFLQ5KIbo-nqj-YHi32wAZVBv3_-Dz8Pi6jrtCIeTN5pnKfjWuXwIPWX9y__RXpqoNWilLTI04mex_eDJ8uGNg-4BSB8qUC5iMn9DdpmesbQ48-pukc3upf7Vt8JftLJTeGg7JxCva_UbvaAgrIP8r7Tkg2PcLWK3MMd1G4HGbLA" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <Card className="w-full bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                        <CardHeader className="p-0 mb-10">
                            <CardTitle className="text-4xl font-headline font-extrabold text-primary tracking-tighter leading-none mb-2">
                                Envoyez-nous <br /> <span className="text-secondary italic">un message.</span>
                            </CardTitle>
                            <CardDescription className="text-on-surface-variant font-medium text-[10px] uppercase tracking-widest opacity-60">
                                Notre équipe vous répondra en moins de 15 minutes
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0">
                            <Form {...form}>
                                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className={labelClass}>Nom complet</FormLabel>
                                                <FormControl>
                                                    <Input className={inputClass} placeholder="Jean Dupont" type="text" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className={labelClass}>Adresse Email</FormLabel>
                                                <FormControl>
                                                    <Input className={inputClass} placeholder="jean.dupont@email.com" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className={labelClass}>Votre Message</FormLabel>
                                                <FormControl>
                                                    <Textarea className={`${inputClass} resize-none min-h-[120px]`} placeholder="Comment pouvons-nous vous aider ?" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                </form>
                            </Form>
                        </CardContent>

                        <CardFooter className="p-0 mt-10">
                            <Button
                                form="contact-form"
                                type="submit"
                                className="group w-full md:w-auto flex items-center gap-3 bg-secondary text-primary-foreground px-10 py-7 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-premium"
                            >
                                Envoyer la demande
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
                            </Button>
                        </CardFooter>
                    </Card>

                    <div className="flex flex-col gap-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow">
                                <MapPin className="text-secondary mb-6" size={30} />
                                <h3 className="font-headline font-bold text-xl mb-2">Notre Bureau</h3>
                                <p className="text-on-surface-variant leading-relaxed">Adidogome<br />Lomé, Togo</p>
                            </div>
                            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow">
                                <Phone className="text-secondary mb-6" size={30} />
                                <h3 className="font-headline font-bold text-xl mb-2">Téléphone</h3>
                                <p className="text-on-surface-variant leading-relaxed">+228 99 99 99 99<br />Lun - Sam, 9h00 - 19h00</p>
                            </div>
                            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow">
                                <Mail className="text-secondary mb-6" size={30} />
                                <h3 className="font-headline font-bold text-xl mb-2">Email</h3>
                                <p className="text-on-surface-variant leading-relaxed">contact@cyriscars.com<br />support@cyriscars.com</p>
                            </div>
                            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow">
                                <h3 className="font-headline font-bold text-xl mb-6">Suivez-nous</h3>
                                <div className="flex gap-4">
                                    <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary-container hover:text-on-primary-fixed transition-all" href="#">
                                        <Globe size={20} />
                                    </a>
                                    <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary-container hover:text-on-primary-fixed transition-all" href="#">
                                        <Share2 size={20} />
                                    </a>
                                    <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary-container hover:text-on-primary-fixed transition-all" href="#">
                                        <Camera size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl group border border-outline/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31735.53123456789!2d1.149223!3d6.183456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c667bc9447%3A0xc34a02d8f9b9f7a2!2sAdidogom%C3%A9%2C%20Lom%C3%A9!5e0!3m2!1sfr!2stg!4v1712676000000!5m2!1sfr!2stg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contact;
