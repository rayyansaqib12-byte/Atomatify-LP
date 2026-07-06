import {useCallback, useState} from 'react';
import {motion} from 'motion/react';
import {
    ArrowRight,
    Bot,
    Check,
    ChevronDown,
    Clock3,
    Headphones,
    Loader,
    Mail,
    MessageSquareText,
    Phone,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
    Workflow,
    Zap,
} from 'lucide-react';
import mevanLogo from '../assets/images/Logo.png';
import {CountUpStat} from './CountUpStat';

const scrollToBooking = () => {
    document.getElementById('book-call')?.scrollIntoView({behavior: 'smooth', block: 'start'});
};

const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({behavior: 'smooth', block: 'start'});
};

const outcomes = [
    'Respond to leads instantly with an AI chatbot trained on your business',
    'Automate follow-up, reminders, nurturing, and pipeline movement in GoHighLevel',
    'Get VA support for inbox, admin, calendar, CRM cleanup, and client follow-up',
    'Launch with a clean system your team can actually use every day',
];

const offerItems = [
    {
        icon: Bot,
        title: 'AI Chatbot Setup & Training',
        description: 'A trained chatbot for lead capture, FAQs, qualification, booking prompts, and support handoff.',
    },
    {
        icon: Workflow,
        title: 'GoHighLevel Automation',
        description: 'CRM setup, pipelines, forms, calendars, campaigns, workflows, reminders, and reporting.',
    },
    {
        icon: Users,
        title: 'Dedicated VA Support',
        description: 'Reliable operational help for admin tasks, inboxes, follow-ups, scheduling, and customer support.',
    },
];

const stats = [
    {value: 150, suffix: '+', label: 'clients supported'},
    {value: 200, suffix: '+', label: 'projects delivered'},
    {value: 98, suffix: '%', label: 'success rate'},
];

const steps = [
    {
        title: 'Map the bottleneck',
        description: 'We look at your lead flow, follow-up, current tools, and where customers are slipping away.',
    },
    {
        title: 'Build the growth system',
        description: 'We configure your chatbot, CRM, automations, forms, calendars, VA workflows, and handoffs.',
    },
    {
        title: 'Launch and support',
        description: 'You get testing, training, and ongoing support so the system keeps working after launch.',
    },
];

const testimonials = [
    {
        name: 'Sarah Williams',
        text: 'Haris took his time with me to make sure everything was set up correctly. I highly recommend Mevan AI.',
    },
    {
        name: 'Kaream Mills',
        text: 'Their work acumen is out of this world. If you are looking to grow your agency, trust them.',
    },
    {
        name: 'Terherah Harris',
        text: 'The team at Mevan has been fantastic out of the gate and provided the support our agency needed.',
    },
];

const faqs = [
    {
        question: 'Is this only for AI chatbots?',
        answer: 'No. The landing page offer combines AI chatbot setup, GoHighLevel automation, and VA support so your lead handling and operations work together.',
    },
    {
        question: 'Do I need GoHighLevel already?',
        answer: 'No. If you already have GHL, we can clean it up and improve it. If you do not, we can help set it up from the ground up.',
    },
    {
        question: 'What happens on the call?',
        answer: 'We review your current workflow, identify the fastest automation wins, and recommend the cleanest setup for your business.',
    },
];

export function Home() {
    const [calendarLoaded, setCalendarLoaded] = useState(false);

    const handleCalendarLoad = useCallback(() => {
        setCalendarLoaded(true);
    }, []);

    return (
        <div className="relative text-white">
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
                <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img src={mevanLogo} alt="Mevan AI" className="h-18 w-auto"/>
                    </div>
                    <button
                        onClick={scrollToBooking}
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
                    >
                        Book Free Call
                        <ArrowRight className="h-4 w-4"/>
                    </button>
                </div>
            </header>

            <section className="relative overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(251,191,36,0.14),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.86),rgba(2,6,23,0.96))]"/>
                <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 24}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65}}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.05] px-4 py-2 text-sm text-cyan-100">
                            <Sparkles className="h-4 w-4 text-cyan-300"/>
                            Done-for-you AI automation and support team
                        </div>

                        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                            Turn missed leads and manual follow-up into booked calls.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                            We build your AI chatbot, GoHighLevel automations, and VA support system so your business responds faster, follows up better, and scales without hiring a full tech team.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={scrollToBooking}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-200"
                            >
                                Book Your Free Consultation
                                <ArrowRight className="h-5 w-5"/>
                            </button>
                            <button
                                onClick={scrollToOffer}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-4 font-semibold text-white transition-colors hover:bg-white/[0.08]"
                            >
                                See What You Get
                                <ChevronDown className="h-5 w-5"/>
                            </button>
                        </div>

                        <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                            {outcomes.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"/>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 24}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.7, delay: 0.1}}
                        className="relative"
                    >
                        <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-semibold text-white">Growth system snapshot</p>
                                    <p className="text-sm text-slate-400">What your workflow can look like</p>
                                </div>
                                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">Live</span>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {[
                                    {icon: MessageSquareText, value: 'Instant', label: 'lead response'},
                                    {icon: Clock3, value: '24/7', label: 'chat coverage'},
                                    {icon: Zap, value: 'Auto', label: 'follow-up'},
                                ].map((item) => (
                                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                        <item.icon className="h-5 w-5 text-cyan-300"/>
                                        <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
                                        <p className="text-xs text-slate-400">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                                <p className="font-semibold text-white">Lead to appointment flow</p>
                                <div className="mt-5 space-y-4">
                                    {['Chatbot qualifies lead', 'GHL creates opportunity', 'Workflow sends follow-up', 'VA confirms the appointment'].map((item, index) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                                                {index + 1}
                                            </span>
                                            <span className="text-sm text-slate-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                    <Headphones className="h-6 w-6 text-amber-300"/>
                                    <p className="mt-3 font-semibold">VA desk</p>
                                    <p className="text-sm text-slate-400">Admin and customer follow-up support.</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                    <ShieldCheck className="h-6 w-6 text-emerald-300"/>
                                    <p className="mt-3 font-semibold">Clean handoff</p>
                                    <p className="text-sm text-slate-400">Training and launch support included.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-white/[0.03] py-8">
                <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 text-center sm:px-6 lg:px-8">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl font-bold text-white sm:text-4xl">
                                <CountUpStat end={stat.value} suffix={stat.suffix}/>
                            </div>
                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="offer" className="relative py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">The offer</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                            Everything you need to capture, nurture, and support more customers.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-400">
                            One focused landing-page offer, one clear call to action, and one implementation team behind the system.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 lg:grid-cols-3">
                        {offerItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.08}}
                                className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
                            >
                                <div className="inline-flex rounded-lg bg-cyan-300 p-3">
                                    <item.icon className="h-7 w-7 text-slate-950"/>
                                </div>
                                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                                <p className="mt-4 leading-relaxed text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <button
                            onClick={scrollToBooking}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-slate-950 transition-colors hover:bg-cyan-100"
                        >
                            Get My Automation Plan
                            <ArrowRight className="h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900/45 py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Why it converts</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Speed wins the lead.</h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-400">
                            Most businesses lose revenue because leads wait too long, follow-up is inconsistent, or the CRM is messy. This page sells one clear solution: a system that answers, follows up, books, and supports.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex gap-5 rounded-xl border border-white/10 bg-slate-950/55 p-5">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white font-bold text-slate-950">
                                    0{index + 1}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="mt-2 leading-relaxed text-slate-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                                <div className="mb-5 flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} className="h-5 w-5 fill-amber-300 text-amber-300"/>
                                    ))}
                                </div>
                                <p className="leading-relaxed text-slate-200">"{testimonial.text}"</p>
                                <p className="mt-5 font-bold">{testimonial.name}</p>
                                <p className="text-sm text-slate-400">Verified Client</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-900/45 py-20 sm:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Questions</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Before you book</h2>
                    </div>
                    <div className="mt-10 space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group rounded-xl border border-white/10 bg-slate-950/55 p-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                                    {faq.question}
                                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"/>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section id="book-call" className="relative py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Book your free consultation</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                            See what your automation plan should look like.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-400">
                            Choose a time below. We will review your workflow and show you the highest-impact next step for your business.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                            {!calendarLoaded && (
                                <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 rounded-xl bg-slate-950/60">
                                    <Loader className="h-10 w-10 animate-spin text-cyan-300"/>
                                    <p className="text-sm text-slate-400">Loading calendar...</p>
                                </div>
                            )}
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/booking/jssVP8htVqLBBEzNIFA1"
                                style={{
                                    width: '100%',
                                    minHeight: calendarLoaded ? '700px' : '0px',
                                    height: calendarLoaded ? '700px' : '0px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    opacity: calendarLoaded ? 1 : 0,
                                    transition: 'opacity 0.4s ease-in-out',
                                }}
                                onLoad={handleCalendarLoad}
                                title="Schedule a Meeting"
                            />
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                            <iframe
                                src="https://link.mevan.ai/widget/form/hwOhYSwqpX0uBztUpIoE"
                                style={{
                                    width: '100%',
                                    height: '504px',
                                    border: 'none',
                                    borderRadius: '12px',
                                }}
                                title="Contact Us Form"
                            />
                            <div className="mt-6 grid gap-3 text-sm text-slate-300">
                                <a href="mailto:info@mevan.ai" className="flex items-center gap-3 hover:text-cyan-300">
                                    <Mail className="h-5 w-5 text-cyan-300"/>
                                    info@mevan.ai
                                </a>
                                <a href="tel:+923165511771" className="flex items-center gap-3 hover:text-cyan-300">
                                    <Phone className="h-5 w-5 text-cyan-300"/>
                                    +923165511771
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
