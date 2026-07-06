import {ArrowRight, Mail, Phone} from 'lucide-react';
import mevanLogo from '../assets/images/Logo.png';

export function Footer() {
    const year = new Date().getFullYear();

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    return (
        <footer className="relative border-t border-white/10 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={mevanLogo} alt="Mevan AI" className="h-18 w-auto"/>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                            Done-for-you AI chatbot setup, GoHighLevel automation, and VA support for businesses that want faster response times and cleaner follow-up.
                        </p>
                        <button
                            onClick={() => scrollToSection('book-call')}
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
                        >
                            Book Free Consultation
                            <ArrowRight className="h-4 w-4"/>
                        </button>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Landing Page</h3>
                        <div className="mt-4 grid gap-3 text-sm">
                            <button onClick={() => scrollToSection('offer')} className="w-fit text-slate-400 transition-colors hover:text-cyan-300">
                                The Offer
                            </button>
                            <button onClick={() => scrollToSection('book-call')} className="w-fit text-slate-400 transition-colors hover:text-cyan-300">
                                Book a Call
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
                        <div className="mt-4 grid gap-3 text-sm text-slate-400">
                            <a href="mailto:info@mevan.ai" className="flex items-center gap-2 transition-colors hover:text-cyan-300">
                                <Mail className="h-4 w-4 text-cyan-300"/>
                                info@mevan.ai
                            </a>
                            <a href="tel:+923264699918" className="flex items-center gap-2 transition-colors hover:text-cyan-300">
                                <Phone className="h-4 w-4 text-cyan-300"/>
                                +923264699918
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>Copyright {year} Atomatify. All rights reserved.</p>
                    <p>AI automation, CRM systems, and trained support.</p>
                </div>
            </div>
        </footer>
    );
}
