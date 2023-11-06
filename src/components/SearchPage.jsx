import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "../styles/SearchPage.module.css";
import document from "../media/search_document.svg";
import folders from "../media/search_folders.svg";
import man from "../media/search_man.svg";

import { Link } from "react-router-dom";


function SearchPage() {
    const store = { token: true };
    return (
        <div className={style.search}>

            <div className={style.texts_images}>
                <div className={style.search_text}>
                    <h1 className={style.search_title}>
                        Найдите необходимые<br /> данные в пару кликов.
                    </h1>
                    <p className={style.search_details}>
                        Задайте параметры поиска. <br />
                        Чем больше заполните, тем точнее поиск
                    </p>
                </div>
                <img src={document} alt="document" className={style.document_img} />
                <img src={folders} alt="folders" className={style.folders_img} />
            </div>
            <div className={style.search_body}>
                {/* <div className={style.search_form}></div> */}
                <SearchForm />
                <div className={style.search_images}>
                    <img src={man} alt="man" className={style.man_img} />
                </div>
            </div>
        </div>
    );

}

const SearchForm = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     !store.token && navigate("/auth");
    // });

    // useEffect(() => {
    //     store.resetSearchFormChecks();
    // });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            inn: "7736050003",
        },
    });
    const store = { startDate: new Date(), endDate: new Date() };

    const onSubmit = (data) => {
        //   store.setSummaryError(false);
        //   store.setInn(data.inn);
        //   store.setLimit(data.limit);
        //   store.getHistograms();
        //   store.setDocument([]);
        //   store.setIDs({});
        //   store.getIDs();
        //   navigate("/result");
        navigate("/about");
    };
    const setSearchFormChecks = (str) => {
        console.log(`${str}=true`);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="search-form__inputs">
                <label className="search-form__label">
                    ИНН компании *
                    <input
                        className={
                            errors?.inn
                                ? "search-form__input search-form__input-invalid"
                                : "search-form__input"
                        }
                        placeholder="10 цифр"
                        {...register("inn", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                            pattern: {
                                value: /^[0-9]{10}$/,
                            },
                        })}
                    />
                    {errors?.inn && errors.inn.type === "required" && (
                        <p className="search-form__error-message">Обязательное поле</p>
                    )}
                    {errors?.inn && errors.inn.type === "minLength" && (
                        <p className="search-form__error-message">Не менее 10 цифр</p>
                    )}
                    {errors?.inn && errors.inn.type === "maxLength" && (
                        <p className="search-form__error-message">Не более 10 цифр</p>
                    )}
                    {errors?.inn && errors.inn.type === "pattern" && (
                        <p className="search-form__error-message">
                            Введите корректные данные
                        </p>
                    )}
                </label>
                <label className="search-form__label">
                    Тональность
                    <select
                        className="search-form__input"
                        onChange={(e) => {
                            console.log('tonality', e.target.value);
                        }}
                    >
                        <option value={"any"}>Любая</option>
                        <option value={"positive"}>Позитивная</option>
                        <option value={"negative"}>Негативная</option>
                    </select>
                </label>
                <label className="search-form__label">
                    Количество документов в выдаче *
                    <input
                        type="number"
                        className={
                            errors?.limit
                                ? "search-form__input search-form__input-invalid"
                                : "search-form__input"
                        }
                        placeholder="От 1 до 1000"
                        {...register("limit", {
                            required: true,
                            min: 1,
                            max: 1000,
                        })}
                    />
                    {errors?.limit && errors.limit.type === "required" && (
                        <p className="search-form__error-message">Обязательное поле</p>
                    )}
                    {errors?.limit && errors.limit.type === "min" && (
                        <p className="search-form__error-message">Не менее 1</p>
                    )}
                    {errors?.limit && errors.limit.type === "max" && (
                        <p className="search-form__error-message">Не более 1000</p>
                    )}
                </label>
                <div className="date-picker__wrapper">
                    <p className="search-form__label">Диапазон поиска *</p>
                    <div className="date-picker">
                        <div className="date-picker__label">
                            <DatePicker
                                id="startDate"
                                selectsStart
                                required={true}
                                className="search-form__input dates"
                                startDate={store.startDate}
                                dateFormat="dd.MM.yyyy"
                                selected={store.startDate}
                                maxDate={store.endDate}
                                onChange={(startDate) => {
                                    console.log('start_date', startDate);
                                }}
                                fixedHeight
                                showYearDropdown
                            />
                            <label className="required-info" htmlFor="startDate">
                                Дата начала
                            </label>
                        </div>
                        <div className="date-picker__label">
                            <DatePicker
                                selectsEnd
                                required={true}
                                className="search-form__input dates"
                                startDate={store.startDate}
                                dateFormat="dd.MM.yyyy"
                                selected={store.endDate}
                                minDate={store.startDate}
                                maxDate={new Date()}
                                onChange={(endDate) => {
                                    console.log('end_date', endDate);
                                }}
                                fixedHeight
                                showYearDropdown
                            />
                            <label className="required-info" htmlFor="startDate">
                                Дата конца
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-form__checks-wrapper">
                <div className="search-form__checks">
                    <div className="search-form__check">
                        <input
                            id="fullness"
                            type="checkbox"
                            onChange={
                                () => {
                                    // store.setSearchFormChecks("isFullness");
                                    console.log('isFulness=true')
                                }
                            }
                        />
                        <label htmlFor="fullness" className="checks-label">
                            Признак максимальной полноты
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="business"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isBusiness")}
                        />
                        <label htmlFor="business" className="checks-label">
                            Упоминания в бизнес-контексте
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="main-role"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isMainRole")}
                        />
                        <label htmlFor="main-role" className="checks-label">
                            Главная роль в публикации
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="risk"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isRisksOnly")}
                        />
                        <label htmlFor="risk" className="checks-label">
                            Публикации только с риск-факторами
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="tech-news"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isTechNews")}
                        />
                        <label htmlFor="tech-news" className="checks-label">
                            Включать технические новости рынков
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="announcement"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isAnnouncement")}
                        />
                        <label htmlFor="announcement" className="checks-label">
                            Включать анонсы и календари
                        </label>
                    </div>
                    <div className="search-form__check">
                        <input
                            id="news"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isNews")}
                        />
                        <label htmlFor="news" className="checks-label">
                            Включать сводки новостей
                        </label>
                    </div>
                </div>
                <div className="search-form__button">
                    <button
                        disabled={!isValid}
                        className="form-button__submit"
                        type="submit"
                    >
                        Поиск
                    </button>
                    <p className="required-info">* Обязательные к заполнению поля</p>
                </div>
            </div>
        </form>
    );
};


export default SearchPage;
