// import "./document.css";
import style from "../styles/ResultsDocument.module.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSearchOptions, selectSearchRequest } from "../slicers/searchSlice";
import { selectAuthAccessToken } from "../slicers/authSlice";
import { useGetDocumentsQuery } from "../services/apiScan"


import fakeImg from "../media/fake_img.png";

const Document = ({ idDoc }) => {
    // let xmlImg = "";
    let xmlImg = fakeImg;
    const regString = /<.*?>|;.*?;|&.*?t|s.*?;|\?.*?\d|\/.*?\s|(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g

    const emptyObject = {}

    const { data, error, isLoading, isSuccess, isError } = useGetDocumentsQuery({
        "ids": [idDoc
        ]
    },
        {
            refetchOnMountOrArgChange: true,
            selectFromResult: ({ data }) => ({
                data: data?.[0]?.ok ?? null
            })
        });

    useEffect(() => {
        if (data) {
            console.log('in useeffect document 2', data)
        }
    }, [data]);

    if (isError) return <div>An error has occurred!</div>
    // if (isSuccess) return <div>Success!!!</div>
    if (!data) return <div>Missing post!</div>

    if (data) return (
        <div className={style.document}>
            <div className={style.top}>
                <p className={style.date}>{data.issueDate}</p>
                <Link className={style.date} to={data.url} target={"_blank"}>
                    {data.source.name}
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


