"use client";

import { useState } from "react";
import RequestModal from "./RequestModal";

interface ProductCardProps {
    name: string;
    article: string;
}

export default function ProductCard({ name, article }: ProductCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-light border border-border-main rounded-xl p-5 flex flex-col justify-between h-full transition-all hover:shadow-xl hover:border-primary/50 group">
                <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-2 font-mono">
                        Арт: {article}
                    </p>
                    <h3 className="font-semibold text-lg text-dark leading-tight group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full border-2 border-primary text-primary font-bold py-2.5 rounded-lg hover:bg-primary hover:text-light transition-all active:scale-95"
                >
                    Цена по запросу
                </button>
            </div>

            <RequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={name}
                productArticle={article}
            />
        </>
    );
}
