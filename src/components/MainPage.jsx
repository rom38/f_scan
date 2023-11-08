import style from "../styles/MainPage.module.css";
import mainImg1 from "../media/main_img_1.jpg";
import mainImg2 from "../media/main_img_2.svg";
import SimpleSlider from "./MainPageSlider";
import Tariff from "./MainPageTariff";
import { Link } from "react-router-dom";

function MainPage() {
    const store = { token: false };
    return (
        <>
            <div className={style.container_1}>
                <div>

                    <div className={style.header_1}>
                        сервис по поиску публикаций<br /> о компании по его ИНН
                    </div>
                    <p className={style.subheader_1}>
                        Комплексный анализ публикаций, получение данных<br />
                        в формате PDF на электронную почту.
                    </p>
                    <button className={style.button_1}>
                        {store.token ? (
                            <Link to="/search">Запросить данные</Link>
                        ) : (
                            <Link to="/login">Войти</Link>
                        )}
                    </button>
                </div>
                <img src={mainImg1} alt="" />
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

export default MainPage;
