"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
    Globe, 
    Settings,
    Check
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const siteSettingsSchema = z.object({
  currency: z.string().min(1, "Veuillez sélectionner une devise"),
  language: z.string().min(1, "Veuillez sélectionner une langue"),
  supportEmail: z.string().email("Adresse email invalide"),
  address: z.string().min(5, "L'adresse doit contenir au moins 5 caractères"),
});

type SiteSettingsValues = z.infer<typeof siteSettingsSchema>;

export default function SettingPage() {
  const form = useForm<SiteSettingsValues>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues: {
      currency: "USD",
      language: "en",
      supportEmail: "concierge@cyriscars.com",
      address: "1200 Velocity Drive, Suite 500, Midnight District, NY 10012",
    },
  });

  function onSubmit(data: SiteSettingsValues) {
    console.log(data);
    toast.success("Paramètres mis à jour", {
        description: "Les informations de configuration du site ont été enregistrées avec succès.",
        icon: <Check className="w-4 h-4 text-emerald-500" />
    });
  }

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-slate-800 mb-2">Settings & Configuration</h2>
        <p className="text-on-surface-variant font-body">Manage your global site parameters, user permissions, and technical integrations.</p>
      </div>

      <div className="gap-8 items-start">
        <div className="space-y-8">
          <Card className="border-none shadow-sm shadow-slate-200/50 overflow-hidden">
            <CardHeader className="bg-surface-container-lowest border-b border-surface-container-high pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Settings className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold font-headline">Site Configuration</CardTitle>
                  <CardDescription className="font-body">Basic information and preferences for your platform.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="currency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Default Currency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-surface-container-highest border-none h-12 text-sm font-medium focus:ring-secondary transition-all">
                                <SelectValue placeholder="Select currency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="USD">USD - United States Dollar</SelectItem>
                              <SelectItem value="EUR">EUR - Euro</SelectItem>
                              <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Primary Language</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-surface-container-highest border-none h-12 text-sm font-medium focus:ring-secondary transition-all">
                                <SelectValue placeholder="Select language" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">English (United States)</SelectItem>
                              <SelectItem value="fr">French (International)</SelectItem>
                              <SelectItem value="es">Spanish (ES)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="supportEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Support Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="concierge@cyriscars.com" 
                                {...field} 
                                className="w-full bg-surface-container-highest border-none h-12 text-sm font-medium focus:ring-secondary transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Headquarters Address</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Enter address..." 
                                {...field} 
                                rows={3}
                                className="w-full bg-surface-container-highest border-none text-sm font-medium focus:ring-secondary transition-all resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <Button 
                        type="submit" 
                        className="bg-secondary hover:bg-secondary/90 text-white font-bold py-6 px-10 rounded-xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                    >
                        Update Site Info
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}