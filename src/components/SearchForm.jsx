import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "../styles/SearchForm.module.css";


function SearchForm() {
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
        control,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            inn: "7736050003",
            endDate: new Date(2023, 10, 10),
            startDate: new Date(2022, 1, 10),
        },
    });
    const store = { startDate: new Date(2022, 1, 10), endDate: new Date(2023, 10, 10) };

    const onSubmit = (data) => {
        //   store.setSummaryError(false);
        //   store.setInn(data.inn);
        //   store.setLimit(data.limit);
        //   store.getHistograms();
        //   store.setDocument([]);
        //   store.setIDs({});
        //   store.getIDs();
        //   navigate("/result");
        console.log('form_search_data', data);
        navigate("/results");
    };
    const setSearchFormChecks = (str) => {
        console.log(`${str}=true`);
    }

    return (
        <form className={style.search_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputs}>
                <label className={style.label}>
                    ИНН компании*
                    <input
                        className={
                            errors?.inn
                                ? `${style.input} ${style.input_invalid}`
                                : style.input
                        }
                        placeholder="10 цифр"
                        {...register("inn", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                            pattern: {
                                value: /^[0-9]{10}$/,
                            },
                            validate: validateINN || "контроль не пройден"
                        })}
                    />
                    {errors?.inn && errors.inn.type === "required" && (
                        <p className={style.error_message}>Обязательное поле</p>
                    )}
                    {errors?.inn && errors.inn.type === "minLength" && (
                        <p className={style.error_message}>Не менее 10 цифр</p>
                    )}
                    {errors?.inn && errors.inn.type === "maxLength" && (
                        <p className={style.error_message}>Не более 10 цифр</p>
                    )}
                    {errors?.inn && errors.inn.type === "pattern" && (
                        <p className={style.error_message}>
                            Введите корректные данные
                        </p>
                    )}
                    {errors?.inn && errors.inn.type === "validate" && (
                        <p className={style.error_message}>
                            Контроль ИНН не пройден
                        </p>
                    )}
                </label>
                <label className={style.label}>
                    Тональность
                    <select
                        className={style.input}
                        onChange={(e) => {
                            console.log('tonality', e.target.value);
                        }}
                    >
                        <option value={"any"}>Любая</option>
                        <option value={"positive"}>Позитивная</option>
                        <option value={"negative"}>Негативная</option>
                    </select>
                </label>
                <label className={style.label}>
                    Количество документов в выдаче*
                    <input
                        type="number"
                        className={
                            errors?.limit
                                ? `${style.input} ${style.input_invalid}`
                                : style.input
                        }
                        placeholder="От 1 до 1000"
                        {...register("limit", {
                            required: true,
                            min: 1,
                            max: 1000,
                        })}
                    />
                    {errors?.limit && errors.limit.type === "required" && (
                        <p className={style.error_message}>Обязательное поле</p>
                    )}
                    {errors?.limit && errors.limit.type === "min" && (
                        <p className={style.error_message}>Не менее 1</p>
                    )}
                    {errors?.limit && errors.limit.type === "max" && (
                        <p className={style.error_message}>Не более 1000</p>
                    )}
                </label>
                <div className={style.date_picker_wrapper}>
                    <label className={style.label}>Диапазон поиска*</label>
                    <div className={style.date_picker}>
                        <div className={style.date_picker_label}>
                            <Controller
                                control={control}
                                name="startDate"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        selected={value}
                                        selectsStart
                                        required={true}
                                        className={`${style.input} ${style.dates}`}
                                        startDate={store.startDate}
                                        dateFormat="dd.MM.yyyy"
                                        minDate={store.startDate}
                                        maxDate={store.endDate}
                                        fixedHeight
                                        showYearDropdown
                                        placeholderText={'Дата начала'}
                                        popperPlacement='auto'
                                    />)}
                            />
                        </div>
                        <div className={style.date_picker_label}>
                            <Controller
                                control={control}
                                name="endDate"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <DatePicker
                                        onChange={onChange}
                                        selected={value}
                                        selectsEnd
                                        required={true}
                                        className={`${style.input} ${style.dates}`}
                                        startDate={store.startDate}
                                        dateFormat="dd.MM.yyyy"
                                        minDate={store.startDate}
                                        maxDate={new Date()}
                                        fixedHeight
                                        showYearDropdown
                                        popperPlacement='auto'
                                        placeholderText={'Дата конца'}
                                    />)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.checks_wrapper}>
                <div className={style.checks}>
                    <div className={style.check}>
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
                        <label htmlFor="fullness" className={style.checks_label}>
                            Признак максимальной полноты
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="business"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isBusiness")}
                        />
                        <label htmlFor="business" className={style.checks_label}>
                            Упоминания в бизнес-контексте
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="main-role"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isMainRole")}
                        />
                        <label htmlFor="main-role" className={style.checks_label}>
                            Главная роль в публикации
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="risk"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isRisksOnly")}
                        />
                        <label htmlFor="risk" className={style.checks_label}>
                            Публикации только с риск-факторами
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="tech-news"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isTechNews")}
                        />
                        <label htmlFor="tech-news" className={style.checks_label}>
                            Включать технические новости рынков
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="announcement"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isAnnouncement")}
                        />
                        <label htmlFor="announcement" className={style.checks_label}>
                            Включать анонсы и календари
                        </label>
                    </div>
                    <div className={style.check}>
                        <input
                            id="news"
                            type="checkbox"
                            onChange={() => setSearchFormChecks("isNews")}
                        />
                        <label htmlFor="news" className={style.checks_label}>
                            Включать сводки новостей
                        </label>
                    </div>
                </div>
                <div className={style.button}>
                    <button
                        disabled={!isValid}
                        className={style.button_submit}
                        type="submit"
                    >
                        Поиск
                    </button>
                    <p className={style.required_info}>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;

function validateINN(inn) {
    if (inn.length !== 10) {
        return false; // ИНН должен состоять из 10 цифр
    }

    const weights = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += parseInt(inn.charAt(i)) * weights[i];
    }

    const remainder = sum % 11;
    const controlDigit = (remainder < 10) ? remainder : 0;

    return controlDigit === parseInt(inn.charAt(9));
}

// Пример использования:
// const inn = "1234567890"; // Замените на нужный ИНН
// const isValid = validateINN(inn);
// console.log(`ИНН ${inn} ${isValid ? "валиден" : "не валиден"}`);