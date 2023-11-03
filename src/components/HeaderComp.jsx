// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "../styles/HeaderComp.module.css";
import imageLogo1 from "../media/scan_logo_1.svg";
import imageLogo2 from "../media/scan_logo_2.svg";

const HeaderComp = () => {
    const classActive = ({ isActive }) => isActive ? style.active : "";

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
                <div className={style.info_widget}>
                    <p className="companies-info">
                        Использовано компаний
                        <span className="companies-number">
                            {10}
                        </span>
                    </p>
                    <p className="companies-info">
                        Лимит по компаниям
                        <span className="companies-number companies-number__limit">
                            {100}
                        </span>
                    </p>
                </div>
                <p >Зарегистрироваться</p>
                <div className={style.divVertStick}></div>
                <NavLink to="/login" className={`${classActive} ${style.button}`}>Войти</NavLink>
            </div>
        </header>
    )
}

export default HeaderComp;