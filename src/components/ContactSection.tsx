import { PhoneCall } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-dark rounded-3xl p-8 md:p-12 mt-8 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="md:w-1/2 relative z-10 text-light">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Нужна консультация?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                    Оставьте заявку, и наш специалист свяжется с вами в течение
                    15 минут, чтобы помочь с выбором или собрать заказ по смете.
                </p>
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                        <PhoneCall
                            size={28}
                            strokeWidth={1.5}
                            className="text-light"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">
                            Прямая линия
                        </p>
                        <p className="font-bold text-2xl tracking-wide">
                            8 (800) 000-00-00
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 w-full relative z-10">
                <form className="bg-light p-6 md:p-8 rounded-2xl shadow-lg space-y-4">
                    <h3 className="font-bold text-dark text-xl mb-4">
                        Заказать звонок
                    </h3>
                    <input
                        required
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-lg border border-border-main bg-bg-light focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <input
                        required
                        type="tel"
                        placeholder="Телефон"
                        className="w-full px-4 py-3 rounded-lg border border-border-main bg-bg-light focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-light font-bold py-4 rounded-xl transition-colors"
                    >
                        Жду звонка
                    </button>
                </form>
            </div>
        </section>
    );
}
