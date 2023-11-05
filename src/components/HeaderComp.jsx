// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "../styles/HeaderComp.module.css";
import imageLogo1 from "../media/scan_logo_1.svg";
import imageLogo2 from "../media/scan_logo_2.svg";
import headerSpinner from "../media/header_spinner.png";

const HeaderComp = () => {
    const classActive = ({ isActive }) => isActive ? style.active : "";

    const store = { token: true, isCompaniesLoading: false };
    let infoWidget = (
        <div className={style.info_widget}>{store?.isCompaniesLoading ? (
            <img className={style.lds} src={headerSpinner} />

        ) : (
            <>

                <p>
                    Использовано компаний
                    <span>{10}</span>
                </p>
                <p>
                    Лимит по компаниям
                    <span>{100}</span>
                </p>
            </>)}
        </div>

    );

    let loginInfo = (
        <>
            <p>Зарегистрироваться</p>
            <div className={style.divVertStick}></div>
            <NavLink to="/login" className={`${classActive} ${style.button}`}>Войти</NavLink>
        </>
    );
    let userInfo = null;
    let loaderWidget2 = (
        <div className={style.lds}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

    return (
        <header>
            <img src={imageLogo2} className={style.headerCol1} alt="" />
            <div className={`${style.headerLinks} ${style.headerCol2}`}>
                <NavLink to="/main" className={classActive}>Главная</NavLink>
                <NavLink to="/about" className={classActive}>Тарифы</NavLink>
                {/* <NavLink to="/faq" className={style.disableLink} >FAQ</NavLink> */}
                <NavLink to="/faq" className={classActive} >FAQ</NavLink>
            </div>

            <div className={`${style.headerLinks} ${style.headerCol3}`}>
                {store?.token && (<>{infoWidget}</>)}
                {store?.token ? userInfo : loginInfo}

            </div>
        </header>
    )
}

export default HeaderComp;
