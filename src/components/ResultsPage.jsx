import style from "../styles/ResultsPage.module.css";
import resultsWoman from "../media/results_woman.svg";
import mainImg2 from "../media/main_img_2.svg";
import SimpleSlider from "./MainPageSlider";
import Tariff from "./MainPageTariff";
import { Link } from "react-router-dom";
import ResultsSlider from "./ResultsSlider";
import Documents from "./ResultsDocuments";
import { selectAuthAccessToken } from "../slicers/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function ResultsPage() {
    const accessToken = useSelector(selectAuthAccessToken);
    const navigate = useNavigate();
    useEffect(() => {
        !accessToken && navigate("/");
    });


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

                </div>
                <img src={resultsWoman} alt="" />
            </div >
            <ResultsSlider />

            <div className={style.header_2}>
                Список документов
            </div>
            <Documents />
        </>
    );
}

export default ResultsPage;
