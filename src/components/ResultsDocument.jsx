// import "./document.css";
import style from "../styles/ResultsDocument.module.css";

import { Link } from "react-router-dom";
import mock from "../../../../assets/images/mock-img.svg";

const Document = (props) => {
    let xmlImg = "";
    if (props.content.match(/https?:\/\/\S+"/g) === null) {
        xmlImg = mock;
    } else {
        xmlImg = props.content
            .match(/https?:\/\/\S+"/g)
            .toString()
            .replace('"', "");
    }

    return (
        <div className={style.document}>
            <div className={style.top}>
                <p className={style.date}>{props.issueDate}</p>
                <Link className={style.date} to={props.link} target={"_blank"}>
                    {props.source}
                </Link>
            </div>
            <div className={style.title_tag}>
                <h3 className={style.title}>{props.title}</h3>
                {props.isTechNews && (
                    <span className={style.tag}>Технические новости</span>
                )}
                {props.isAnnouncement && (
                    <span className={`${style.tag} ${style.announcement}`}>Анонсы и события</span>
                )}
                {props.isDigest && (
                    <span className={`${style.tag} ${style.digest}`}>Сводки новостей</span>
                )}
            </div>
            <img className={style.img} src={xmlImg} alt="" />
            <p className={style.content}>
                {props.content
                    .replace(/<.*?>/g, "")
                    .replace(/;.*?;/g, "")
                    .replace(/&.*?t/g, "")
                    .replace(/s.*?;/g, "")
                    .replace(/\?.*?\d/g, "")
                    .replace(/\/.*?\s/g, "")
                    .replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g, "")}
            </p>
            <div className={style.bottom}>
                <Link className={style.link} to={props.link} target={"_blank"}>
                    Читать в источнике
                </Link>
                <span className={style.date}>Слова: {props.wordCount}</span>
            </div>
        </div>
    );
};

export default Document;