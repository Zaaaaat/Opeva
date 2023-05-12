import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/news.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function News(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>NEWS</span>
            </div>

            <Footer/>
        </>
    )
}

export default News;