import Link from "next/link";
import { categories, products } from "@/mockData";
import {
    Wrench,
    Zap,
    Drill,
    Hammer,
    WrenchIcon,
    ArrowRight,
} from "lucide-react";

import InteractiveHero from "@/components/InteractiveHero";
import StatsGrid from "@/components/StatsGrid";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="flex flex-col w-full">
            <section className="relative w-full py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/hero-section-bg.jpg')] bg-blend-overlay bg-black/60">
                <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
                    <InteractiveHero />
                </div>
            </section>

            <section className="w-full py-12 md:py-16 bg-bg-light border-y border-border-main">
                <div className="px-4 sm:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <h2 className="text-2xl md:text-3xl font-bold text-dark whitespace-nowrap">
                            О компании
                        </h2>
                        <div className="prose max-w-none text-text-main space-y-4 text-sm md:text-base leading-relaxed">
                            <p>
                                Мы обеспечиваем бесперебойные поставки
                                качественных материалов на строительные площадки
                                любого масштаба. Наша цель — упростить процесс
                                закупок для застройщиков, подрядчиков и частных
                                мастеров, предоставляя комплексный сервис из
                                одних рук.
                            </p>
                            <p>
                                На сегодняшний день в нашем ассортименте более
                                12000 наименований от ведущих
                                заводов-изготовителей. Мы гарантируем
                                соответствие всей продукции строгим стандартам
                                ГОСТ и предоставляем лучшие условия на рынке,
                                исключая лишние звенья в цепи поставок.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/stats-section-bg.jpg')] bg-blend-overlay bg-slate-900/80">
                <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
                    <StatsGrid />
                </div>
            </section>

            <div className="px-4 sm:px-8 max-w-7xl mx-auto py-16 flex flex-col gap-16 w-full">
                <Features />

                <section className="mb-16 relative">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
        @keyframes flow {
            from { stroke-dashoffset: 40; }
            to { stroke-dashoffset: 0; }
        }
        .animate-flow {
            animation: flow 5s linear infinite;
        }
    `,
                        }}
                    />

                    <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-dark">
                            Популярные категории
                        </h2>
                        <Link
                            href="/catalog"
                            className="text-sm font-medium text-text-main hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                            Смотреть все {categories.length}
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-24 -z-10 hidden md:block overflow-hidden opacity-40 pointer-events-none">
                            <svg
                                className="w-full h-full text-primary"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,10 Q12.5,20 25,10 T50,10 T75,10 T100,10"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 2"
                                    className="animate-flow"
                                />
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {categories.slice(0, 8).map((category, index) => {
                                const count = products.filter(
                                    (p) => p.categoryId === category.id,
                                ).length;

                                const icons = [
                                    Wrench,
                                    Zap,
                                    Drill,
                                    Hammer,
                                    WrenchIcon,
                                ];
                                const Icon = icons[index % icons.length];

                                return (
                                    <Link
                                        key={category.id}
                                        href={`/catalog/${category.slug}`}
                                        className="group relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 active:scale-95 overflow-hidden flex flex-col justify-between h-40 z-10"
                                    >
                                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-primary/5 transition-colors duration-500 z-0"></div>

                                        <div className="relative z-10 flex justify-between items-start mb-4">
                                            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors text-gray-500">
                                                <Icon
                                                    size={24}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            {count > 0 && (
                                                <span className="text-xs font-medium text-gray-400 bg-white border border-gray-100 px-2 py-1 rounded-full shadow-sm">
                                                    {count}
                                                </span>
                                            )}
                                        </div>

                                        <div className="relative z-10">
                                            <span className="font-bold text-dark group-hover:text-primary transition-colors text-base md:text-lg line-clamp-2 leading-tight">
                                                {category.name}
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <ContactSection />
            </div>
        </main>
    );
}
