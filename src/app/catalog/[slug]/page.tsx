import { categories, products } from "@/mockData";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    // Добавляем асинхронные searchParams для отслеживания текущей страницы
    searchParams: Promise<{
        page?: string;
    }>;
}

const ITEMS_PER_PAGE = 24;

export default async function CategoryPage({
    params,
    searchParams,
}: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;

    const category = categories.find((c) => c.slug === resolvedParams.slug);

    if (!category) {
        notFound();
    }

    // Текущая страница из URL (по умолчанию 1)
    const currentPage = Number(resolvedSearchParams.page) || 1;

    // Фильтруем ВСЕ товары этой категории
    const allCategoryProducts = products.filter(
        (p) => p.categoryId === category.id,
    );

    // Считаем общее количество страниц
    const totalPages = Math.ceil(allCategoryProducts.length / ITEMS_PER_PAGE);

    // Вырезаем товары только для текущей страницы
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const categoryProducts = allCategoryProducts.slice(startIndex, endIndex);

    return (
        <main className="min-h-screen p-6 sm:p-8 max-w-7xl mx-auto w-full flex flex-col">
            {/* Кнопка назад */}
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

            {/* Заголовок категории */}
            <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                <h1 className="text-3xl font-bold text-dark">
                    {category.name}
                </h1>
                <span className="text-sm font-medium px-3 py-1 bg-bg-light rounded-full text-text-main">
                    {allCategoryProducts.length} товаров
                </span>
            </div>

            {/* Сетка товаров */}
            {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
                    {categoryProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            article={product.article}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-white border border-border-main rounded-2xl flex-grow">
                    <p className="text-lg text-text-main">
                        В этой категории пока нет товаров или страницы не
                        существует.
                    </p>
                </div>
            )}

            {/* Блок пагинации (рендерится только если страниц больше одной) */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-border-main">
                    {/* Стрелка Назад */}
                    {currentPage > 1 ? (
                        <Link
                            href={`/catalog/${category.slug}?page=${currentPage - 1}`}
                            className="p-2.5 rounded-lg border border-border-main hover:border-primary text-dark hover:text-primary transition-colors bg-white"
                        >
                            <ChevronLeft size={18} />
                        </Link>
                    ) : (
                        <span className="p-2.5 rounded-lg border border-border-main text-gray-300 bg-bg-light cursor-not-allowed">
                            <ChevronLeft size={18} />
                        </span>
                    )}

                    {/* Номера страниц (показываем текущую, первую, последнюю и соседние) */}
                    {Array.from({ length: totalPages }).map((_, index) => {
                        const pageNum = index + 1;
                        // Логика отображения: всегда показываем первую, последнюю и ±2 страницы от текущей
                        if (
                            pageNum === 1 ||
                            pageNum === totalPages ||
                            Math.abs(pageNum - currentPage) <= 1
                        ) {
                            const isActive = pageNum === currentPage;
                            return (
                                <Link
                                    key={pageNum}
                                    href={`/catalog/${category.slug}?page=${pageNum}`}
                                    className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all ${
                                        isActive
                                            ? "bg-primary border-primary text-light shadow-md shadow-primary/10"
                                            : "bg-white border-border-main text-dark hover:border-primary hover:text-primary"
                                    }`}
                                >
                                    {pageNum}
                                </Link>
                            );
                        }

                        // Ставим многоточие, если между кнопками большой разрыв
                        if (pageNum === 2 || pageNum === totalPages - 1) {
                            return (
                                <span
                                    key={pageNum}
                                    className="px-2 text-gray-400"
                                >
                                    ...
                                </span>
                            );
                        }

                        return null;
                    })}

                    {/* Стрелка Вперед */}
                    {currentPage < totalPages ? (
                        <Link
                            href={`/catalog/${category.slug}?page=${currentPage + 1}`}
                            className="p-2.5 rounded-lg border border-border-main hover:border-primary text-dark hover:text-primary transition-colors bg-white"
                        >
                            <ChevronRight size={18} />
                        </Link>
                    ) : (
                        <span className="p-2.5 rounded-lg border border-border-main text-gray-300 bg-bg-light cursor-not-allowed">
                            <ChevronRight size={18} />
                        </span>
                    )}
                </div>
            )}
        </main>
    );
}
