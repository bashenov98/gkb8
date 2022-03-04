import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Sangul from "./pages/Sangul";
import Ainel from "./pages/Ainel";
import AinurT from "./pages/AinurT";
import Aselya from "./pages/Aselya";
import AyaulymB from "./pages/AyaulymB";
import AyaulymS from "./pages/AyaulymS";
import Galima from "./pages/Galima";
import Galina from "./pages/Galina";
import Gulimay from "./pages/Gulimay";
import Irina from "./pages/Irina";
import IrinaAf from "./pages/IrinaAf";
import Kamila from "./pages/Kamila";
import LinaraAmantaevna from "./pages/LinaraAmantaevna";
import Madina from "./pages/Madina";
import Margarita from "./pages/Margarita";
import Marina from "./pages/Marina";
import Nazira from "./pages/Nazira";
import Oksana from "./pages/Oksana";
import SauleOryngalievna from "./pages/SauleOryngalievna";
import Taslima from "./pages/Taslima";
import Tatyana from "./pages/Tatyana";
import TatyanaN from "./pages/TatyanaN";
import Xeniya from "./pages/Xeniya";
import Zhazira from "./pages/Zhazira";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Sangul" element={<Sangul />}></Route>
                <Route path="/Ainel" element={<Ainel />}></Route>
                <Route path="/AinurT" element={<AinurT />}></Route>
                <Route path="/Aselya" element={<Aselya />}></Route>
                <Route path="/AyaulymB" element={<AyaulymB />}></Route>
                <Route path="/AyaulymS" element={<AyaulymS />}></Route>
                <Route path="/Galima" element={<Galima />}></Route>
                <Route path="/Galina" element={<Galina />}></Route>
                <Route path="/Gulimay" element={<Gulimay />}></Route>
                <Route path="/Irina" element={<Irina />}></Route>
                <Route path="/IrinaAf" element={<IrinaAf />}></Route>
                <Route path="/Kamila" element={<Kamila />}></Route>
                <Route path="/LinaraAmantaevna" element={<LinaraAmantaevna />}></Route>
                <Route path="/Madina" element={<Madina />}></Route>
                <Route path="/Margarita" element={<Margarita />}></Route>
                <Route path="/Marina" element={<Marina />}></Route>
                <Route path="/Nazira" element={<Nazira />}></Route>
                <Route path="/Oksana" element={<Oksana />}></Route>
                <Route path="/SauleOryngalievna" element={<SauleOryngalievna />}></Route>
                <Route path="/Taslima" element={<Taslima />}></Route>
                <Route path="/Tatyana" element={<Tatyana />}></Route>
                <Route path="/TatyanaN" element={<TatyanaN />}></Route>
                <Route path="/Xeniya" element={<Xeniya />}></Route>
                <Route path="/Zhazira" element={<Zhazira />}></Route>
            </Routes>
        </div>
    );
};

export default Router;