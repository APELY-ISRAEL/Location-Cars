"use client";

const Login = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">

                <section className="hidden md:flex md:w-3/5 bg-primary-container relative items-end p-16 overflow-hidden">

                    <div className="absolute inset-0 z-0">
                        <img alt="Luxury Porsche interior" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="Cinematic close-up of a high-end luxury car interior at night, soft dashboard glows, leather textures, blurred city lights in background, deep moody blues and ambers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiiu2sCCRJp4XB8Te2skF5JrSRImWi2U2QymO5MVVC1ZNXRw-nlsaL0sFvkM5nX_LKpspSqxhrPf9gM_-rcPStInHPZXpmIg1WwTz8gd3GsNquSc-KBXSue0GxCKcLch-ZQs2FcnGS_A8TL8aC1xb6RBmHwN4yY7N5UWGehvAqko-HJTCP6OFMta0kfXXPIC2Wk7mg1PhBnfY_guf_1gH1AZk9gQXUO0W8yuybUI5SC1HZ3feVVzPxGtY0-o7LHdyl9q18h4vYJn58" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-secondary"></span>
                            <p className="font-label text-[10px] tracking-[0.2em] text-secondary font-bold uppercase">Experience Precision</p>
                        </div>
                        <h1 className="font-headline text-6xl lg:text-8xl font-black italic tracking-tighter text-white leading-[0.9] mb-8">
                            CYRIS<br />CARS.
                        </h1>
                        <p className="font-body text-on-primary-container text-lg leading-relaxed max-w-md">
                            Access your elite garage. Secure your next journey with our curated fleet of high-performance vehicles.
                        </p>
                    </div>
                </section>

                <section className="flex-1 flex items-center justify-center bg-primary-container md:bg-surface p-8 md:p-12 lg:p-24 min-h-screen">

                    <div className="absolute top-12 left-8 md:hidden">
                        <h2 className="font-headline text-2xl font-black italic tracking-tighter text-white">CYRIS CARS</h2>
                    </div>
                    <div className="w-full max-w-md space-y-12">

                        <header className="space-y-2">
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-white md:text-on-surface">Welcome Back</h2>
                            <p className="font-body text-on-primary-container md:text-on-surface-variant">Enter your credentials to access the fleet.</p>
                        </header>

                        <form className="space-y-6">
                            <div className="space-y-4">

                                <div className="group">
                                    <label className="font-label text-[10px] tracking-widest text-secondary md:text-secondary font-bold mb-2 block uppercase" htmlFor="email">Email Address</label>
                                    <div className="relative">
                                        <input className="w-full bg-primary-container/50 md:bg-surface-container-highest/50 border-0 border-b-2 border-on-primary-container/20 md:border-outline-variant/30 focus:border-secondary focus:ring-0 text-white md:text-on-surface py-4 px-0 transition-all placeholder:text-on-primary-container/50" id="email" placeholder="driver@cyris.com" type="email" />
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="font-label text-[10px] tracking-widest text-secondary md:text-secondary font-bold block uppercase" htmlFor="password">Password</label>
                                        <a className="font-label text-[10px] tracking-widest text-on-primary-container/70 md:text-on-surface-variant/70 hover:text-secondary transition-colors uppercase" href="#">Forgot?</a>
                                    </div>
                                    <div className="relative">
                                        <input className="w-full bg-primary-container/50 md:bg-surface-container-highest/50 border-0 border-b-2 border-on-primary-container/20 md:border-outline-variant/30 focus:border-secondary focus:ring-0 text-white md:text-on-surface py-4 px-0 transition-all placeholder:text-on-primary-container/50" id="password" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-secondary-container hover:bg-secondary text-on-primary-fixed font-headline font-bold text-sm tracking-widest py-5 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-[0_12px_32px_-4px_rgba(126,87,0,0.3)] glow-amber uppercase" type="submit">
                                Ignite Engine
                            </button>
                        </form>

                        <div className="relative flex items-center py-4">
                            <div className="flex-grow border-t border-on-primary-container/10 md:border-outline-variant/20"></div>
                            <span className="flex-shrink mx-4 font-label text-[10px] tracking-[0.2em] text-on-primary-container/50 md:text-on-surface-variant/50 uppercase">Or Continue With</span>
                            <div className="flex-grow border-t border-on-primary-container/10 md:border-outline-variant/20"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-4 px-6 bg-primary-container md:bg-surface-container-lowest border border-on-primary-container/10 md:border-outline-variant/10 rounded-xl hover:bg-on-primary-container/5 md:hover:bg-surface-container-low transition-all group">
                                <span className="material-symbols-outlined text-on-primary-container md:text-on-surface-variant group-hover:text-secondary" data-icon="cloud">cloud</span>
                                <span className="font-label text-[10px] font-bold tracking-widest text-white md:text-on-surface uppercase">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 py-4 px-6 bg-primary-container md:bg-surface-container-lowest border border-on-primary-container/10 md:border-outline-variant/10 rounded-xl hover:bg-on-primary-container/5 md:hover:bg-surface-container-low transition-all group">
                                <span className="material-symbols-outlined text-on-primary-container md:text-on-surface-variant group-hover:text-secondary" data-icon="apple" data-weight="fill">ios</span>
                                <span className="font-label text-[10px] font-bold tracking-widest text-white md:text-on-surface uppercase">Apple</span>
                            </button>
                        </div>

                        <footer className="pt-8 text-center">
                            <p className="font-body text-sm text-on-primary-container/70 md:text-on-surface-variant/70">
                                New to Cyris?
                                <a className="text-secondary font-bold ml-1 hover:underline underline-offset-4" href="#">Create your profile</a>
                            </p>
                        </footer>
                    </div>

                    <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
                        <span className="material-symbols-outlined text-[12rem]" data-icon="speed">speed</span>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Login;