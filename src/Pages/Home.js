import React,  { useState } from 'react';
import '../CSS/home.css';
import '../CSS/slider.css';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import logo from "../Images/logo-opeva.jpg";
import plus from "../Images/plus.png";
import lab from "../Images/lab.png";
import map from "../Images/map.png";
import cal from "../Images/calendar.png";
import top from "../Images/to_top.png";
import stat from "../Images/stat.png";
import img from "../Images/overview.png";




function Home(){

        const images = [
            
            // Add more image URLs as needed
        ];

        const [currentIndex, setCurrentIndex] = useState(0);

        const goToNextSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        const goToPrevSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

    return (
        <>
            <Navbar/>
            <div className="background-image">
                <div className="background-image-blur"></div>
                <div className="background-image-content">
                    <div className="overlay">
                        <div className="centered">
                            <h1>Optimization of Electric <br /> Vehicle Autonomy</h1>
                            <div className="circle-container">
                                <div className="circle">
                                    <p>37</p>
                                    <p>Partners</p>
                                </div>
                                <div className="circle">
                                    <p>9</p>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-text">
                        <p>Opeva European Project</p>
                    </div>
                </div>
            </div>

            <section className="mid">
                <p className="about-text">• about the project</p>
            </section>

            <section className="about">
                <div>
                    <div className="container">

                    <div className="left-container">
                            <img src={logo} alt="my image" />
                    </div>

                        <div className="right-container">
                        <div className="text-container">
                            <h2>To optimization the electric vehicule autonomy</h2>
                            <p>The main objective of OPEVA is to improve EV market penetration and widespread adoption by tackling the limiting psychological factors such as range anxiety, high price, limited charging facilities, and duration of charging. The project will be coordinated by Pertimm Developpement and it is co-sponsored by Key Digital Technology Joint Undertaking , the program Horizon Europe and the National authorities of the participating countries.</p>
                        </div>


                        <div className="allsquares">
                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Energy-efficient power train</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>

                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Energy-efficient dynamic routing</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>

                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Accurate range prediction</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>

                </div>
                </div>
            </section>

            <section className="mid">
                <p className="about-text">• about the project</p>
            </section>

            <section className="bot">
                    <div className="hex-container">

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={lab} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">1</div>
                                <div className="hex-text">Partners</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={map} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">2</div>
                                <div className="hex-text">Countries</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={cal} alt="know more"/>

                            </div>
                            <div className="foothex">
                                <div className="hex-number">3</div>
                                <div className="hex-text">Starting</div>
                                <div className="hex-text">(01/01/2023)</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={stat} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">4</div>
                                <div className="hex-text">MЄ total budget</div>
                            </div>
                        </div>
                    </div>
            </section>

            <div id="scrollUp">
                <a href="#top"><img src={top}/></a>
            </div>

            <section className="botnews">
                <p className="news-text">What are the recent news...</p>
            </section>

            <section className="partner-section">
                <h2>Our Partners...</h2>
                <div className="slider-container">
                    {images.map((image, index) => (
                        <div
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            key={index}
                        >
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <button onClick={goToPrevSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </section>
            <Footer/>
        </>
    )
}

export default Home;