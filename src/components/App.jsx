//import style from './App.module.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";
// import NotFoundPage from "./NotFoundPage";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";
import { Layout } from "./Layout";
import ResultsPage from "./ResultsPage";

// import Categories from "./Categories";
// import SwaggerUIWidget from "./SwaggerUIWidget";
// import Dish from "./Dish";
// import CategoryDishes from "./CategoryDishes";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="main" element={<MainPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="faq" element={<AboutPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="results" element={<ResultsPage />} />


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
