import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-gray-400 py-12 border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Инфо */}
                <div>
                    <div className="font-bold text-xl tracking-wider text-light mb-4">
                        ПРОГРЕСС
                    </div>
                    <p className="text-sm mb-6 leading-relaxed">
                        Комплексные поставки строительных материалов и
                        инструмента для профессионалов.
                    </p>
                    <div className="space-y-3">
                        <a
                            href="mailto:a.zhmakina@tskprogress.ru"
                            className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                        >
                            <Mail size={16} />
                            a.zhmakina@tskprogress.ru
                        </a>
                        <a
                            href="tel:+78000000000"
                            className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                        >
                            <Phone size={16} />8 (800) 000-00-00
                        </a>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin
                                size={16}
                                className="text-primary shrink-0"
                            />
                            <span>
                                г. Москва, ул. Примерная, д. 1, офис 100
                            </span>
                        </div>
                    </div>
                </div>

                {/* Навигация */}
                <div>
                    <h4 className="text-light font-bold mb-4">Клиентам</h4>
                    <ul className="space-y-2 text-sm flex flex-col">
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Каталог товаров
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                            О компании
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Доставка и оплата
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Контакты
                        </Link>
                    </ul>
                </div>

                {/* Реквизиты */}
                <div>
                    <h4 className="text-light font-bold mb-4">Реквизиты</h4>
                    <div className="text-sm space-y-2">
                        <p className="text-light">ООО «ТСК ПРОГРЕСС»</p>
                        <p>ИНН: 0000000000</p>
                        <p>КПП: 000000000</p>
                        <p>ОГРН: 0000000000000</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
                © {new Date().getFullYear()} ТСК ПРОГРЕСС. Все права защищены.
            </div>
        </footer>
    );
}
