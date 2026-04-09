"use client";

import Image from "next/image";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
});

export default function ForgotPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    setIsLoading(true);
    try {
      console.log("Forgot password value:", values);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Demande envoyée", {
        description: "Si un compte existe, vous recevrez un email de réinitialisation.",
      });

      // Simulation: redirection after a delay or just stay there
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
            alt="Luxury modern car details"
            className="w-full h-full object-cover opacity-70 mix-blend-luminosity brightness-75 transition-transform duration-10000 hover:scale-110"
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary-50"></span>
            <p className="font-poppins-regular text-[10px] tracking-[0.2em] text-primary-50 font-bold uppercase">
              Security First
            </p>
          </div>
          <h1 className="font-poppins-bold text-6xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 italic">
            RESTORE<br />ACCESS.
          </h1>
          <p className="font-poppins-regular text-gray-300 text-lg leading-relaxed max-w-md">
            Sécurisez votre compte et retrouvez l'accès à votre garage personnel en quelques instants.
          </p>
        </div>
      </section>

      {/* Right Side: Forgot Password Form */}
      <section className="md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 lg:p-24 bg-slate-50 min-h-screen md:h-screen ">
        <div className="w-full md:w-[500px] h-auto md:mt-16 pb-12">
          <Card className="w-full bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative animate-in fade-in duration-700">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center justify-between mb-4">
                <Link
                  href="/login"
                  className="flex items-center text-slate-400 hover:text-slate-900 transition-all group"
                  title="Retour à la connexion"
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
                  Mot de passe oublié
                </CardTitle>
                <CardDescription className="text-slate-500 font-poppins-regular text-xs uppercase tracking-widest opacity-70">
                  Récupérez l'accès à votre compte
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-slate-500 mb-6 text-center leading-relaxed">
                Entrez votre adresse email et nous vous enverrons des instructions pour réinitialiser votre mot de passe.
              </p>
              <Form {...form}>
                <form
                  id="forgot-password-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Adresse Email</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                              <Mail size={16} />
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
                </form>
              </Form>
            </CardContent>
            <CardFooter className="px-0 pt-6 flex-col gap-3">
              <Button
                form="forgot-password-form"
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-secondary hover:bg-secondary/80 text-white rounded-xl font-medium transition-all shadow-lg shadow-secondary/20"
              >
                {isLoading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
              </Button>
              <p className="text-center text-sm text-slate-500 mt-2">
                Vous vous en souvenez ?{" "}
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
