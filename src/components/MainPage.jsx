import style from "../styles/Main.module.css";
import mainImg1 from "../media/main_img_1.svg";
import mainImg2 from "../media/main_img_2.svg";

function MainPage() {
    return (
        <>
            <div className={style.header_1}>
                сервис по поиску публикаций о компании по его ИНН
            </div>
            <img src={mainImg1} alt="" />
            <div className={style.header_1}>
                почему именно мы
            </div>
            <img src={mainImg2} alt="" />
            <div className={style.header_1}>
                наши тарифы
            </div>
        </>
    );
}

export default MainPage;
