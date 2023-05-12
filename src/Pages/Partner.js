import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/Partners.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import europe from "../Images/europep.png";

function Partners(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>PARTNERS</span>
            </div>


            <div className="top-text">
                <p>37 partners from 11 European Countries covering the whole value chain of electric mobility
                    (Tier-1, Tier-2, OEMs and technology providers)
                </p>

                <img src={europe} alt="europe"/>
            </div>

            <div className="partners">
                Academic and Research partners
            </div>

            <div className="image-grid">
                <div className="image-block">
                    <img src="image1.jpg" alt="image1" />
                </div>
                <div className="image-block">
                    <img src="image2.jpg" alt="image2" />
                </div>
                <div className="image-block">
                    <img src="image3.jpg" alt="image3" />
                </div>
                <div className="image-block">
                    <img src="image4.jpg" alt="image4" />
                </div>
                <div className="image-block">
                    <img src="image5.jpg" alt="image5" />
                </div>
                <div className="image-block">
                    <img src="image6.jpg" alt="image6" />
                </div>
                <div className="image-block">
                    <img src="image7.jpg" alt="image7" />
                </div>
                <div className="image-block">
                    <img src="image8.jpg" alt="image8" />
                </div>
                <div className="image-block">
                    <img src="image9.jpg" alt="image9" />
                </div>
                <div className="image-block">
                    <img src="image10.jpg" alt="image10" />
                </div>
            </div>

            <div className="partners">
                Industrial partners
            </div>

            <div className="image-grid">
                <div className="image-block">
                    <img src="image1.jpg" alt="image1" />
                </div>
                <div className="image-block">
                    <img src="image2.jpg" alt="image2" />
                </div>
                <div className="image-block">
                    <img src="image3.jpg" alt="image3" />
                </div>
                <div className="image-block">
                    <img src="image4.jpg" alt="image4" />
                </div>
                <div className="image-block">
                    <img src="image5.jpg" alt="image5" />
                </div>
                <div className="image-block">
                    <img src="image6.jpg" alt="image6" />
                </div>
                <div className="image-block">
                    <img src="image7.jpg" alt="image7" />
                </div>
                <div className="image-block">
                    <img src="image8.jpg" alt="image8" />
                </div>
                <div className="image-block">
                    <img src="image9.jpg" alt="image9" />
                </div>
                <div className="image-block">
                    <img src="image10.jpg" alt="image10" />
                </div>
            </div>


            <Footer/>
        </>
    )
}

export default Partners;