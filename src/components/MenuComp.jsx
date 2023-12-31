import { useEffect, useState } from "react";
// import "./burger.css";
import { Link } from "react-router-dom";
import { selectAuthAccessToken } from "../slicers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { resetCredentials } from "../slicers/authSlice";

import scan from "../media/scan_logo_1.svg";
import userImg from "../media/header_user_img.png";
import style from "../styles/MenuComp.module.css";


const MenuComp = () => {
    const [isActive, setActive] = useState(false);

    const accessToken = useSelector(selectAuthAccessToken);
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const login = "Алексей А."

    return (
        <div className={style.button_open}>
            <input className={style.menu_toggle}
                id="menu__toggle" type="checkbox"
                checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}
            />
            <label className={style.menu_btn} htmlFor="menu__toggle">
                <span></span>
            </label>


            <img className={style.logo} src={scan} alt="" />
            <ul className={style.menu_box}>
                <li>

                    <Link className={style.nav_link} to="/" onClick={() => setIsChecked(false)}>
                        Главная
                    </Link>
                </li>
                <li>
                    <a className={style.nav_link} href="/about" onClick={() => setIsChecked(false)}>
                        Тарифы
                    </a>

                </li>
                <li>
                    <Link className={style.nav_link} to="/about" onClick={() => setIsChecked(false)}>
                        FAQ
                    </Link>

                </li>

                {accessToken ? (
                    <>
                        <div className={style.user_info}>
                            <span className={style.username}>{login}</span>
                            <img
                                className={style.user_img}
                                src={userImg}
                                alt="user image"
                            />
                        </div>
                        <button
                            className={style.logout}
                            onClick={() => {
                                dispatch(resetCredentials());
                                setIsChecked(false);
                            }}
                        >
                            <Link to="/" >Выйти</Link>
                        </button>
                    </>
                ) : (
                    <div className={style.not_signed}>
                        <Link className={style.sign_up} to="/about" onClick={() => setIsChecked(false)}>
                            Зарегистрироваться
                        </Link>
                        <Link className={style.sign_in} to="/login" onClick={() => setIsChecked(false)}>
                            Войти
                        </Link>
                    </div>
                )}

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
