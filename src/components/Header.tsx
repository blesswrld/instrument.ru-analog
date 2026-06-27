import Link from "next/link";
import Image from "next/image";
import { Search, Phone } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-dark text-light py-3 sm:py-4 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-y-4 gap-x-4">
                {/* Логотип */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/progressm-logo.png"
                        alt="ТСК ПРОГРЕСС"
                        width={160}
                        height={50}
                        className="h-12 sm:h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Контакты */}
                <div className="flex flex-col items-end">
                    <a
                        href="tel:+78000000000"
                        className="flex items-center gap-1.5 sm:gap-2 font-bold text-sm sm:text-lg hover:text-primary transition-colors"
                    >
                        <Phone
                            size={16}
                            strokeWidth={2.5}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <span>8 (800) 000-00-00</span>
                    </a>
                    <span className="hidden sm:block text-xs text-gray-400">
                        Пн-Пт: 9:00 - 18:00
                    </span>
                </div>

                {/* Поиск */}
                <div className="w-full md:w-auto md:flex-1 max-w-xl relative order-last md:order-none md:mx-4">
                    <input
                        type="text"
                        placeholder="Поиск по каталогу..."
                        className="w-full bg-light text-dark px-4 py-2 sm:py-2.5 pr-12 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-main hover:text-primary transition-colors">
                        <Search size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </header>
    );
}
