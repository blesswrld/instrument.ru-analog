import { categories, products } from "@/mockData";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CategoryPage({ params }: PageProps) {
    const resolvedParams = await params;
    const category = categories.find((c) => c.slug === resolvedParams.slug);

    if (!category) {
        notFound();
    }

    const categoryProducts = products.filter(
        (p) => p.categoryId === category.id,
    );

    return (
        <main className="min-h-screen p-6 sm:p-8 max-w-7xl mx-auto w-full">
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

            <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                <h1 className="text-3xl font-bold text-dark">
                    {category.name}
                </h1>
                <span className="text-sm font-medium px-3 py-1 bg-bg-light rounded-full text-text-main">
                    {categoryProducts.length} товаров
                </span>
            </div>

            {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            article={product.article}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-white border border-border-main rounded-2xl">
                    <p className="text-lg text-text-main">
                        В этой категории пока нет товаров.
                    </p>
                </div>
            )}
        </main>
    );
}
