import Link from "next/link";
import { categories } from "@/mockData";

import InteractiveHero from "@/components/InteractiveHero";
import StatsGrid from "@/components/StatsGrid";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="flex flex-col w-full">
            {/* 1. Интерактивный Hero с общим фоном секции */}
            <section className="relative w-full py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/hero-section-bg.jpg')] bg-blend-overlay bg-black/60">
                <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
                    <InteractiveHero />
                </div>
            </section>

            {/* 2. Секция О компании */}
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

            {/* 3. Блок статистики с фоном */}
            <section className="relative w-full py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/stats-section-bg.jpg')] bg-blend-overlay bg-slate-900/80">
                <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
                    <StatsGrid />
                </div>
            </section>

            {/* 4. Остальной контент */}
            <div className="px-4 sm:px-8 max-w-7xl mx-auto py-16 flex flex-col gap-16 w-full">
                {/* Преимущества */}
                <Features />

                {/* Сетка каталога */}
                <section>
                    <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-dark">
                            Популярные категории
                        </h2>
                        <Link
                            href="/catalog"
                            className="text-sm font-medium px-4 py-2 bg-bg-light hover:bg-gray-200 transition-colors rounded-full text-text-main"
                        >
                            Смотреть все {categories.length}
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.slice(0, 8).map((category) => (
                            <Link
                                key={category.id}
                                href={`/catalog/${category.slug}`}
                                className="group p-8 bg-white border border-border-main rounded-2xl hover:border-primary hover:shadow-xl transition-all flex flex-col items-center justify-center text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                                <span className="font-bold text-dark group-hover:text-primary transition-colors text-lg z-10">
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Форма обратной связи */}
                <ContactSection />
            </div>
        </main>
    );
}
