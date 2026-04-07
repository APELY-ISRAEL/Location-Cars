"use client";

const Footer = () => {
    return (
        <footer className="bg-slate-100 w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto font-['Inter'] text-sm">
                <div className="space-y-4">
                    <div className="text-xl font-black text-slate-900 ">Cyris Cars</div>
                    <p className="text-slate-500  leading-relaxed">
                        © 2024 Cyris Cars. Cinematic Velocity. L'excellence automobile redéfinie pour vos trajets d'exception.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-headline font-bold text-slate-900  uppercase tracking-widest text-xs">Menu</h4>
                    <ul className="space-y-2">
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">Accueil</a></li>
                        <li><a className="text-amber-500 font-medium" href="#">Nos Voitures</a></li>
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">À Propos</a></li>
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-headline font-bold text-slate-900  uppercase tracking-widest text-xs">Informations</h4>
                    <ul className="space-y-2">
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">Politique de confidentialité</a></li>
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">Conditions Générales</a></li>
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">FAQ</a></li>
                        <li><a className="text-slate-500  hover:underline hover:text-amber-400 transition-colors" href="#">Support</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-headline font-bold text-slate-900  uppercase tracking-widest text-xs">Contactez-nous</h4>
                    <div className="text-slate-500 space-y-2">
                        <p className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">mail</span>
                            contact@cyris-cars.com
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">call</span>
                            +33 1 23 45 67 89
                        </p>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <a className="w-8 h-8 rounded-full bg-slate-200  flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-lg">share</span>
                        </a>
                        <a className="w-8 h-8 rounded-full bg-slate-200  flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;