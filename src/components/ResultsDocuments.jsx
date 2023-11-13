import { useEffect, useState } from "react";
// import "./documents.css";
// import store from "../../../store/store";
// import { observer } from "mobx-react-lite";
import style from "../styles/ResultsDocuments.module.css";

import { Link } from "react-router-dom";
import Document from "./ResultsDocument";

const Documents = () => {
    const [isActive, setActive] = useState(true);
    const [nextDocs, setNextDocs] = useState(10);

    useEffect(() => {
        if (nextDocs >= store.IDs.length) {
            setActive(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextDocs]);

    useEffect(() => {
        setActive(false);
        if (store.IDs[0] !== undefined) {
            if (store.IDs.length <= 10) {
                store.getFirstDocuments();
                setActive(false);
                return;
            } else {
                let next = store.IDs.slice(0, nextDocs);
                store.getNextDocuments(next);
                setActive(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.IDs]);

    const showNextTenDocs = () => {
        let next = store.IDs.slice(nextDocs, nextDocs + 10);
        store.getNextDocuments(next);
        setNextDocs(nextDocs + 10);
    };

    if (!store.document) {
        setActive(false);
        return (
            <p className="search-result__error search-result-error__info">
                Что-то пошло не так :( <br />
                Попробуйте <Link to="/search">изменить параметры поиска</Link>
            </p>
        );
    }

    return (
        <div className={style.wrapper}>
            <h3 className="summary-title documents-title">Список документов</h3>
            <div className={style.documents}>
                {store.document &&
                    store.document.map((el) => (
                        <Document
                            issueDate={el.ok.issueDate
                                .substring(0, 10)
                                .split("-")
                                .join(".")
                                .split(".")
                                .reverse()
                                .join(".")}
                            source={el.ok.source.name}
                            title={el.ok.title.text}
                            isTechNews={el.ok.attributes.isTechNews}
                            isAnnouncement={el.ok.attributes.isAnnouncement}
                            isDigest={el.ok.attributes.isDigest}
                            content={el.ok.content.markup}
                            link={el.ok.url}
                            wordCount={el.ok.attributes.wordCount}
                        />
                    ))}
            </div>
            {store.isDocumentLoading ? (
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
                    className={isActive ? { style.button_active } : { style.disabled }}
                    onClick={showNextTenDocs}
                >
                    Показать больше
                </button>
            )}
        </div>
    );
};

export default Documents;