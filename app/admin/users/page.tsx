"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, ShieldCheck, Filter, ChevronDown, ChevronLeft, ChevronRight, Pencil, Trash2, X } from "lucide-react";



export default function UsersPage() {
    return (
        <>
            <main className="p-8 min-h-screen">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-slate-800 mb-2">User Management</h2>
                        <p className="text-on-surface-variant font-body">Manage permissions, roles, and account access for Cyris Luxury platform.</p>
                    </div>
                    <Button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-headline font-bold text-sm shadow-lg shadow-amber-500/20 hover:bg-secondary/80  active:scale-95 transition-all duration-200">
                        <Plus size={18} />
                        Create Account
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <Card className="bg-surface-container-lowest border-none shadow-sm">
                        <CardContent className="p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Users</p>
                            <p className="text-3xl font-black text-slate-800">1,284</p>
                            <div className="mt-4 flex items-center gap-2 text-emerald-600 text-xs font-bold">
                                <TrendingUp size={14} />
                                +12% from last month
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-surface-container-lowest border-none shadow-sm">
                        <CardContent className="p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Active Now</p>
                            <p className="text-3xl font-black text-slate-800">42</p>
                            <div className="mt-4 flex items-center gap-2 text-amber-600 text-xs font-bold">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                Live Sessions
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-surface-container-lowest border-none shadow-sm">
                        <CardContent className="p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Pending Approval</p>
                            <p className="text-3xl font-black text-slate-800">08</p>
                            <div className="mt-4 text-slate-400 text-xs font-medium">Requires attention</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-surface-container-lowest border-2 border-amber-500/10 shadow-sm">
                        <CardContent className="p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Platform Status</p>
                            <p className="text-3xl font-black text-amber-600">Secure</p>
                            <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs font-bold">
                                <ShieldCheck size={14} />
                                All systems operational
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden mb-12 border-none">
                    <div className="p-6 border-b border-surface-container-highest flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <Button variant="ghost" className="bg-surface-container-low px-4 py-2 h-auto rounded-full flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-all">
                                <Filter size={14} />
                                Filter by: All Roles
                            </Button>
                            <Button variant="ghost" className="bg-surface-container-low px-4 py-2 h-auto rounded-full flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-all">
                                Latest Activity
                                <ChevronDown size={14} />
                            </Button>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400">
                            <p className="text-xs font-medium">Showing 1-10 of 1,284</p>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 transition-colors"><ChevronLeft size={20} /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 transition-colors"><ChevronRight size={20} /></Button>
                            </div>
                        </div>
                    </div>

                    <div className="no-scrollbar">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-surface-container-low/50 border-none hover:bg-surface-container-low/50">
                                    <TableHead className="px-8 py-4 h-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant">User Identity</TableHead>
                                    <TableHead className="px-8 py-4 h-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Access Level</TableHead>
                                    <TableHead className="px-8 py-4 h-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</TableHead>
                                    <TableHead className="px-8 py-4 h-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Joined Date</TableHead>
                                    <TableHead className="px-8 py-4 h-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="hover:bg-slate-50/50 transition-colors group border-surface-container-low">
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
                                                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-CqYVIdBqEdbOuZdwAlR2Yo2Zj3e4VtpHq-6TvJ1POVSRs3LbpcHzkIV8JuIuD_S9PoSnenq8EbrbUOu-bRUE6kpX8ugJs3TyqKQ9kNZUfqGNkKkUWW3uCBXsc2hO8nDrvx61tfJUnv5BYjwvFUAXPs_S1SANQBZhznzJfir1R0M4HQxseURHM598f3bwxtZA8NwGZJwFTTUgLXBVymPXGQcitqDW3CIHglJV3MTDHuuxNl42z-m-6o-EdKAKnImIWanRVFwgCYRc" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">Alexander Thorne</p>
                                                <p className="text-xs text-on-surface-variant font-body">a.thorne@cyris.com</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <Badge variant="secondary" className="px-3 py-1 bg-primary text-secondary text-[10px] font-black uppercase tracking-tighter rounded-full border-none">Administrator</Badge>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold text-emerald-700">Active</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-xs text-on-surface-variant font-medium">Oct 12, 2023</TableCell>
                                    <TableCell className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all">
                                                <Pencil size={18} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all">
                                                <Trash2 size={18} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow className="hover:bg-slate-50/50 transition-colors group border-surface-container-low">
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-slate-200 flex items-center justify-center">
                                                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL40VxDtCgymIu8vRn-pcppXofcXOK9a4R8owMftsIzVHUWfRJOKG0Jd6GEXw4iWqpnkkeeSEfIgUEhHALKcdT44Rczm5BTT06jY-BGN-tf759oLeerrfMKb9yASDMH7po4GpEYyLSttNqqg6M2rfshunNnIr4YYJnlEXvwGo8z9OTDM491TarzdEYuDD3jbKn2XVy74e0WVwHQyeZR-758KXB0z6TiztDXlx0aoPHrIaqamIyts7KhLrCbq2QJtbgr8mr_-PGF9YV" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">Julianne Vose</p>
                                                <p className="text-xs text-on-surface-variant font-body">jvose@luxetravel.io</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <Badge variant="secondary" className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-[10px] font-black uppercase tracking-tighter rounded-full border border-outline-variant/30">Client</Badge>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold text-emerald-700">Active</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-xs text-on-surface-variant font-medium">Nov 04, 2023</TableCell>
                                    <TableCell className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all">
                                                <Pencil size={18} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all">
                                                <Trash2 size={18} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow className="hover:bg-slate-50/50 transition-colors group border-surface-container-low">
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
                                                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNlS2nVrXOVtnGZGYYHxkwZewm5b9MroKqLREfglNmQCbakQjzNmsNRRq1fGI0tv8Xy0KDSagOFWd1iVap9lbaf4BICZDEcsfcIVD8qNjUVsWu12yfzkaofCI7N11mVcOjPvFc-ZTSOes_hd_EMvGCmrE4erYi_B7XZOt0rfXvk73fHY_jJz85VFauMx77PCGt38JEmVVVRQs9Pfu7u4-9OzDitqTnST3tYs6vp5QjKDjKyfM6OEofnAsdBbacCMkdvitj2itNRYbZ" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">Marcus Hillel</p>
                                                <p className="text-xs text-on-surface-variant font-body">marcus@hillel.co</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <Badge variant="secondary" className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-[10px] font-black uppercase tracking-tighter rounded-full border border-outline-variant/30">Client</Badge>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                            <span className="text-xs font-bold text-slate-500">Offline</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-xs text-on-surface-variant font-medium">Dec 18, 2023</TableCell>
                                    <TableCell className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all">
                                                <Pencil size={18} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all">
                                                <Trash2 size={18} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow className="hover:bg-slate-50/50 transition-colors group border-surface-container-low">
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
                                                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEhCwN0srtWwczMqIX3JxRqOGLVHtLGqeUPeqjcjhMZUHUttD9cECIOD9DTePVeL0rYjsIAfkOU94pBKJ_deTGPlmWSecDcyzPITQpYWX_CgJ2HlG8ZLUMlnPJOI4BrHvik24xyQCXIyCF3PhdRGLbGncmjGjcxZl7XlZXxZchoXCTEdI8F0W2htL7s53OyaHAJ-uedTFiu1SKu5RwA9aUDaXDjyRy1bsQhqJ612FMCtszK95J68rxb-xqDpXx06nqGhxlyOS-PuP0" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">Sasha Romanoff</p>
                                                <p className="text-xs text-on-surface-variant font-body">s.romanoff@fleet.com</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <Badge variant="secondary" className="px-3 py-1 bg-amber-500/10 text-amber-700 text-[10px] font-black uppercase tracking-tighter rounded-full border border-amber-500/20">Manager</Badge>
                                    </TableCell>
                                    <TableCell className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                                            <span className="text-xs font-bold text-error">Suspended</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-5 text-xs text-on-surface-variant font-medium">Jan 02, 2024</TableCell>
                                    <TableCell className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all">
                                                <Pencil size={18} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all">
                                                <Trash2 size={18} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="p-6 bg-surface-container-low/30 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Button variant="outline" className="px-4 py-2 text-xs font-bold border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Previous</Button>
                            <Button className="px-4 py-2 text-xs font-bold bg-secondary text-on-secondary rounded-lg shadow-md shadow-amber-500/20">1</Button>
                            <Button variant="outline" className="px-4 py-2 text-xs font-bold border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">2</Button>
                            <Button variant="outline" className="px-4 py-2 text-xs font-bold border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">3</Button>
                            <span className="px-2 text-slate-400 text-xs mt-auto">...</span>
                            <Button variant="outline" className="px-4 py-2 text-xs font-bold border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">129</Button>
                            <Button variant="outline" className="px-4 py-2 text-xs font-bold border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Next</Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xs font-medium text-slate-500">Jump to page:</p>
                            <Input className="w-12 h-9 text-center text-xs font-bold border-slate-200 rounded-lg bg-white focus:ring-amber-500 h-8" type="text" value="1" />
                        </div>
                    </div>
                </Card>

                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4 hidden">
                    <div className="bg-surface-container-lowest w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
                        <div className="p-8 border-b border-surface-container-highest flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black tracking-tight text-primary">Provision New Account</h3>
                                <p className="text-on-surface-variant text-sm font-body">Grant platform access to a new user or partner.</p>
                            </div>
                             <Button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <X size={20} />
                            </Button>
                        </div>
                         <div className="p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Full Name</Label>
                                    <Input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-amber-500 text-sm font-medium placeholder:text-slate-400" placeholder="e.g. James Bond" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Email Address</Label>
                                    <Input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-amber-500 text-sm font-medium placeholder:text-slate-400" placeholder="james.b@lux.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2 text-primary">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Assigned Role</Label>
                                <Select>
                                    <SelectTrigger className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-amber-500 text-sm font-medium h-12">
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Standard Client">Standard Client</SelectItem>
                                        <SelectItem value="Fleet Manager">Fleet Manager</SelectItem>
                                        <SelectItem value="Marketing Administrator">Marketing Administrator</SelectItem>
                                        <SelectItem value="Super User">Super User</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="pt-4 flex gap-4">
                                <Button className="flex-1 bg-secondary text-white py-4 rounded-xl font-headline font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-95 transition-all">Create Account</Button>
                                <Button className="flex-1 bg-surface-container-high text-primary py-4 rounded-xl font-headline font-bold text-sm hover:bg-surface-container-highest transition-all">Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}