import { useEffect, useState } from "react";
// import "./documents.css";
// import store from "../../../store/store";
// import { observer } from "mobx-react-lite";
import style from "../styles/ResultsDocuments.module.css";
import { useGetObjectsQuery } from "../services/apiScan"

import { Link } from "react-router-dom";
import Document from "./ResultsDocument";

import { useSelector } from "react-redux";
import { selectSearchOptions, selectSearchRequest } from "../slicers/searchSlice";

const Documents = () => {
    const [isActive, setActive] = useState(true);
    const numDocs = 10;
    const [nextDocs, setNextDocs] = useState(numDocs);
    const searchOptions = useSelector(selectSearchOptions);
    const { data, error, isLoading } = useGetObjectsQuery(makeSearchRequestData(searchOptions));//, { refetchOnMountOrArgChange: true });

    useEffect(() => {
        if (data) {
            console.log('in useeffect objectsearch', data)
            if (nextDocs >= data.items.length) {
                setActive(false);
            }
        }
    }, [nextDocs, data]);

    useEffect(() => {
        if (data) {
            setActive(false);
            if (data.items[0] !== undefined) {
                if (data.items.length <= numDocs) {
                    setActive(false);
                    return;
                } else {
                    setActive(true);
                }
            }
        }
    }, [data]);

    const showNextDocs = () => {
        setNextDocs(nextDocs => nextDocs + numDocs);
    };

    // if (!store.document) {
    //     setActive(false);
    //     return (
    //         <p className="search-result__error search-result-error__info">
    //             Что-то пошло не так :( <br />
    //             Попробуйте <Link to="/search">изменить параметры поиска</Link>
    //         </p>
    //     );
    // }

    return (
        <div className={style.wrapper}>
            <h3 className={`${style.summary_title} ${style.title}`}>Список документов</h3>
            <div className={style.documents}>
                {data?.items &&
                    data.items.slice(0, nextDocs).map((el) => (
                        <Document idDoc={el.encodedId} key={el.encodedId.slice(3, 10)} />
                    ))}
            </div>
            {isLoading ? (
                <button disabled className={style.button_active}>
                    <div className="lds-ellipsis search-loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            ) : (
                <button
                    className={isActive ? style.button_active : style.disabled}
                    onClick={showNextDocs}
                >
                    Показать больше
                </button>
            )}
        </div>
    );
};

export default Documents;


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
