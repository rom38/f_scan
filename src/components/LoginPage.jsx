import style from "../styles/LoginPage.module.css";
import loginChar from "../media/login_characters.svg";
import mainImg2 from "../media/main_img_2.svg";

function LoginPage() {
    return (
        <div className={style.textForm}>
            <div className={style.header_1}>
                Для оформления подписки на тариф, необходимо авторизоваться.
            </div>
            <img src={loginChar} alt="" />

        </div>
    );
}

export default LoginPage;
