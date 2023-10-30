//import style from './App.module.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";
// import NotFoundPage from "./NotFoundPage";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import { Layout } from "./Layout";
// import Categories from "./Categories";
// import SwaggerUIWidget from "./SwaggerUIWidget";
// import Dish from "./Dish";
// import CategoryDishes from "./CategoryDishes";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<Categories />} /> */}
                    <Route path="about" element={<AboutPage />} />
                    <Route path="main" element={<MainPage />} />
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route path="swagger" element={<SwaggerUIWidget />} /> */}
                    {/* <Route path="list-dishes/:id" element={<CategoryDishes />} /> */}
                    {/* <Route path="dish/:idDish" element={<Dish />} /> */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
