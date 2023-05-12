import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';
import Logo from "../Images/opeva.png";
import Loupe from "../Images/magnifying-glass.png";


function Navbar() {
    return (
        <footer>
            <h3>Who I am...</h3>
            <div className="footer-container">

                <div className="footer-section">
                    <p>European project OPeva</p>
                </div>
                <div className="footer-section">
                    <p>Funded within the Key Digital Technologies Joint Undertaking (KDT JU)
                        from the European Union’s Horizon Europe Programme and the National Authorities,
                        under grant agreement 101097267.</p>
                </div>
                <div className="footer-section">
                    <h3>Partially Funded By:</h3>
                    <img src={Logo} alt="Image 1"/>
                    <img src={Logo} alt="Image 2"/>
                </div>
            </div>
            <div className="footer-bar">
                <p>OPEVA - OPtimization of Electric Vehicle Autonomy</p>
                <p>Copyright by Saissac Steve</p>
            </div>
        </footer>

);
}

export default Navbar;
