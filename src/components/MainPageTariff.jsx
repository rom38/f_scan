import { Link } from "react-router-dom";
import style from "../styles/MainPageTariff.module.css";
import checkpoint from "../media/tariff_check.svg";
import { tariff_data } from "../data/tariff_data";

//const Tariff = observer(() => {
const Tariff = () => {
    // useEffect(() => {
    //   store.checkToken();
    // }, []);
    const store = { "token": "1" };


    let res = tariff_data.map(function (item) {
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

