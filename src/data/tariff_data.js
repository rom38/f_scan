import beginner from "../media/tariff_beginner.svg";
import pro from "../media/tariff_pro.svg";
import business from "../media/tariff_business.svg";

export const tariff_data = [
    {
        styleObj: {
            background: "var(--main-color-yellow)",
        },
        id: 1,
        title: "Beginner",
        image: beginner,
        description: "Для небольшого исследования",
        price: "1 200 ₽",
        discount: "799 ₽",
        loan: "или 150 ₽/мес. при рассрочке на 24 мес.",
        details: {
            detail1: "Безлимитная история запросов",
            detail2: "Безопасная сделка",
            detail3: "Поддержка 24/7",
        },
    },
    {
        styleObj: {
            background: "var(--main-color-light-green)",
        },
        id: 2,
        title: "Pro",
        image: pro,
        description: "Для HR и фрилансеров",
        price: "2 600 ₽",
        discount: "1 299 ₽",
        loan: "или 279 ₽/мес. при рассрочке на 24 мес.",
        details: {
            detail1: "Все пункты тарифа Beginner",
            detail2: "Экспорт истории",
            detail3: "Рекомендации по приоритетам",
        },
    },
    {
        styleObj: {
            background: "#000",
            color: "#fff",
        },
        id: 3,
        title: "Business",
        image: business,
        description: "Для корпоративных клиентов",
        price: "3 700 ₽",
        discount: "2 379 ₽",
        loan: "",
        details: {
            detail1: "Все пункты тарифа Pro",
            detail2: "Безлимитное количество запросов",
            detail3: "Приоритетная поддержка",
        },
    },
];

//export const { tariff_data } = { tariff_data }; 