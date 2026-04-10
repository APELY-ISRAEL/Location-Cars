/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Users,
    BookOpen,
    GraduationCap,
    TrendingUp,
    Edit,
    Fuel,
    Wrench,
    CheckCircle2,
    Sparkles,
    LineChart,
    ArrowRight,
    MoreHorizontal
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface DashboardStats {
    totalRevenue: number;
    activeFleet: number;
    totalFleet: number;
    newBookings: number;
    revenueData: Array<{ day: string; amount: number }>;
}


export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation('student')
    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const response = await fetch("/api/admin/dashboard");
            const data = await response.json();

            if (response.ok) {
                setStats(data);
            }
        } catch (error) {
            console.error("Erreur lors du chargement des données:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-50"></div>
            </div>
        );
    }

    return (
    <>
        <div className="px-12 py-10 space-y-10">
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group shadow-sm transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <p className="text-slate-500 text-xs font-bold tracking-[0.1em] uppercase mb-2">Total Revenue</p>
                    <h3 className="text-4xl font-black text-primary tracking-tighter mb-4">$428,950.00</h3>
                    <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                        <TrendingUp className="w-4 h-4" />
                        <span>12.4% vs last month</span>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-secondary/20 transition-all">
                    <p className="text-slate-500 text-xs font-bold tracking-[0.1em] uppercase mb-2">Active Fleet</p>
                    <h3 className="text-4xl font-black text-primary tracking-tighter mb-4">184<span className="text-lg text-slate-400 font-medium ml-2">/ 200</span></h3>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" ></div>
                    </div>
                    <p className="text-slate-400 text-xs mt-3">High utilization: 92% capacity</p>
                </div>
                <div className="bg-[#0d1c32] p-8 rounded-xl shadow-xl relative text-white">
                    <div className="absolute inset-0 opacity-10"></div>
                    <p className="text-slate-400 text-xs font-bold tracking-[0.1em] uppercase mb-2">New Bookings</p>
                    <h3 className="text-4xl font-black tracking-tighter mb-4">52</h3>
                    <div className="flex items-center gap-2 text-[#feb300] text-sm font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>8 priority requests today</span>
                    </div>
                    <div className="mt-4 flex -space-x-3">
                        <img alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0d1c32] object-cover" data-alt="Portrait of a young business man smiling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlsdDcW5St7pslp-I32mk_YN3PIuTonoI7WZhPBeKL3YL1UA8MsUw8tWr6uwT4R93B2UOUTcj-EC_qhE6Dpr8qaD-UjNYfbz9Gm6sxl0wtezosja5P6wT2DwlJ3yljzCRdLgi0EJXjo47QLWDkPJ8ty3e6TQFioxI68epq4RUy2QexDDbJOuJEYu2TQjaXsHqrsYxJ-OPUMoftmL-9E3p36Qm9NPwfK-cJS45w-Y_LuwR7yQay5u6oh7aOsFZ__DKEuIulflgihRd9" />
                        <img alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0d1c32] object-cover" data-alt="Portrait of a professional woman with blonde hair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIOdjJsbhApMLlhQ8QS3S13pNcHbtVKSN9S6O3VgyfbhQaPhC7pnzkfKEnzoPM-CEGosmw1yOeFloRk4LvTIPvwLyPQTVFxLriZ0Q2SS8n4oZuhF-zlCumySoXstYC_BpX4XFHPchxjTsHNpzmW0dH1ENqNaqXIbkUVCK5I_67JvTrtYNFfOfgQus7IkyI-uWlUOE0uYefutirEJZuFkIMe45SmgmHU8tcMGh5LDetTajQtOfsv9m89k5TGnHCYWMZClbfZ_qF0PyR" />
                        <img alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0d1c32] object-cover" data-alt="Portrait of a middle aged executive man." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk0tq2mS2RcHTgn4VGAuXvMCiULBQvD0104j5mCQbkpOimJGOZt0pGpE7pWY2ElOb9diReFBU2tCMaC6fUZHN6e5TBfNueK4wsSFNQ8rGTIcPqRnkPikc9xr9zAICJJhx0rTVXTZgVsx9NRRJSmFn0dv6xLUhP38xlWBi-G3KxJkvgALpgcOAHdXDnFVQ8Npz4C9CVwCc2Jw1c8_vnrwGleX6rDB5yFGqxXnSffc8dkq4X72ujFFa2dVhN8utwn1bT68aj-hJ-k5wK" />
                        <div className="w-8 h-8 rounded-full bg-secondary text-[#0d1c32] flex items-center justify-center text-[10px] font-black border-2 border-[#0d1c32]">+49</div>
                    </div>
                </div>
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
                <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-2xl font-black tracking-tighter text-primary">Revenue Performance</h2>
                            <p className="text-slate-500 text-sm">Real-time earnings across all vehicle tiers</p>
                        </div>
                        <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
                            <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-primary">Weekly</button>
                            <button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:text-primary transition-colors">Monthly</button>
                        </div>
                    </div>
                   
                    <div className="relative h-64 flex items-end gap-4 overflow-hidden pt-10">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="border-b border-outline-variant/10 w-full h-0"></div>
                            <div className="border-b border-outline-variant/10 w-full h-0"></div>
                            <div className="border-b border-outline-variant/10 w-full h-0"></div>
                            <div className="border-b border-outline-variant/20 w-full h-0"></div>
                        </div>
                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[40%] transition-all hover:bg-secondary/40 relative group">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12k</div>
                        </div>
                        <div className="flex-1 bg-secondary rounded-t-lg h-[75%] transition-all hover:h-[80%]"></div>
                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[55%] transition-all hover:bg-secondary/40"></div>
                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[90%] transition-all hover:bg-secondary/40"></div>
                        <div className="flex-1 bg-secondary rounded-t-lg h-[65%]"></div>
                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[45%]"></div>
                        <div className="flex-1 bg-secondary rounded-t-lg h-[85%]"></div>
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>
              
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col">
                    <h2 className="text-2xl font-black tracking-tighter text-primary mb-6">Fleet Quick Status</h2>
                    <div className="space-y-6 flex-1">
                        <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-transparent hover:border-blue-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Fuel className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary">In Service</p>
                                    <p className="text-xs text-slate-500">Scheduled maintenance</p>
                                </div>
                            </div>
                            <span className="text-lg font-black text-primary">12</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-transparent hover:border-orange-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary">Workshop</p>
                                    <p className="text-xs text-slate-500">Critical repairs</p>
                                </div>
                            </div>
                            <span className="text-lg font-black text-primary">4</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-transparent hover:border-green-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary">Ready</p>
                                    <p className="text-xs text-slate-500">Available for rent</p>
                                </div>
                            </div>
                            <span className="text-lg font-black text-primary">168</span>
                        </div>
                    </div>
                    <button className="mt-8 w-full py-4 border-2 border-outline-variant/20 rounded-xl text-xs font-black uppercase tracking-widest hover:border-secondary transition-all">
                        Full Fleet Audit
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           
                <div className="md:col-span-3 bg-[#0d1c32] rounded-2xl overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-8">
                        <LineChart className="text-[#feb300] w-12 h-12 opacity-20" />
                    </div>
                    <div className="p-10 flex flex-col h-full">
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 bg-secondary text-[#0d1c32] text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Strategic AI Insights</span>
                            <h2 className="text-4xl font-black tracking-tighter text-white max-w-lg leading-tight">Fleet Intelligence Report: Summer Optimization</h2>
                            <p className="text-slate-400 mt-4 max-w-md">Our predictive models suggest a 22% increase in Luxury SUV demand for the upcoming coastal season. Reallocation recommended.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-auto">
                            <div className="border-l-2 border-secondary/30 pl-6">
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Recommended Stock</p>
                                <p className="text-white font-bold text-xl">+15 Units</p>
                            </div>
                            <div className="border-l-2 border-secondary/30 pl-6">
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Est. Revenue Lift</p>
                                <p className="text-white font-bold text-xl">$84,200</p>
                            </div>
                            <div className="border-l-2 border-secondary/30 pl-6 flex items-center">
                                <button className="text-secondary text-xs font-black uppercase tracking-tighter flex items-center gap-2 group">
                                    Execute Strategy
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
            
                    <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-20 bg-gradient-to-t from-secondary to-transparent pointer-events-none"></div>
                </div>
           
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col">
                    <div className="h-48 relative overflow-hidden">
                        <img alt="Luxury Car Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" data-alt="Close-up of a sleek black Porsche 911 tail light and spoiler with urban neon lights reflecting on its polished metallic surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnpwS3Pfw5QUDV1EKhMHIieakO6w343eAbtM1vAqhHvIIm0Op7XU7fBWjVPBlkRWl_rKVlvSsmGZE4i840phcBkg0GHS3w9ODF-xSLdSlIsgUvvXrP0Yd7E15eGTJgT9NcpktLgkvESUIAoJ7Zei66xOC2cftiUivJsnVRbbdlx5j8cNUSuFqZcnSqMx9t5-piQ6C_E2-hC7BWGQ7N6YJJ_3PRdnF2rPhyIj8BIrcFTR_V3DEstJoxn7BGMArBzW5cnGyOM1a3ktCn" />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-primary">Live CCTV: Bay 04</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-sm font-bold text-primary mb-2">Arrival Check-in</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">Unit #C-9042 (Taycan Turbo S) has just entered the sanitization zone.</p>
                        <div className="flex items-center gap-2 text-[10px] font-black text-secondary tracking-widest uppercase">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
                            Processing...
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="px-10 py-8 border-b border-surface-container-high flex justify-between items-center">
                    <h2 className="text-2xl font-black tracking-tighter text-primary">Recent Reservations</h2>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <MoreHorizontal className="w-6 h-6" />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-surface text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                <th className="px-10 py-5">Customer</th>
                                <th className="px-10 py-5">Vehicle</th>
                                <th className="px-10 py-5">Duration</th>
                                <th className="px-10 py-5">Revenue</th>
                                <th className="px-10 py-5 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-high">
                            <tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                                <td className="px-10 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/10">
                                            <img alt="User" data-alt="Portrait of a young businessman in professional attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiRvTFN7eGtzi-5dnSLQuinEPX4zmXqgSgQ-TuDkqGf95ozNoHyzTKo7mZ5N6YizicTnnKeQUisqs6bvDMwA2BuK6WsANHcyziS1aRpgOwHbSd4LdRZhYM0CLO1PP3FR7uyp7vMFJWZz-kIAljJe5d7ZWM6sZSxa2rbbGx-1z6dpHAlR34tDm_nplpwjKGncbz8R6SdFX0PW25RkVc1bV1qPr5uWpR5fozZcIy9DDWxnzaGEMk0Wynuc13g_vMcN825dRwahJbiknp" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-primary">Julian Thorne</p>
                                            <p className="text-xs text-slate-400">Prime Member</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-bold text-primary">Aston Martin DB11</p>
                                    <p className="text-xs text-slate-400">AM-2023-DB</p>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-bold text-primary">3 Days</p>
                                    <p className="text-xs text-slate-400">Aug 14 - Aug 17</p>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-black text-primary">$4,250.00</p>
                                </td>
                                <td className="px-10 py-6 text-right">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">Confirmed</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                                <td className="px-10 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/10">
                                            <img alt="User" data-alt="Portrait of a female corporate executive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQthonR-w56_PEkMGR3se2iVB7YBr6R6dfXbCbkxYTDXWsfW_JZFvLCcdx5eb4I3iNe1j7B_4Yt9bYQ28I4ylucyeVzYzxZ2o9YyzQFR0Qiko8L39Bruo_nmdWocSC1tlNanWpUoj1AW6siv5rzlUGXVvNBntfwum9pmz2wA3z1ytavRskymWA_5BdT8i8hIguk7jVbscjEhw-CuJwbrCUQdkJ8tqCF8foX8eVcU7hR0f-KVAp6h934aJh3ctee5fLq9Nka7noKly6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-primary">Elena Rodriguez</p>
                                            <p className="text-xs text-slate-400">Business Elite</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-bold text-primary">Tesla Model S Plaid</p>
                                    <p className="text-xs text-slate-400">TS-2024-PL</p>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-bold text-primary">5 Days</p>
                                    <p className="text-xs text-slate-400">Aug 15 - Aug 20</p>
                                </td>
                                <td className="px-10 py-6">
                                    <p className="text-sm font-black text-primary">$2,800.00</p>
                                </td>
                                <td className="px-10 py-6 text-right">
                                    <span className="px-3 py-1 bg-secondary text-[#0d1c32] text-[10px] font-black uppercase tracking-widest rounded-full">Pending</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-8 text-center bg-surface-container-low/30">
                    <button className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">View All 2,408 Transactions</button>
                </div>
            </div>
        </div>
    </>
  );
}