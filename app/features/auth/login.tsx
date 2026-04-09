"use client";

import Image from "next/image";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, User, Lock, ArrowLeft } from "lucide-react";
import BaseButton from "@/components/BaseButton";
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
import { Label } from "@/components/ui/label";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  const formSchema = z.object({
    email: z.string().email({
      message: "Veuillez entrer une adresse email valide",
    }),
    password: z.string().min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError("");

    try {
      // Simulation d'une connexion réussie (frontend uniquement)
      console.log("Form values:", values);

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Connexion réussie", {
        description: "Redirection en cours...",
      });

      // Redirection après succès
      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch {
      setError("Erreur réseau");
      toast.error("Erreur réseau", {
        description: "Veuillez vérifier votre connexion",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left Side: Cinematic Image & Branding */}
      <section className="hidden md:flex md:w-1/2 bg-gray-900 relative items-end p-16 overflow-hidden h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Luxury Porsche interior"
            className="w-full h-full object-cover opacity-70 mix-blend-luminosity brightness-75"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary-50"></span>
            <p className="font-poppins-regular text-[10px] tracking-[0.2em] text-primary-50 font-bold uppercase">
              Elite Car Experience
            </p>
          </div>
          <h1 className="font-poppins-bold text-6xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 italic">
            CYRIS<br />CARS.
          </h1>
          <p className="font-poppins-regular text-gray-300 text-lg leading-relaxed max-w-md">
            Accédez à votre garage d'élite. Sécurisez votre prochain voyage avec notre flotte de véhicules de haute performance.
          </p>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 lg:p-24 bg-slate-50 h-screen overflow-hidden">
        <div className="w-full max-w-[500px] h-auto">

          <Card className="w-full bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative animate-in fade-in duration-700">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center justify-between mb-4">
                <Link
                  href="/"
                  className="flex items-center text-slate-400 hover:text-slate-900 transition-all group"
                  title="Retour à l'accueil"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <div className="opacity-80 text-center">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={40}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1 items-center text-center">
                <CardTitle className="text-2xl font-poppins-bold text-slate-900 tracking-tight">
                  Connexion
                </CardTitle>
                <CardDescription className="text-slate-500 font-poppins-regular text-[10px] uppercase tracking-widest opacity-70">
                  Accédez à votre garage d'élite
                </CardDescription>
              </div>
              
            </CardHeader>
            <CardContent className="p-0">
              <Form {...form}>
                <form
                  id="login-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                              <User size={16} />
                            </div>
                            <Input
                              type="email"
                              placeholder="votre@email.com"
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
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Security Key</FormLabel>
                        </div>
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
                  <div className="flex items-center justify-end">
                    <Link href="/forgot-password" className="text-primary-50 font-italic text-xs hover:underline">
                      Mot de passe oublié ?
                    </Link> 
                  </div>

                  {error && (
                    <div className="text-red-500 text-xs text-center bg-red-50 py-3 rounded-lg border border-red-100">
                      {error}
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
            <CardFooter className="px-0 flex-col gap-3">
              <Button 
                form="login-form"
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 bg-secondary hover:bg-secondary/80 text-white rounded-xl font-medium transition-all shadow-lg shadow-secondary/20"
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>

              <p className="text-center text-sm text-slate-500 mt-2">
                Vous n'avez pas de compte ?{" "}
                <Link href="/register" className="text-primary-50 font-medium hover:underline hover:text-secondary">
                  S'inscrire
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Login;