import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from "../firebase.config.js";
import { useParams } from 'react-router-dom'; // Import manquant
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function NewsDetails() {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const newsRef = ref(database, `news/${id}`);

        get(newsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const newsData = snapshot.val();
                setNews(newsData);
            }
        });
    }, [id]);

    if (!news) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="rectangle-nav">
                <Navbar />
            </div>

            <div className="nav-bar-rectangle" key={news.id}>
                <span>{news.title}</span>
            </div>

            <div>
                <img src={news.imageURL} alt="Image de la news" />
                <p>{news.description}</p>
                <p>{news.date}</p>
            </div>

            <Footer />
        </>
    );
}

export default NewsDetails;
