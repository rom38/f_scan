import { Link } from "react-router-dom";
import style from "../styles/MainPageTariff.module.css";
import beginner from "../media/tariff_beginner.svg";
import pro from "../media/tariff_pro.svg";
import business from "../media/tariff_business.svg";
import checkpoint from "../media/tariff_check.svg";

//const Tariff = observer(() => {
const Tariff = () => {
  // useEffect(() => {
  //   store.checkToken();
  // }, []);
  const store = { "token": "1" };


  let res = tariff.map(function (item) {
    return (
      <div className={style.tariff} key={item.id}>
        <div className={style.header} style={item.styleObj}>
          <div className={style.headerInfo}>
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
          </div>
          <img alt="" src={item.image} />
        </div>
        <div
          className={
            store.token && item.id === 1
              ? `${style.body} ${style.bodyCurrent}`
              : style.body
          }
        >
          <span
            className={
              store.token && item.id === 1 ? style.current : style.disabled
            }
          >
            Текущий тариф
          </span>
          <div className={style.priceContainer}>
            <p className={style.price}>{item.price}</p>
            <p className={`${style.price} ${style.priceDiscount}`}>
              {item.discount}
            </p>
          </div>
          <p className={`${style.info} ${style.infoLoan}`}>{item.loan}</p>
          <p className={`${style.info} ${style.infoTitle}`}>В тариф входит:</p>
          <li className={style.info}>
            <img className={style.infoCheck} src={checkpoint} alt="" />
            {item.details.detail1}
          </li>
          <li className={style.info}>
            <img className={style.infoCheck} src={checkpoint} alt="" />
            {item.details.detail2}
          </li>
          <li className={style.info}>
            <img className={style.infoCheck} src={checkpoint} alt="" />
            {item.details.detail3}
          </li>
          <button
            className={
              store.token && item.id === 1
                ? `${style.button} ${style.buttonCurrent}`
                : style.button
            }
          >
            <Link to="/error">
              {store.token && item.id === 1
                ? "Перейти в личный кабинет"
                : "Подробнее"}
            </Link>
          </button>
        </div>
      </div>
    );
  });

  return <div className={style.tariffs}>{res}</div>;
};

export default Tariff;

const tariff = [
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

