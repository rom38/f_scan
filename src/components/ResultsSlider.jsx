// import "./summarySlider.css";
import { useSelector } from "react-redux";
import { selectSearchOptions, selectSearchRequest } from "../slicers/searchSlice";
import { useEffect } from "react";
import { useGetHistogramsQuery } from "../services/apiScan";
import { useDispatch } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import store from "../../../store/store";
import style from "../styles/ResultsSlider.module.css";
// import "./slider.css";
import "../styles/ResultsSlider.css"



const ResultsSlider = () => {
    const dispatch = useDispatch()
    // dispatch(makeSearchRequest());
    // const searchRequestData = useSelector(selectSearchRequest);
    const searchOptions = useSelector(selectSearchOptions);
    const { data: store, error, isLoading } = useGetHistogramsQuery(makeSearchRequestData(searchOptions));
    console.log('query histogram', store)

    let date = store.data[0].data.map((item) =>
        item.date.slice(0, 10).split("-").reverse().join(".")
    );
    let total = store.data[0].data.map((item) => item.value);
    let risks = store.data[1].data.map((item) => item.value);

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
    // const store = { isLoading: false }

    return (
        <div>
            {isLoading === true ? (
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
                                    <div className={style.slider_item} id={index} key={index}>
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

const makeSearchRequestData = ({ inn, tonality, limit, startDate,
    endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors,
    includeTechNews, includeAnnouncements, includeDigests }) => {
    const pattern = {
        "issueDateInterval": {
            "startDate": "2019-01-01",
            "endDate": "2022-08-31"
        },
        "searchContext": {
            "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                    {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": 7710137066,
                        "maxFullness": true,
                        "inBusinessNews": null
                    }
                ],
                "onlyMainRole": true,
                "tonality": "any",
                "onlyWithRiskFactors": false,
                "riskFactors": {
                    "and": [],
                    "or": [],
                    "not": []
                },
                "themes": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "themesFilter": {
                "and": [],
                "or": [],
                "not": []
            }
        },
        "searchArea": {
            "includedSources": [],
            "excludedSources": [],
            "includedSourceGroups": [],
            "excludedSourceGroups": []
        },
        "attributeFilters": {
            "excludeTechNews": true,
            "excludeAnnouncements": true,
            "excludeDigests": true
        },
        "similarMode": "duplicates",
        "limit": 10,
        "sortType": "sourceInfluence",
        "sortDirectionType": "desc",
        "intervalType": "month",
        "histogramTypes": [
            "totalDocuments",
            "riskFactors"
        ]
    }
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities'][0]['inn'] = inn;
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities']['tonality'] = tonality;
    pattern['limit'] = limit;
    pattern['issueDateInterval']['startDate'] = startDate.slice(0, 10);
    pattern['issueDateInterval']['endDate'] = endDate.slice(0, 10);
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities'][0]['maxFullness'] = maxFullness;
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities'][0]['inBusinessNews'] = inBusinessNews;
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities']['onlyMainRole'] = onlyMainRole;
    pattern['searchContext']['targetSearchEntitiesContext']['targetSearchEntities']['onlyWithRiskFactors'] = onlyWithRiskFactors;
    // revert
    pattern['attributeFilters']['excludeTechNews'] = !includeTechNews;
    pattern['attributeFilters']['excludeAnnouncements'] = !includeAnnouncements;
    pattern['attributeFilters']['excludeDigests'] = !includeDigests;
    return pattern

}
