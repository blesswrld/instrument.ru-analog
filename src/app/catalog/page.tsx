import { categories } from "@/mockData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/catalog/${category.slug}`}
                        className="group p-8 bg-white border border-border-main rounded-2xl hover:border-primary hover:shadow-xl transition-all flex flex-col items-center justify-center text-center relative overflow-hidden h-32"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                        <span className="font-bold text-dark group-hover:text-primary transition-colors text-base md:text-lg z-10 line-clamp-2">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
