import { useEffect, useState } from "react";
// import "./burger.css";
import { Link } from "react-router-dom";
import { selectAuthAccessToken } from "../slicers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import scan from "../media/scan_logo_2.svg";
import userImg from "../media/header_user_img.png";
import style from "../styles/MenuComp.module.css";


const MenuComp = () => {
    const [isActive, setActive] = useState(false);

    const accessToken = useSelector(selectAuthAccessToken);
    const dispatch = useDispatch();
    const login = "Алексей А."

    return (
        <div className="menu2">
            <input className={style.menu_toggle} id="menu__toggle" type="checkbox" />
            <label className={style.menu_btn} htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className={style.menu_box}>
                <li><a className={style.menu_item} href="#">Home</a></li>
                <li><a className={style.menu_item} href="#">About</a></li>
                <li><a className={style.menu_item} href="#">Team</a></li>
                <li><a className={style.menu_item} href="#">Contact</a></li>
                <li><a className={style.menu_item} href="#">Twitter</a></li>
            </ul>
            <ul className={style.menu_box}>
                <li>

                    <Link className={style.nav_link} to="/">
                        Главная
                    </Link>
                </li>
                <li>
                    <a className={style.nav_link} href="/about">
                        Тарифы
                    </a>

                </li>
                <li>
                    <Link className={style.nav_link} to="/about">
                        FAQ
                    </Link>

                </li>
            </ul>
        </div>

        //     <div className={style.button_open} onClick={() => setActive(true)}> fffffff
        //         {isActive && (
        //             <div className={style.menu}>
        //                 <div className={style.top}>
        //                     <img className={style.logo} src={scan} alt="" />
        //                     <button
        //                         className={style.button_close}
        //                         onClick={(e) => {
        //                             e.stopPropagation();
        //                             setActive(false);
        //                         }}
        //                     ></button>
        //                 </div>
        //                 <nav className={style.nav}>
        //                     <Link className={style.nav_link} to="/">
        //                         Главная
        //                     </Link>
        //                     <a className={style.nav_link} href="/about">
        //                         Тарифы
        //                     </a>
        //                     <Link className={style.nav_link} to="/about">
        //                         FAQ
        //                     </Link>
        //                 </nav>
        //                 {accessToken ? (
        //                     <div className={style.user_info}>
        //                         <span className={style.username}>{login}</span>
        //                         <img
        //                             className={style.user_img}
        //                             src={userImg}
        //                             alt="user image"
        //                         />
        //                         <button
        //                             className={style.logout}
        //                             onClick={() => {
        //                                 dispatch(resetCredentials());
        //                             }}
        //                         >
        //                             <Link to="/">Выйти</Link>
        //                         </button>
        //                     </div>
        //                 ) : (
        //                     <div className={style.not_signed}>
        //                         <Link className={style.sign_up} to="/about">
        //                             Зарегистрироваться
        //                         </Link>
        //                         <Link className={style.nav_link} to="/login">
        //                             Войти
        //                         </Link>
        //                     </div>
        //                 )}
        //             </div>
        //         )}
        //     </div>
        // );
    )
};

export default MenuComp;
