import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DeliveryPage() {
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
                Доставка и оплата
            </h1>

            <div className="bg-white rounded-2xl p-8 border border-border-main shadow-sm space-y-8 text-text-main leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-dark mb-4">
                        Способы доставки
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="text-primary font-bold">1.</span>
                            <div>
                                <strong className="text-dark">
                                    Самовывоз со склада
                                </strong>
                                <br />
                                Бесплатно. Забрать заказ можно в рабочие дни с
                                9:00 до 18:00 после подтверждения готовности
                                менеджером.
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-primary font-bold">2.</span>
                            <div>
                                <strong className="text-dark">
                                    Курьерская доставка
                                </strong>
                                <br />
                                Осуществляется собственной курьерской службой.
                                Стоимость рассчитывается индивидуально в
                                зависимости от габаритов груза и адреса.
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-primary font-bold">3.</span>
                            <div>
                                <strong className="text-dark">
                                    Транспортные компании (ТК)
                                </strong>
                                <br />
                                Отправляем заказы по всей России через Деловые
                                Линии, ПЭК, СДЭК. Доставка до терминала ТК в
                                нашем городе — бесплатно.
                            </div>
                        </li>
                    </ul>
                </section>

                <hr className="border-border-main" />

                <section>
                    <h2 className="text-2xl font-bold text-dark mb-4">
                        Способы оплаты
                    </h2>
                    <p className="mb-4">
                        Мы работаем как с юридическими, так и с физическими
                        лицами.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Безналичный расчет (с НДС):</strong> для
                            юридических лиц после выставления счета.
                        </li>
                        <li>
                            <strong>Банковская карта:</strong> оплата онлайн или
                            при получении в пункте самовывоза.
                        </li>
                        <li>
                            <strong>Наличные:</strong> при самовывозе или
                            курьеру при получении товара.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
