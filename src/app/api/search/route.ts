import { NextResponse } from "next/server";
import catalogJson from "@/catalog.json";

interface CatalogItem {
    id: string;
    article: string;
    name: string;
    categoryId: string;
    group: string;
    image: string | null;
    price: number;
}

const catalog = catalogJson as CatalogItem[];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.toLowerCase().trim() || "";

    // Если запрос слишком короткий, отдаем пустой массив
    if (query.length < 2) {
        return NextResponse.json([]);
    }

    // Ищем совпадения по названию или артикулу
    const results = catalog.filter(
        (item) =>
            item.name.toLowerCase().includes(query) ||
            item.article.toLowerCase().includes(query),
    );

    // Возвращаем только первые 7 результатов, чтобы не перегружать интерфейс
    return NextResponse.json(results.slice(0, 7));
}
