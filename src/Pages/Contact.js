import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/contact.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import drive from '../Images/labo.jpg';
import logo from '../Images/question.png';
import more from '../Images/plusplus.png';

function Contact(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="contain">
                <div className="img">
                    <img src={drive} alt="description"/>
                </div>
                <div className="text-container">
                    <div className="get">
                        <p>•○ GET IN TOUCH</p>
                    </div>

                    <div className="question">
                        <p>Have a question to ask us?</p>
                    </div>

                    <div className="touch">
                        <p>To get in touch with us, please submit the form below</p>
                    </div>

                    <div className="image-contain-p">

                        <div className="circlee">
                        <img src={logo} alt="description"/>
                        </div>

                        <div className="texttt">
                            <div className="projet">
                                <p>Questions about our project ?</p>
                            </div>

                            <div className="discover">
                                <p>DISCOVER OPEVA -></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

                <div className="text-underimage">
                    <div className="image-plus">
                    <img src={more} alt="loading"></img>
                    </div>

                    <div className="moredemore">
                        <div className="question2">
                            <p>Project Leader</p>
                        </div>
                        <p>The project is coordinated by <strong>Patrick <br/> Constant</strong> from the French company <br/> <strong>Pertimm Developpement</strong></p>
                        <div className="touch">
                        </div>
                        <div className="discover">
                            <p>PERTIMM -></p>
                        </div>
                    </div>
                </div>

            <div className="formulaire">
                <div className="get">
                    <p>•○ SEND A MESSAGE</p>
                </div>
                <div className="question2">
                    <p>Drop a line & get a reply from our team</p>
                </div>
            </div>

            <div className="form-container">
                <div className="form-row">

                    <div className="rect-form">
                        <label htmlFor="name">Name *</label>
                        <input type="text" id="name" name="name" placeholder="Xxxxx" required/>
                    </div>

                    <div className="rect-form">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>

                </div>
                <div className="form-row">

                    <div className="rect-form">
                        <label htmlFor="name">Ph num *</label>
                        <input type="tel" id="phnum" name="phnum" placeholder="Phone" required/>
                    </div>

                    <div className="rect-form">
                        <label htmlFor="email">Subject *</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                    </div>

                </div>

                    <div className="rect-form">
                        <label htmlFor="email">Message *</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                <div className="form-row">
                    <button type="submit">SEND MESSAGE</button>
                </div>

                </div>


            <Footer/>
        </>
    )
}

export default Contact;