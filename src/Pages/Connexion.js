import React, { useRef, useState } from "react";
import "../CSS/home.css";
import "../CSS/connexion.css";
import { Link, useNavigate } from "react-router-dom";

import utilisateur from "../Images/logo-opeva.jpg";
import { auth, signInWithEmailAndPassword } from "../firebase.config.js";

function Connexion() {
    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    const handleForm = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password); // Utilisation de la fonction importée directement
            console.log("Successfully signed in!");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="fond">
                <form onSubmit={handleForm}>
                    <div className="containerr">
                        <a href="/">
                            <img src={utilisateur} alt="image" />
                        </a>
                        <div className="form-input">
                            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                            <input ref={addInputs} type="email" name="email" placeholder="Enter E-mail" />
                        </div>
                        <div className="form-input">
                            <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                            <input ref={addInputs} type="password" name="password" placeholder="Enter Password" />
                        </div>
                        <div className="validation">{validation}</div>
                        <input ref={addInputs} type="submit" id="submit" value="VALIDER" />
                        <br />
                        <a href="#">forget password?</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Connexion;
