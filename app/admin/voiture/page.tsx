"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
    ChevronRight, 
    PlusCircle, 
    Filter, 
    LayoutGrid, 
    Eye, 
    Pencil, 
    Trash2, 
    ChevronLeft 
} from "lucide-react";

export default function VoiturePage() {
    return (
        <>

          
                <div className="max-w-[1600px] mx-auto p-8">

                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">
                                <span>Fleet</span>
                                <ChevronRight size={10} />
                                <span className="text-on-surface">Vehicle Management</span>
                            </nav>
                            <h2 className="text-4xl font-black italic tracking-tighter text-black">Gestion de voiture</h2>
                        </div>
                        <Button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-black/90 transition-all active:scale-95 font-bold tracking-tight">
                            <PlusCircle size={20} />
                            Ajouter une voiture
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between aspect-[16/7]">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Fleet</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tighter">142</span>
                                <span className="text-xs text-amber-600 font-bold">+12%</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between aspect-[16/7]">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Available</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tighter">84</span>
                                <span className="text-xs text-emerald-600 font-bold">59%</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between aspect-[16/7]">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">In Service</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tighter">12</span>
                                <span className="text-xs text-amber-500 font-bold">8%</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between aspect-[16/7]">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Active Rentals</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tighter">46</span>
                                <span className="text-xs text-slate-400 font-bold">33%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-lowest rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
                        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100 bg-white">
                            <div className="flex items-center gap-4">
                                <Button className="px-4 py-2 bg-slate-100 text-black font-bold rounded-lg text-xs uppercase tracking-widest">All</Button>
                                <Button className="px-4 py-2 hover:bg-slate-50 text-slate-400 font-bold rounded-lg text-xs uppercase tracking-widest transition-colors">Luxury</Button>
                                <Button className="px-4 py-2 hover:bg-slate-50 text-slate-400 font-bold rounded-lg text-xs uppercase tracking-widest transition-colors">SUV</Button>
                                <Button className="px-4 py-2 hover:bg-slate-50 text-slate-400 font-bold rounded-lg text-xs uppercase tracking-widest transition-colors">Electric</Button>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="p-2 text-slate-400 hover:text-black transition-colors"><Filter size={20} /></Button>
                                <Button className="p-2 text-slate-400 hover:text-black transition-colors"><LayoutGrid size={20} /></Button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-left border-b border-slate-100">
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Vehicle Details</th>
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">License Plate</th>
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Category</th>
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Status</th>
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Daily Rate</th>
                                        <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">

                                    <tr className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    <img alt="Porsche 911" className="w-full h-full object-cover" data-alt="sleek black porsche 911 parked in a minimalist modern driveway with clean architecture and soft afternoon sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwiNcDFcd72qhaMrlcU2N-007AyUxWMVTuD4UiNgwK4DpqrB6Hg1yqo_0VRzuGnQJRtBLLXj-_gV5fiIMnPRbHN_hPmcqYRPfGqc2OnlNwKzGDO0spc4fx89ackynJ_xTyH4hTy1tZ3VzufuehHO6jzTuOe9T1xkmX2kDhfES9PUJGQs_8HeIOPPEpBOCdH4OV3el5-WeD0VrP2GmbSWUjVzShVRxmWcNCvlBvnVfUcWuEUIqhSysj0xvuAAlrWt5xcQ9myVCL-GNd" />
                                                </div>
                                                <div>
                                                    <p className="font-black italic tracking-tighter text-black group-hover:text-amber-600 transition-colors">Porsche 911 GT3</p>
                                                    <p className="text-xs text-slate-400">2023 Model • Sapphire Black</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-mono text-sm tracking-widest text-slate-600">CYR-911-LUX</td>
                                        <td className="px-8 py-4">
                                            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Luxury Sport</span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-xs font-bold text-emerald-600">Available</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-bold">$1,200 <span className="text-[10px] text-slate-400">/ day</span></td>
                                        <td className="px-8 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button className="p-2 hover:bg-amber-50 text-slate-400 hover:text-amber-600 rounded-lg transition-all" title="View Info">
                                                    <Eye size={18} />
                                                </Button>
                                                <Button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-black rounded-lg transition-all" title="Edit">
                                                    <Pencil size={18} />
                                                </Button>
                                                <Button className="p-2 hover:bg-error-container text-slate-400 hover:text-error rounded-lg transition-all" title="Delete">
                                                    <Trash2 size={18} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    <img alt="Mercedes G-Wagon" className="w-full h-full object-cover" data-alt="white mercedes g-wagon cruising through a high-end urban district with glass skyscrapers reflecting in its polished paint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBI7qSe915YKi4IyED7AoixufFaHIJxz9KJyeT15IpAZUO9WZZr1QDjVluz2HgcFpaWTIK5sekqRmV9o81dOJDoKcy8T4T19EWm1W7DljoQa3QNND9ad3bvm8KIOfQFkgdKXa0ker4i2D9hNuwOwr0PZSZItm3geu8bsZBxMbUtcW4zn9VmxnL_OjkSweTobMkafVD6-kieHM4Vv-qQ5Du1CdrIsH0tHGfZ6ROjXWCA7H75nhOC7jeOXwo-aNtJAaTzE9UUy1PQ6s" />
                                                </div>
                                                <div>
                                                    <p className="font-black italic tracking-tighter text-black group-hover:text-amber-600 transition-colors">Mercedes-Benz G 63</p>
                                                    <p className="text-xs text-slate-400">2024 Model • Polar White</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-mono text-sm tracking-widest text-slate-600">LUX-G63-V8</td>
                                        <td className="px-8 py-4">
                                            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Luxury SUV</span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                                <span className="text-xs font-bold text-amber-600">Rented</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-bold">$1,500 <span className="text-[10px] text-slate-400">/ day</span></td>
                                        <td className="px-8 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button className="p-2 hover:bg-amber-50 text-slate-400 hover:text-amber-600 rounded-lg transition-all"><Eye size={18} /></Button>
                                                <Button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-black rounded-lg transition-all"><Pencil size={18} /></Button>
                                                <Button className="p-2 hover:bg-error-container text-slate-400 hover:text-error rounded-lg transition-all"><Trash2 size={18} /></Button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    <img alt="Range Rover" className="w-full h-full object-cover" data-alt="front profile of a grey range rover in a high-tech showroom with neon accents and glossy floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj8O2JiFvgZH-BUKmoAIh1iRAokP8DHh9A72ruwedbhF7te1wbvTdwNcfq1jIE8foyVVt42kYKVSt62mszZ_A9OKJHueUP5J3Pueasuw3bvYi9WhurIpZQbJRs6Wk48vVrLJAU2CUqROw2RVub3wQjtQgk7NZ1iDsY2d-yIWxMas4mHuGi4RFK3l0c2lh4yiQaztXRhNGO4T_9sJp7Q0qFrREv4mLVz_TVXs4ef7-1CC2IXeTQjkPrpOxczvvjT-2-gJi_i5OQQ4U6" />
                                                </div>
                                                <div>
                                                    <p className="font-black italic tracking-tighter text-black group-hover:text-amber-600 transition-colors">Range Rover SV</p>
                                                    <p className="text-xs text-slate-400">2022 Model • Carpathia Grey</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-mono text-sm tracking-widest text-slate-600">SV-RR-777</td>
                                        <td className="px-8 py-4">
                                            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Executive SUV</span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                                <span className="text-xs font-bold text-slate-500">In Service</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-bold">$950 <span className="text-[10px] text-slate-400">/ day</span></td>
                                        <td className="px-8 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button className="p-2 hover:bg-amber-50 text-slate-400 hover:text-amber-600 rounded-lg transition-all"><Eye size={18} /></Button>
                                                <Button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-black rounded-lg transition-all"><Pencil size={18} /></Button>
                                                <Button className="p-2 hover:bg-error-container text-slate-400 hover:text-error rounded-lg transition-all"><Trash2 size={18} /></Button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    <img alt="Audi RS7" className="w-full h-full object-cover" data-alt="silver audi rs7 parked under moody streetlights at night, showing off sharp contours and premium finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHxFY-PEJB1WHwGnsKliAi1FR_tXt3hCtng7ZRz8HsGbqLUjli-HPLoEObpS78gCUq5B1jYOhkLjP8EUmaZx6XMG-gziNY6Y5pkt9m43Is3gWXxspEx4NYoW3xSj-AaYZJEXFy6tCfgfNO8Hojtz07vZ_qpXAavqcycAcknLksY0gqSFzVuq51mSALZmKDKtfMW9Ms4zmKVk4LzekIAPlKklNhEmLTlhOSFBultyXaTcaYgQzqGuSm-UjEp_UOH48XhglGTRJ2U9Zu" />
                                                </div>
                                                <div>
                                                    <p className="font-black italic tracking-tighter text-black group-hover:text-amber-600 transition-colors">Audi RS 7 Sportback</p>
                                                    <p className="text-xs text-slate-400">2023 Model • Nardo Grey</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-mono text-sm tracking-widest text-slate-600">AU-RS7-SIL</td>
                                        <td className="px-8 py-4">
                                            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Luxury Sedan</span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-xs font-bold text-emerald-600">Available</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 font-bold">$850 <span className="text-[10px] text-slate-400">/ day</span></td>
                                        <td className="px-8 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button className="p-2 hover:bg-amber-50 text-slate-400 hover:text-amber-600 rounded-lg transition-all"><Eye size={18} /></Button>
                                                <Button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-black rounded-lg transition-all"><Pencil size={18} /></Button>
                                                <Button className="p-2 hover:bg-error-container text-slate-400 hover:text-error rounded-lg transition-all"><Trash2 size={18} /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-8 py-6 flex items-center justify-between bg-slate-50 border-t border-slate-100">
                            <p className="text-xs text-slate-400 font-medium italic">Showing 1-4 of 142 vehicles</p>
                            <div className="flex items-center gap-2">
                                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><ChevronLeft size={16} /></Button>
                                <Button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</Button>
                                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white text-xs font-bold transition-all">2</Button>
                                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white text-xs font-bold transition-all">3</Button>
                                <span className="text-slate-400 px-1">...</span>
                                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><ChevronRight size={16} /></Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-primary-container p-8 rounded-[2rem] text-white flex flex-col justify-between overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black italic tracking-tighter mb-4">Fleet Intelligence Report</h3>
                                <p className="text-on-primary-container max-w-md leading-relaxed text-sm">Review maintenance schedules and upcoming safety inspections for your premium collection. 4 vehicles are due for service this week.</p>
                                <Button className="mt-8 px-6 py-3 bg-secondary text-on-secondary font-bold rounded-xl amber-glow transition-all active:scale-95">Download PDF Report</Button>
                            </div>

                            <div className="absolute right-[-10%] bottom-[-20%] w-2/3 opacity-20 pointer-events-none">
                                <svg className="w-full" viewBox="0 0 400 200">
                                    <path d="M0,150 Q50,130 100,160 T200,100 T300,120 T400,60 L400,200 L0,200 Z" fill="#feb300"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-surface-container-high p-8 rounded-[2rem] border border-slate-100">
                            <h3 className="text-xl font-black italic tracking-tighter mb-6 uppercase">Quick Filters</h3>
                            <div className="space-y-4">
                                <Label className="flex items-center justify-between p-4 bg-white rounded-xl cursor-pointer hover:border-amber-500 border border-transparent transition-all">
                                    <span className="text-sm font-bold">Needs Maintenance</span>
                                    <span className="px-2 py-1 bg-error-container text-error text-[10px] font-black rounded-md">12</span>
                                </Label>
                                <Label className="flex items-center justify-between p-4 bg-white rounded-xl cursor-pointer hover:border-amber-500 border border-transparent transition-all">
                                    <span className="text-sm font-bold">Expiring Insurance</span>
                                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-md">3</span>
                                </Label>
                                <Label className="flex items-center justify-between p-4 bg-white rounded-xl cursor-pointer hover:border-amber-500 border border-transparent transition-all">
                                    <span className="text-sm font-bold">Cleaning Required</span>
                                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-black rounded-md">8</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}