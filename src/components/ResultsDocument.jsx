// import "./document.css";
import style from "../styles/ResultsDocument.module.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSearchOptions, selectSearchRequest } from "../slicers/searchSlice";
import { selectAuthAccessToken } from "../slicers/authSlice";
import { useGetDocumentsQuery } from "../services/apiScan"


import fakeImg from "../media/fake_img.png";

const Document = (props) => {
    let xmlImg = "";
    const regString = RegExp`/<.*?>|
        ;.*?;|
        &.*?t|
        s.*?;|
        \?.*?\d|
        \/.*?\s|
        (https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g`

    const { data, error, isLoading } = useGetDocumentsQuery({
        "ids": ["1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="
        ]
    }, { refetchOnMountOrArgChange: true });

    useEffect(() => {
        if (data) {
            console.log('in useeffect document', data)
            setActive(false);
            if (data.items[0] !== undefined) {

                if (data.ok.content.markup.match(/https?:\/\/\S+"/g) === null) {
                    xmlImg = fakeImg;
                } else {
                    xmlImg = props.content
                        .match(/https?:\/\/\S+"/g)
                        .toString()
                        .replace('"', "");
                }
            }
        }
    }, [data]);


    return (data &&
        <div className={style.document}>
            <div className={style.top}>
                <p className={style.date}>{data.issueDate}</p>
                <Link className={style.date} to={data.attributes.wordCount} target={"_blank"}>
                    {data.source}
                </Link>
            </div>
            <div className={style.title_tag}>
                <h3 className={style.title}>{data.title.text}</h3>
                {data.attributes.isTechNews && (
                    <span className={style.tag}>Технические новости</span>
                )}
                {data.attributes.isAnnouncement && (
                    <span className={`${style.tag} ${style.announcement}`}>Анонсы и события</span>
                )}
                {data.attributes.isDigest && (
                    <span className={`${style.tag} ${style.digest}`}>Сводки новостей</span>
                )}
            </div>
            <img className={style.img} src={xmlImg} alt="" />
            <p className={style.content}>
                {data.content.markup
                    .replace(regString, "")
                    // .replace(/;.*?;/g, "")
                    // .replace(/&.*?t/g, "")
                    // .replace(/s.*?;/g, "")
                    // .replace(/\?.*?\d/g, "")
                    // .replace(/\/.*?\s/g, "")
                    // .replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2, 6})([/\w .-]*)/g, "")
                }
            </p>
            <div className={style.bottom}>
                <Link className={style.link} to={data.url} target={"_blank"}>
                    Читать в источнике
                </Link>
                <span className={style.date}>Слова: {data.attributes.wordCount}</span>
            </div>
        </div>
    );
};

export default Document;


