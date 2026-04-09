"use client";

import Image from "next/image";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  address: z.string().min(2, {
    message: "L'adresse doit contenir au moins 2 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(8, {
    message: "Le numéro de téléphone doit contenir au moins 8 chiffres",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
  confirmPassword: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
  terms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions d'utilisation",
  }),
});

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    try {
      console.log("Register values:", values);
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success("Compte créé avec succès", {
        description: "Bienvenue chez Cyris Cars !",
      });

      router.push("/login");
    } catch {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer plus tard",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen md:h-screen w-full flex flex-col md:flex-row md:overflow-hidden bg-white">
      {/* Left Side: Cinematic Image & Branding */}
      <section className="hidden md:flex md:w-1/2 bg-gray-900 relative items-end p-16 overflow-hidden h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Luxury luxury car"
            className="w-full h-full object-cover opacity-70 mix-blend-luminosity brightness-75 transition-transform duration-10000 hover:scale-110"
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary-50"></span>
            <p className="font-poppins-regular text-[10px] tracking-[0.2em] text-primary-50 font-bold uppercase">
              Join the Elite
            </p>
          </div>
          <h1 className="font-poppins-bold text-6xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 italic">
            BECOME<br />ELITE.
          </h1>
          <p className="font-poppins-regular text-gray-300 text-lg leading-relaxed max-w-md">
            Rejoignez une communauté d'élite et accédez à l'excellence automobile. Votre voyage commence ici.
          </p>
        </div>
      </section>

      {/* Right Side: Register Form */}
      <section className="md:w-1/2 flex flex-col items-center bg-slate-50 min-h-screen md:h-screen overflow-y-auto p-4 md:p-12 lg:p-24">
        <div className="w-full md:w-[500px] h-auto mt-6 md:-mt-16 pb-12">
          <Card className="w-full bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative animate-in fade-in duration-700">
            <CardHeader className="p-0 mb-2">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/"
                  className="flex items-center text-slate-400 hover:text-slate-900 transition-all group"
                  title="Retour à l'accueil"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <div className="opacity-80">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={40}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1 text-center">
                <CardTitle className="text-2xl font-poppins-bold text-slate-900 tracking-tight">
                  Inscription
                </CardTitle>
                <CardDescription className="text-slate-500 font-poppins-regular text-xs uppercase tracking-widest opacity-70">
                  Rejoignez l'élite automobile
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Form {...form}>
                <form
                  id="register-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Nom complet</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <User size={16} />
                              </div>
                              <Input
                                placeholder="Alexander Vance"
                                className="w-full pl-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Prenoms</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <User size={16} />
                              </div>
                              <Input
                                placeholder="Alexander Vance"
                                className="w-full pl-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Adresse</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <User size={16} />
                              </div>
                              <Input
                                placeholder="Alexander Vance"
                                className="w-full pl-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Téléphone</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <Phone size={16} />
                              </div>
                              <Input
                                placeholder="+1 (555) 000"
                                className="w-full pl-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                              <Mail size={16} />
                            </div>
                            <Input
                              type="email"
                              placeholder="avance@cyris.com"
                              className="w-full pl-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Mot de passe</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <Lock size={16} />
                              </div>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary-50 hover:bg-transparent"
                              >
                                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Confirmer le mot de passe</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                                <Lock size={16} />
                              </div>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 h-10 border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 text-xs"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary-50 hover:bg-transparent"
                              >
                                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md py-1">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="h-3.5 w-3.5 rounded border-slate-200 text-primary-50 focus:ring-primary-50/20 transition-all"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <div className="leading-none">
                          <FormLabel className="text-[10px] text-slate-400 font-poppins-regular leading-relaxed">
                            J'accepte les <Link href="#" className="text-primary-50 hover:underline">conditions</Link> et la <Link href="#" className="text-primary-50 hover:underline">politique de confidentialité</Link>
                          </FormLabel>
                          <FormMessage className="text-[10px]" />
                        </div>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
            <CardFooter className="px-0 flex-col gap-3">
              <Button
                form="register-form"
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-secondary hover:brightness-110 text-white rounded-xl font-medium transition-all shadow-lg shadow-secondary/20"
              >
                {isLoading ? "Création du compte..." : "Créer mon compte"}
              </Button>
              <p className="text-center text-sm text-slate-500 mt-2">
                Vous avez déjà un compte ?{" "}
                <Link href="/login" className="text-primary-50 font-medium hover:underline hover:text-secondary">
                  Se connecter
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}