import style from "../styles/ResultsPage.module.css";
import resultsWoman from "../media/results_woman.svg";
import ResultsSlider from "./ResultsSlider";
import Documents from "./ResultsDocuments";

function ResultsPage() {

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

            {/* <div className={style.header_2}>
                Список документов
            </div> */}
            <Documents />
        </>
    );
}

export default ResultsPage;
