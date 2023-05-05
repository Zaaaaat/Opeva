import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/overview.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import img from '../Images/overview.png';

function About(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>OVERVIEW</span>
            </div>

            <div className="container">
                <div className="img-container">
                    <img src={img} alt="my image" />
                </div>
                <div className="text-container">
                    <h2>Titre du texte</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum tincidunt nisi, vel facilisis nulla tincidunt non. Nulla consequat, magna non semper varius, ipsum risus mollis odio, a lacinia nibh nibh eget ipsum.</p>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default About;
