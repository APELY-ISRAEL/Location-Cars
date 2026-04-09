"use client";

import Image from "next/image";
import { z } from "zod";
import Link from "next/link";
import { useState, useEffect } from "react";
import { KeyRound, ArrowLeft } from "lucide-react";
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

const verifyOtpSchema = z.object({
  otp: z.string().length(6, {
    message: "Le code doit contenir exactement 6 chiffres",
  }),
});

export default function VerifyOTP() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const form = useForm<z.infer<typeof verifyOtpSchema>>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof verifyOtpSchema>) {
    setIsLoading(true);
    try {
      console.log("OTP Verification values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Vérification réussie", {
        description: "Votre compte a été vérifié avec succès.",
      });

      router.push("/login");
    } catch {
      toast.error("Code invalide", {
        description: "Le code de vérification est incorrect ou a expiré.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleResendCode = () => {
    setTimer(60);
    toast.info("Nouveau code envoyé", {
      description: "Vérifiez votre boîte de réception.",
    });
  };

  return (
    <main className="min-h-screen md:h-screen w-full flex flex-col md:flex-row md:overflow-hidden bg-white">
      {/* Left Side: Cinematic Image & Branding */}
      <section className="hidden md:flex md:w-1/2 bg-gray-900 relative items-end p-16 overflow-hidden h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Security technology background"
            className="w-full h-full object-cover opacity-70 mix-blend-luminosity brightness-75 transition-transform duration-10000 hover:scale-110"
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary-50"></span>
            <p className="font-poppins-regular text-[10px] tracking-[0.2em] text-primary-50 font-bold uppercase">
              Secure Auth
            </p>
          </div>
          <h1 className="font-poppins-bold text-6xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 italic">
            VERIFY<br />IDENTITY.
          </h1>
          <p className="font-poppins-regular text-gray-300 text-lg leading-relaxed max-w-md">
            Une étape simple pour garantir la sécurité de votre flotte privée. Entrez le code reçu pour continuer.
          </p>
        </div>
      </section>

      {/* Right Side: OTP Form */}
      <section className="md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 lg:p-24 bg-slate-50 min-h-screen md:h-screen">
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
                  Vérification par code
                </CardTitle>
                <CardDescription className="text-slate-500 font-poppins-regular text-xs uppercase tracking-widest opacity-70">
                  Entrez le code OTP à 6 chiffres
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-slate-500 mb-8 text-center leading-relaxed">
                Veuillez entrer le code de vérification que nous venons d'envoyer à votre adresse email.
              </p>
              <Form {...form}>
                <form
                  id="verify-otp-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest font-poppins-semibold text-slate-400">Code de vérification</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-50 transition-colors">
                              <KeyRound size={16} />
                            </div>
                            <Input
                              type="text"
                              maxLength={6}
                              placeholder="000000"
                              className="w-full pl-10 h-12 text-center text-lg tracking-[0.5em] border-slate-100 rounded-xl focus:border-primary-50/50 transition-all bg-slate-50/30 font-bold"
                              {...field}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                if (val.length <= 6) field.onChange(val);
                              }}
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
            <CardFooter className="px-0 pt-8 flex-col gap-4">
              <Button
                form="verify-otp-form"
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-secondary hover:bg-secondary/80 text-white rounded-xl font-medium transition-all shadow-lg shadow-secondary/20"
              >
                {isLoading ? "Vérification..." : "Vérifier le code"}
              </Button>
              
              <div className="text-center w-full">
                {timer > 0 ? (
                  <p className="text-xs text-slate-400">
                    Renvoyer le code dans <span className="font-medium text-slate-600 font-mono">{timer}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResendCode}
                    className="text-xs text-primary-50 font-medium hover:underline hover:text-secondary transition-colors"
                  >
                    Renvoyer un nouveau code
                  </button>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
