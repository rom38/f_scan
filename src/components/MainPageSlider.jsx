import Slider from "react-slick";
import style from "../styles/MainPageSlider.module.css";
// import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/MainPageSlider.css"
import clock from "../media/main_clock.svg";
import glass from "../media/main_glass.svg";
import protect from "../media/main_protect.svg";
import galka from "../media/main_galka.svg";

function SimpleSlider() {
    return (
        <Slider {...settings}>
            {slider.map((card, id) => (
                <div className="slider-item" key={id}>
                    <img className={style.img} alt="" src={card.image} />
                    <p className={style.info}>{card.text}</p>
                </div>
            ))}
        </Slider>
    );
}

export default SimpleSlider;

let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const slider = [
    {
        text: "Высокая и оперативная скорость обработки заявки",
        image: clock,
    },

    {
        text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        image: glass,
    },

    {
        text: "Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        image: protect,
    },

    {
        text: "Отличная компания от других!",
        image: galka,
    },
];
