import style from "../styles/ResultsPage.module.css";
import resultsWoman from "../media/results_woman.svg";
import mainImg2 from "../media/main_img_2.svg";
import SimpleSlider from "./MainPageSlider";
import Tariff from "./MainPageTariff";
import { Link } from "react-router-dom";

function ResultsPage() {
    const store = { token: true };
    return (
        <>
            <div className={style.container_1}>
                <div>

                    <div className={style.header_1}>
                        Ищем.Скоро<br /> будут Результаты.
                    </div>
                    <p className={style.subheader_1}>
                        Поиск может занять некоторое время, <br /> просим сохранять терпение.
                    </p>
                    <button className={style.button_1}>
                        {store.token ? (
                            <Link to="/search">Запросить данные</Link>
                        ) : (
                            <Link to="/auth">Войти</Link>
                        )}
                    </button>
                </div>
                <img src={resultsWoman} alt="" />
            </div >
            <div className={style.header_2}>
                почему именно мы
            </div>
            <SimpleSlider />
            <img className={style.mainImg2} src={mainImg2} alt="" />
            <div className={style.header_2}>
                наши тарифы
            </div>
            <Tariff />
        </>
    );
}

export default ResultsPage;
