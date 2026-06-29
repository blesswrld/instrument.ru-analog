import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Folder, Package, Wrench } from "lucide-react";
import { categories, products } from "@/mockData";

export default function CatalogPage() {
    return (
        <main className="min-h-screen p-6 sm:p-8 max-w-7xl mx-auto w-full flex flex-col">
            {/* Кнопка Назад */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-main hover:text-primary mb-8 transition-colors group"
            >
                <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                Назад на главную
            </Link>

            {/* Заголовок */}
            <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                <h1 className="text-3xl font-bold text-dark">
                    Все категории товаров
                </h1>
                <span className="text-sm font-medium px-3 py-1 bg-bg-light rounded-full text-text-main">
                    {categories.length} категорий
                </span>
            </div>

            {/* Сетка всех категорий без ограничений */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {categories.map((category) => {
                    const count = products.filter(
                        (p) => p.categoryId === category.id,
                    ).length;

                    return (
                        <Link
                            key={category.id}
                            href={`/catalog/${category.slug}`}
                            className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all flex items-center gap-4 relative overflow-hidden"
                        >
                            {/* Боковая цветовая полоска при наведении */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary text-gray-400 transition-colors">
                                <Folder size={20} strokeWidth={2} />
                            </div>

                            <div className="flex flex-col">
                                <span className="font-semibold text-dark group-hover:text-primary transition-colors text-sm md:text-base line-clamp-2">
                                    {category.name}
                                </span>
                                {count > 0 && (
                                    <span className="text-xs text-gray-400 mt-0.5">
                                        {count} товаров
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
