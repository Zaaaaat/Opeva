import React, { useState, useEffect } from 'react';
import '../CSS/topEachPage.css';
import '../CSS/AddNews.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { database, firebaseConfig } from "../firebase.config.js";
import { set, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { ref as storageRef, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase.config.js";

function AddNews() {
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [newsType, setNewsType] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        listAll(storageRef(storage, "images/")).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    console.log(url);
                });
            });
        });
    }, []);

    function addNews(imageURL, description, title, type) {
        const newsRef = ref(database, "news");
        const newNewsRef = push(newsRef);
        const newsID = newNewsRef.key;

        const currentDate = new Date().toISOString();

        return set(newNewsRef, {
            imageURL: imageURL,
            description: description,
            title: title,
            type: type,
            date: currentDate,
        }).then(() => newsID);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isLoggedIn) {
            const description = document.getElementById("description").value;
            const title = document.getElementById("title").value;

            if (imageUpload) {
                const imageRef = storageRef(storage, `images/${imageUpload.name}`);
                uploadBytes(imageRef, imageUpload).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        addNews(url, description, title, newsType)
                            .then((newsID) => {
                                console.log("Actualité ajoutée avec ID :", newsID);
                                navigate("/News");
                            })
                            .catch((error) => {
                                console.log("Erreur lors de l'ajout de l'actualité :", error);
                            });
                    });
                });
            } else {
                alert("Veuillez sélectionner une image.");
            }
        } else {
            alert("Veuillez vous connecter pour publier un article.");
        }
    }

    function handleTypeChange(event) {
        setNewsType(event.target.value);
    }

    return (
        <>
            <div className="rectangle-nav">
                <Navbar />
            </div>

            <div className="nav-bar-rectangle">
                <span>NEW PUBLICATIONS</span>
            </div>

            <div className="formulaire">
                <div className="get">
                    <p>•○ Create publication</p>
                </div>
                <div className="question2">
                    <p>Create a post and sumbit for publish</p>
                </div>
            </div>

            <div className="form-container">
                <div className="form-row">
                    <div className="rect-form">
                        <div className="radio">
                            <label htmlFor="media">Media:</label>
                            <input
                                type="radio"
                                id="media"
                                name="type"
                                value="media"
                                checked={newsType === "media"}
                                onChange={handleTypeChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="rect-form">
                        <div className="radio">
                            <label htmlFor="event">Event:</label>
                            <input
                                type="radio"
                                id="event"
                                name="type"
                                value="event"
                                checked={newsType === "event"}
                                onChange={handleTypeChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="rect-form">
                        <label htmlFor="name">Title *</label>
                        <input type="text" id="title" name="title" placeholder="Enter a title.." required />
                    </div>

                    <div className="rect-form">
                        <label htmlFor="name">Add image *</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(event) => {
                                setImageUpload(event.target.files[0]);
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="rect-form">
                    <label htmlFor="email">Description *</label>
                    <textarea id="description" name="description" required></textarea>
                </div>

                <div className="form-row">
                    <button type="submit" onClick={handleSubmit}>ADD POST</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AddNews;
