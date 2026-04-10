"use client";

import { 
    Filter, 
    Upload, 
    FolderArchive, 
    FileText, 
    IdCard, 
    ShieldCheck, 
    LayoutGrid, 
    List, 
    Eye, 
    Download, 
    Trash2, 
    Image as ImageIcon,
    ChevronLeft,
    ChevronRight,
    Shield
} from "lucide-react";

export default function DocumentPage() {
    return (
        <>
            <div className="pb-10 px-12">

                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <nav className="flex text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">
                            <span>Admin</span>
                            <span className="mx-2">/</span>
                            <span className="text-amber-600">Document Management</span>
                        </nav>
                        <h2 className="text-4xl font-extrabold tracking-tighter text-black italic">Gestion des documents</h2>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-bold text-sm hover:bg-slate-800 transition-all active:scale-95">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-amber-500/20">
                            <Upload className="w-4 h-4" />
                            Add document
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 mb-12">

                    <div className="col-span-12 md:col-span-4 bg-primary-container p-8 rounded-xl text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <p className="text-amber-400 text-xs font-black uppercase tracking-widest mb-2">Total Storage</p>
                            <h3 className="text-5xl font-black mb-4 tracking-tighter">1.2 GB</h3>
                            <div className="w-full bg-white/10 h-1 rounded-full mb-4">
                                <div className="bg-amber-500 h-full w-[65%] rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>
                            </div>
                            <p className="text-slate-400 text-xs">842 files uploaded this month</p>
                        </div>
                        <FolderArchive className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-black">Agreements</h4>
                                <p className="text-2xl font-black text-slate-800">124</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                                <IdCard className="w-6 h-6 text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-black">ID Copies</h4>
                                <p className="text-2xl font-black text-slate-800">312</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-black">Insurance</h4>
                                <p className="text-2xl font-black text-slate-800">89</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="px-8 py-6 flex justify-between items-center border-b border-slate-50 bg-slate-50/30">
                        <h3 className="text-lg font-bold text-black">All Documents</h3>
                        <div className="flex gap-2">
                            <button className="p-2 text-slate-400 hover:text-amber-600 transition-colors">
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-amber-600 transition-colors bg-amber-50 rounded-md">
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left min-w-[1000px]">
                            <thead>
                                <tr className="text-[11px] uppercase tracking-wider text-slate-400 font-black">
                                    <th className="px-8 py-5">Document Name</th>
                                    <th className="px-8 py-5">Type</th>
                                    <th className="px-8 py-5">Assigned To</th>
                                    <th className="px-8 py-5">Date Uploaded</th>
                                    <th className="px-8 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">

                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-black">Rental_Agreement_LX702.pdf</p>
                                                <p className="text-[10px] text-slate-400">2.4 MB</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4">
                                        <span className="text-xs font-medium text-slate-600 px-3 py-1 bg-slate-100 rounded-full">Agreement</span>
                                    </td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 rounded-full object-cover" data-alt="portrait of a young smiling man with dark hair against a neutral backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAobh62IDqr4OyENIeQjRUiYQ6jnGBDS5OQTDVePAwXYsGnp5_IHhbWjwhM6R4lOt7BCYWF3quETMyPdmYawAUdLPvz99u0bPTGHrHIm0oilvC_mIBsQl7Nsnkw1OQHC46n6jiSnBuWeSukAXxzeKpEASbq40Fp1bp2y5TP-UBJ_jiYciiMN-N5M1N4-OIIpBf9cAZg1to1tY3LIf5EPZzXE1Abc0SCs6V6ltpyLvKkbjoPMFmmeVqhh7Ib_b5qc-LGWgcdeIRCoT77" />
                                            <span className="text-sm text-slate-700">Julian Casablancas</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-1.5 text-emerald-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold uppercase tracking-tighter">Verified</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:text-amber-600 transition-colors" title="View">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 hover:text-amber-600 transition-colors" title="Download">
                                                <Download className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 hover:text-error transition-colors" title="Delete">
                                                <Trash2 className="w-5 h-5 text-error/60 hover:text-error" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center">
                                                <ImageIcon className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-black">Passport_Copy_JSmith.jpg</p>
                                                <p className="text-[10px] text-slate-400">1.1 MB</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4">
                                        <span className="text-xs font-medium text-slate-600 px-3 py-1 bg-slate-100 rounded-full">ID Copy</span>
                                    </td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 rounded-full object-cover" data-alt="headshot of a smiling woman with warm light on her face and a soft natural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWJ8cMzFPThnjZv2OyhBEPHlQsZoIlWeuAqNYly0ALymoWLzS8TD9r3cl0UzHel9t6pla_Pjx1y2xAZZh0-N3URaZS-wea7M79Syp8UqjTFx9n3cog7TlsiWx6aER1XE7NS0HPDlf_HWZ-WB4S52k7-8-s-lrddgkujgfKEbrJleSwFv-K6zQqjWjByO7pvFWY__Jvjuqgwhie5U317Sd0pInh-xkvs4ua995xp6iVaJrvErwcw5uSX72oS-vnbqOhgcPtwudPNhZ" />
                                            <span className="text-sm text-slate-700">Jane Smith</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-sm text-slate-500">Oct 22, 2023</td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-1.5 text-amber-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            <span className="text-xs font-bold uppercase tracking-tighter">Pending</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Eye className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Download className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-error transition-colors"><Trash2 className="w-5 h-5 text-error/60" /></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-black">Insurance_Policy_2023_V12.pdf</p>
                                                <p className="text-[10px] text-slate-400">4.7 MB</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4">
                                        <span className="text-xs font-medium text-slate-600 px-3 py-1 bg-slate-100 rounded-full">Insurance</span>
                                    </td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 rounded-full object-cover" data-alt="professional portrait of a man with dark features and a short beard, wearing a formal shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi5q2EJNPKpx4Y4Al90aIUMoiZV7pbCR9JgMZ1-PUcbuvMlHCFHr46wYPMdZaEZHgN4ztt47iO80Q0YTpDlg1uGX_NE1H5TCdMH7TuBp2qijxmxQo__avOYmslyHkprSO1t4Lh_RljoQnwZ1t4tRNgBsIRnRn9bGho3o7Ex3v8xqgMTkHr35bKtdXgBdob33n7i-VivE8ZpsgkEPA-tWIjdOffK5ZxTpvtWYmVgZnFHVA5_oKospkcamfZTV_cmDglcDC_kMA85N6l" />
                                            <span className="text-sm text-slate-700">Marcus Wright</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-sm text-slate-500">Oct 20, 2023</td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-1.5 text-emerald-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold uppercase tracking-tighter">Verified</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Eye className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Download className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-error transition-colors"><Trash2 className="w-5 h-5 text-error/60" /></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-slate-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-black">Maintenance_Report_Tesla_X.docx</p>
                                                <p className="text-[10px] text-slate-400">0.8 MB</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4">
                                        <span className="text-xs font-medium text-slate-600 px-3 py-1 bg-slate-100 rounded-full">Maintenance</span>
                                    </td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 rounded-full object-cover" data-alt="close up headshot of a woman with freckles and long dark hair, natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNsFx2IOnPQUR_B3YGDajQj7uQKImS9A_o5r5kpdd3c5ABkgJ3CzMOBT9EKCtSaj_zVBvxeel-PkXqOBIsURXPQM7lB94IZdwNwW1Z54exANhF4TurZOXsXBSdZUySyzgNR8hdqW7Wj-pbRG7xYniKfgxuM3ejRtGpdnhiJE39kuEUWFjDBNunr51f0GaGcobK7-2Z-jJZS7U8EWChTFqEPzTZRxTRKuRV3U75fAlsjZISq3fF49f14lPC9hdrE-r2dh7ORBMr8PwN" />
                                            <span className="text-sm text-slate-700">Alice Freeman</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-sm text-slate-500">Oct 18, 2023</td>
                                    <td className="px-8 py-4">
                                        <div className="flex items-center gap-1.5 text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                            <span className="text-xs font-bold uppercase tracking-tighter">Archived</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Eye className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-amber-600 transition-colors"><Download className="w-5 h-5" /></button>
                                            <button className="p-2 hover:text-error transition-colors"><Trash2 className="w-5 h-5 text-error/60" /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-xs text-slate-400">Showing <span className="font-bold text-slate-700">1-4</span> of 528 documents</p>
                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-slate-100 rounded transition-all"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="w-8 h-8 flex items-center justify-center bg-secondary text-on-secondary rounded text-xs font-bold">1</button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">2</button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">3</button>
                            <span className="mx-1 text-slate-300">...</span>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">48</button>
                            <button className="p-2 hover:bg-slate-100 rounded transition-all"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex gap-8">
                    <div className="flex-1 bg-gradient-to-br from-amber-500 to-amber-600 p-1 rounded-2xl shadow-xl shadow-amber-500/10">
                        <div className="bg-primary-container rounded-[calc(0.75rem+2px)] p-8 flex items-center gap-10">
                            <div className="relative">
                                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
                                    <Shield className="w-12 h-12 text-amber-500" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-white italic tracking-tight mb-1">Secure Auto-Archive</h3>
                                <p className="text-slate-400 text-sm max-w-lg">Enable automatic cloud sync and secure archiving for expired rental agreements to stay compliant with local data regulations.</p>
                            </div>
                            <button className="px-8 py-3 bg-white text-primary font-black rounded-lg hover:bg-slate-100 transition-all uppercase tracking-widest text-xs">Configure</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}