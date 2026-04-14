"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Plus, Star, Pencil, Trash2, Mountain, Zap, PlusCircle } from "lucide-react";


export default function CategoriePage() {
    return (
        <>

            <main className="pb-12 px-12">
                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-black mb-2">Gestion de catégorie</h2>
                            <p className="text-slate-500 font-medium">Organisez et supervisez votre flotte automobile par segments.</p>
                        </div>
                        <Button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-black/10">
                            <Plus size={18} />
                            Ajouter une catégorie
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <Card className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[320px] border-none">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-secondary-container/10 rounded-2xl">
                                    <Star size={30} className="text-secondary" />
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-black hover:bg-slate-100 transition-colors">
                                        <Pencil size={18} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-error hover:bg-error-container/20 transition-colors">
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">Luxe</h3>
                                <p className="text-slate-400 text-sm font-medium mb-4">Berlines et coupés de prestige</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-black text-black">12</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Véhicules</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                                <div className="flex -space-x-3">
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_mVg4PndlqfwTEyGyowuU7gFi0-RHQtaEpCDgFFIteXElTvJcufmwUAIL72gb99cYF6HWTsWAVNfLY0Nh1Cm4UabfH89O-J46WaSokS1qxEVC_Vhw-zSaCqwUnVVd5ol__nX8v5PJQ-kBT2MUmXcs4b9JHVrKpJwho5xOFcw84qxr6KmMa9qI6CmrkWgYxt43_PsbAMryZdpOHOI4NFtiPlC5-dy3bdcOMbp6xih5-j_g3qMa5BV9sWovGaqBxIMpTY9ri5AZYvEy" />
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVYjIJshBelOuG0LCew6iEsgok2ah74aqmFjSSlN0BlJ-FXqpvbPc3PmGagWTh1Nx3xHqbHmdF91WrQKLTw2tKyg_72BZ-0rwsCPQbqPygo1bs5polAjbAT33R6EAIFL2ZGxMulzv6HKJ2PqlYCyJMyXsFmSizEUDi0CK9l2ga7Kcrc88H_BQg2W4mobbKsSMhRwezh0r6Nrf8RRITskSMMGu7hUJUm2TpnDBrGdFi7P-5zbRPntw8VfjJGM-9pyTtPVebEKRHzPZ" />
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+10</div>
                                </div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-tighter cursor-pointer hover:underline">Voir la flotte</span>
                            </div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[320px] border-none">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-slate-100 rounded-2xl">
                                    <Mountain size={30} className="text-slate-600" />
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-black hover:bg-slate-100 transition-colors">
                                        <Pencil size={18} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-error hover:bg-error-container/20 transition-colors">
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">SUV</h3>
                                <p className="text-slate-400 text-sm font-medium mb-4">Puissance et confort tout-terrain</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-black text-black">24</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Véhicules</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                                <div className="flex -space-x-3">
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkXWaS-LYmc4HzXfwFyADlwGwuGQbB2ihA42QrSQ-cohwSWtbTbL1B5VQvsBCthhkH3hzxZDl5EOkffAhMKiNCuUtpO_aAjHPmPPTMLYb82zPe2X5wC2Py7lJ-oy0z4saq3jyDvidr3FRAFDH65rZWB8Sys5ozawSU-U0DIVZr7QjfMoPo1jRSAEFEqvinoRyRxn_6piLoTb0Tdp3MeK0zWZAu4w5kVdSlN7-n5qUYBv4UD3dFkQRj_ioJUts256sTjFiNA5tSSbC" />
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC90PiN2GD5sayOJnmfDpRtWantd7DgvJN6Xy4l9CxxMOw3Sl_pAaUwSS1kp4X9cc-B9BBEor-dZaY5UlO0VJpw2Ga1f-_vAyPkN5sU5X3pqCnMNtgsFeljUSN6DErxM4Wwp0TAM7mQRrG8dmlntu12JH4wzTc12F83B-O8bQxXlODuLRY0Wbj5J65_3njdXHHvPkuyIvQa40_adh9T-5N3H_XmgbNEoaf1KhwsipKiL2rAe3Ak4Ye2gJ_09W-43AP8OaygX_u6FWb-" />
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+22</div>
                                </div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-tighter cursor-pointer hover:underline">Voir la flotte</span>
                            </div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-3xl bg-primary text-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[320px] border-none">
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-white/10 rounded-2xl">
                                    <Zap size={30} className="text-secondary" />
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                                        <Pencil size={18} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white/40 hover:text-error hover:bg-error-container/20 transition-colors">
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">Sport</h3>
                                <p className="text-white/50 text-sm font-medium mb-4">Performance pure et adrénaline</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-black text-secondary">08</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mt-2">Véhicules</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                                <div className="flex -space-x-3">
                                    <img className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx-IJTfJX3f322zPitnlxU8QKrWo9MAFJW93XJf2jtVc-scvOcmqT2MYBovdCQaJyyJwFZOAa6YORE6e4PGvHc93THU9eDzDfB_4W0xUPvvBoKNLOJzKcTMY_7b2GDbcDe5P4cg-k2_KuRDB97bRazTh_SBPIzFAC1bNjC79j8nezl-Le6Nwr2rSbdaiPlpjMDOR4-XqsCdGdH3S_KsH9h6kzeZjQHg7-5gx-PLRu7QPWovQv92AqTkAHHRbgEUHyCTjP6kmMQiDy_" />
                                    <img className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5olV2kOdB978fOy7H56oc5WjFIoKEX48pDBWYwc42jcCX3XC0sKw34Mb1x7b9oL8ZDgH9bRkXSJZXEOF_JFTF7pOlqLljolQ9c8SQ0KlXp_D_6-t4zKcXyIS0nxjVv7-XJc5N5p26t0jvYjRGpozJWA12RANCIweXeAc24v2fnPdCAb9rjHtD4oBJVrT0M9V6cs9zr9SQ14aPus2XdeHVI2ah7ijzLQvpM2vJ08HugaeKC7klqLm_gKVEM25zFGYW8nF1essUmuxv" />
                                </div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-tighter cursor-pointer hover:text-white transition-colors">Voir la flotte</span>
                            </div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[320px] border-none">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-slate-100 rounded-2xl">
                                    <Zap size={30} className="text-slate-600" />
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-black hover:bg-slate-100 transition-colors">
                                        <Pencil size={18} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-error hover:bg-error-container/20 transition-colors">
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">Électrique</h3>
                                <p className="text-slate-400 text-sm font-medium mb-4">L'avenir de la mobilité premium</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-black text-black">15</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Véhicules</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                                <div className="flex -space-x-3">
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRtawU_aEsIdlLAD2f9nerpJZT7lGNqIgtagXS57RsLGI0GvO-eVE1VjS7L-sf3pnihxXVQMAB4Yd2GD-Zk9EHCzGQ-6DSGacjicbkXMeW4va96NYlxt_BVJaL_E4J8Fq7175yObgSAOUgtRxy0Acpb2QcYHtL1LmnTFcaK5LfdeFrvs-1fQbnpY7eSC84v2q8fAdcsGvcigawzYx09SjeOQNXZ-h9dzInmFUCNyXzjq3-VqcALI2MlfWAR-U6W_H6juMWKQHGEcE6" />
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6j2-UNCC4T6kRmXeFFO1fR5tzSgS-uyCuXKmlDQv998Rh2rtTdbpY4KS5M_SDosdJmGB2kso6IVCaVd4lWYcfl9FTBnYBAB6ITkR1S9EnwEc3TeX3EGCJUISfiJvVurcRko84CZyww9BKXIf5gIuiz1_fRqs4HAEKTdB0AYXy0GHLMEXOztxOTFQe7dhCWNniHJCb3cMMDk1t1MJbW40A3xrQDqt8nsjExdytKEIzh0Ho5sFen1ibteEmudYl5j4TQjOIDP1bM8n" />
                                </div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-tighter cursor-pointer hover:underline">Voir la flotte</span>
                            </div>
                        </Card>

                        <div className="group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white/30 p-8 min-h-[320px] hover:border-secondary/50 hover:bg-white/60 transition-all cursor-pointer">
                                <PlusCircle size={40} className="text-slate-400 group-hover:text-secondary mb-4" />
                            <span className="text-lg font-bold text-slate-400 group-hover:text-black">Nouvelle catégorie</span>
                            <p className="text-xs font-medium text-slate-300 mt-1">Cliquez pour configurer</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-white rounded-[2rem] p-10 shadow-2xl shadow-slate-200/50 flex flex-wrap gap-12 items-center">
                        <div className="flex-1 min-w-[200px]">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Distribution de la flotte</h4>
                            <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
                                <div className="h-full bg-secondary" style={{ width: '25%' }}></div>
                                <div className="h-full bg-black" style={{ width: '45%' }}></div>
                                <div className="h-full bg-amber-200" style={{ width: '30%' }}></div>
                            </div>
                            <div className="mt-4 flex gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Luxe</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-black"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">SUV</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-200"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Autres</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Catégories</p>
                                <p className="text-3xl font-black text-black tracking-tighter">09</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Véhicules</p>
                                <p className="text-3xl font-black text-black tracking-tighter">142</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Plus Louée</p>
                                <p className="text-lg font-bold text-secondary tracking-tighter">SUV Premium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}