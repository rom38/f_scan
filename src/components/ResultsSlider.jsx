// import "./summarySlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import store from "../../../store/store";
import style from "../styles/ResultsSlider.module.css";
// import "./slider.css";
import "../styles/ResultsSlider.css"



const ResultsSlider = () => {
    let date = HistogramDataTest.data[0].data.map((item) =>
        item.date
            .substring(0, 10)
            .split("-")
            .join(".")
            .split(".")
            .reverse()
            .join(".")
    );
    let total = HistogramDataTest.data[0].data.map((item) => item.value);
    let risks = HistogramDataTest.data[1].data.map((item) => item.value);

    // store.setSummaryDates(date);
    // store.setSummaryTotal(total);
    // store.setSummaryRisks(risks);
    // store.setSummaryAll(
    //     store.summaryTotal.reduce((a, b) => {
    //         return a + b;
    //     }) +
    //     store.summaryRisks.reduce((a, b) => {
    //         return a + b;
    //     })
    // );
    const store = { isLoading: false }

    return (
        <div>
            {store.isLoading === true ? (
                <div className={style.slider_loader}>
                    <p className={style.loading_data}>Загружаем данные</p>
                </div>
            ) : (
                <>
                    <h3 className={style.summary_title}>Общая сводка</h3>
                    <p className={style.summary_all}>Найдено {store.summaryAll} вариантов</p>
                    <div className={style.slider_wrapper}>
                        <div className={style.slider_titles}>
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                        <Slider className={style.summary_slider} {...settings}>
                            {date &&
                                date.map((el, index) => (
                                    <div className={style.slider_item} id={index}>
                                        <p> {date[index]} </p>
                                        <p> {total[index]} </p>
                                        <p> {risks[index]} </p>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </>
            )}
        </div>
    );
};


export default ResultsSlider;

let settings = {
    dots: false,
    variableWidth: true,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            },
        },

        {
            breakpoint: 940,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const HistogramDataTest =
{
    "data": [{
        "data": [{
            "date": "2020-11-01T03:00:00+03:00",
            "value": 8
        }, {
            "date": "2020-06-01T03:00:00+03:00",
            "value": 6
        }],
        "histogramType": "totalDocuments"
    }, {
        "data": [{
            "date": "2020-11-01T03:00:00+03:00",
            "value": 0
        }, {
            "date": "2020-06-01T03:00:00+03:00",
            "value": 1
        }],
        "histogramType": "riskFactors"
    }]
}

