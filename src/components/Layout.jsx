// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "../styles/Layout.module.css";
import imageLogo1 from "../media/scan_logo_1.svg";
import imageLogo2 from "../media/scan_logo_2.svg";

export const Layout = () => {
    const classActive = ({ isActive }) => isActive ? style.active : "";

    return (<>
        <header>
            <img src={imageLogo2} alt="" />
            <div className={style.headerLinks}>
                <NavLink to="/main" className={classActive}>Главная</NavLink>
                <NavLink to="/about" className={classActive}>Тарифы</NavLink>
                <NavLink to="#" className={style.disableLink} >FAQ</NavLink>

            </div>
            <div className={style.headerLinks}>
                <NavLink to="/login" className={classActive}>Войти</NavLink>
            </div>
        </header>
        <main>

            <Outlet />
        </main>
        <footer>
            <img src={imageLogo1} alt="" />
            <p>г. Москва, Цветной б-р, 40 <br />+7 495 771 21 11 info@skan.ru</p>
        </footer >
    </>
    )
}

