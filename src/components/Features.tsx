import { Factory, Layers, Tags, Truck } from "lucide-react";

export default function Features() {
    const features = [
        {
            id: 1,
            title: "Прямые поставки",
            desc: "Работаем напрямую от производителей без наценок посредников.",
            icon: Factory,
        },
        {
            id: 2,
            title: "Широкий ассортимент",
            desc: "От фундамента до кровли — комплектуем строительные объекты под ключ.",
            icon: Layers,
        },
        {
            id: 3,
            title: "Специальные цены",
            desc: "Гибкая система скидок для оптовых и постоянных клиентов.",
            icon: Tags,
        },
        {
            id: 4,
            title: "Быстрая отгрузка",
            desc: "Собственная логистика и оперативная комплектация заказов.",
            icon: Truck,
        },
    ];

    return (
        <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className="p-6 bg-white border border-border-main rounded-xl hover:shadow-md transition-all group hover:border-primary/50"
                        >
                            <div className="w-14 h-14 bg-bg-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-light text-primary transition-colors">
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-dark mb-2 text-lg">
                                {item.title}
                            </h3>
                            <p className="text-sm text-text-main leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
