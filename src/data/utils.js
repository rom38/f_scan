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


export { makeSearchRequestData, HistogramDataTest, };