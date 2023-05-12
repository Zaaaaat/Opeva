import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './CSS/style.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import News from './Pages/News.js';
import Contact from './Pages/Contact.js';
import Connexion from './Pages/Connexion.js';
import reportWebVitals from "./reportWebVitals";
import Partner from "./Pages/Partner";
import Demos from "./Pages/Demos";
import Deliverables from "./Pages/Deliverables";
import Papers from "./Pages/Papers";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About/>} />
                <Route path="/News" element={<News/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Connexion" element={<Connexion/>} />
                <Route path="/Demos" element={<Demos/>} />
                <Route path="/Partner" element={<Partner/>} />
                <Route path="/Deliverables" element={<Deliverables/>} />
                <Route path="/Papers" element={<Papers/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
