import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import AppContext from "./utils/context";
import VideoSection from "./components/Reels/VideoSection";
import Reels from "./components/Reels/Reels";
// import Reels from "./components/Reels/Reels";

function App() {
    return (
        <HashRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/reel" element={<Reels />} />
                </Routes>
            </AppContext>
        </HashRouter>
    );
}

export default App;
