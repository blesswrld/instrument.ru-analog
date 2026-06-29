import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WarrantyPage() {
    return (
        <main className="min-h-screen p-6 sm:p-8 max-w-4xl mx-auto w-full">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-main hover:text-primary mb-6 transition-colors group w-fit"
            >
                <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                Назад на главную
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                Гарантия и возврат
            </h1>

            <div className="bg-white rounded-2xl p-8 border border-border-main shadow-sm space-y-6 text-text-main leading-relaxed">
                <h2 className="text-2xl font-bold text-dark mb-2">
                    Официальная гарантия
                </h2>
                <p>
                    На все товары, представленные в нашем каталоге,
                    распространяется официальная гарантия производителя. Сроки
                    гарантийного обслуживания зависят от конкретного бренда и
                    типа оборудования (от 6 месяцев до 5 лет). Гарантийный талон
                    передается покупателю вместе с товаром и закрывающими
                    документами.
                </p>

                <h2 className="text-2xl font-bold text-dark mt-8 mb-2">
                    Обмен и возврат товара надлежащего качества
                </h2>
                <p>
                    В соответствии с Законом РФ «О защите прав потребителей», вы
                    можете вернуть или обменять товар надлежащего качества в
                    течение <strong>14 дней</strong> с момента покупки, при
                    соблюдении следующих условий:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Товар не был в употреблении.</li>
                    <li>
                        Сохранены его товарный вид, потребительские свойства,
                        пломбы и фабричные ярлыки.
                    </li>
                    <li>
                        Имеется товарный чек или кассовый чек, подтверждающий
                        оплату.
                    </li>
                </ul>
                <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg mt-4 border border-gray-100">
                    Обратите внимание: технически сложные товары
                    (электроинструмент, станки) надлежащего качества не подлежат
                    возврату или обмену на аналогичный товар других размера,
                    формы, габарита, фасона, расцветки или комплектации.
                </p>
            </div>
        </main>
    );
}
