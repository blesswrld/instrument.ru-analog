"use client";

import { useState } from "react";

interface RequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    productArticle: string;
}

export default function RequestModal({
    isOpen,
    onClose,
    productName,
    productArticle,
}: RequestModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Здесь позже будет реальный API-запрос на отправку почты
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 3000); // Закрываем через 3 секунды после успеха
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-light w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl relative">
                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors"
                >
                    ✕
                </button>

                {isSuccess ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            ✓
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-2">
                            Заявка отправлена!
                        </h3>
                        <p className="text-text-main">
                            Наш менеджер скоро свяжется с вами для уточнения
                            цены.
                        </p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-dark mb-2">
                            Узнать цену
                        </h3>
                        <p className="text-sm text-text-main mb-6">
                            Оставьте контакты, и мы пришлем актуальную цену на{" "}
                            <br />
                            <span className="font-semibold text-dark">
                                {productName}
                            </span>{" "}
                            (Арт: {productArticle})
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-dark mb-1">
                                    Ваше имя
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Иван Иванов"
                                    className="w-full px-4 py-3 rounded-lg border border-border-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-light"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-dark mb-1">
                                    Телефон
                                </label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+7 (___) ___-__-__"
                                    className="w-full px-4 py-3 rounded-lg border border-border-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-light"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-dark mb-1">
                                    Email (необязательно)
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@mail.ru"
                                    className="w-full px-4 py-3 rounded-lg border border-border-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-light"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-light font-bold py-3 md:py-4 rounded-xl hover:bg-primary-dark transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting
                                    ? "Отправка..."
                                    : "Запросить цену"}
                            </button>
                            <p className="text-[10px] text-gray-400 text-center mt-4">
                                Нажимая кнопку, вы соглашаетесь с политикой
                                конфиденциальности.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
