import { NextResponse } from "next/server";

const API_KEY = "5aace271c8e6f06513a76cf4a8838d25e22dea2f90c10e60e73af2daa6de";
const DONOR_API_URL = "https://instrument.ru/api.php/get.products.list";

export async function GET() {
    try {
        const fetchUrl = `${DONOR_API_URL}?access_token=${API_KEY}&limit=100&offset=0`;

        const response = await fetch(fetchUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Ошибка HTTP", status: response.status },
                { status: 500 },
            );
        }

        const rawData = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let rawProducts: any[] = [];

        // ПРОВЕРКА: Если API вернул объект (как в твоем примере), превращаем его в массив
        if (
            rawData &&
            typeof rawData === "object" &&
            !Array.isArray(rawData) &&
            !rawData.error
        ) {
            rawProducts = Object.keys(rawData).map((key) => {
                return {
                    id: key, // Берем ключ (например, "14510") как ID
                    ...rawData[key], // Разворачиваем данные внутри (ARTICLE, BASE_PRICE и т.д.)
                };
            });
        } else {
            return NextResponse.json({
                error: "Неизвестный формат данных или ошибка API",
                receivedData: rawData,
            });
        }

        // Так как у нас пока нет названий и категорий из этого метода,
        // мы пропускаем текстовый фильтр (он всё равно ничего не найдет)

        // Форматируем под нашу карточку (ProductCard)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedProducts = rawProducts.map((p: any) => ({
            id: p.id,
            categoryId: "1", // Временно всё в одну категорию
            name: `Товар Арт. ${p.ARTICLE}`, // Генерируем название, так как API его не отдает
            article: p.ARTICLE,
            price: parseFloat(p.BASE_PRICE) || 0,
            discount_price: parseFloat(p.DISCOUNT_PRICE) || 0,
            stock: p.AMOUNT === "В наличии" ? 10 : parseInt(p.AMOUNT) || 0,
        }));

        return NextResponse.json({
            success: true,
            stats: {
                total_items: formattedProducts.length,
            },
            // Выводим все спарсенные товары
            products: formattedProducts,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
