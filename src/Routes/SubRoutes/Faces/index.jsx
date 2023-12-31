import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../sanity";
import Navigation from "../../../Components/Navigation";
import "./index.css";

import Footer from "../../../Components/Footer";

const Faces = () => {
    const [faces, setFaceData] = useState([]);

    useEffect(() => {
        document.title = "theresbloondonyou - FACES";
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "facesImages"]{facesTitle}`).then((data) => {
            const faceData = data.map(item => item.facesTitle);
            setFaceData(faceData);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="faces-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> FACES </h1></Link>
                    <Navigation />
                </header>
                <nav className="faces-links-container navigation">
                    <ul>
                        {faces.slice().sort((a, b) => a.localeCompare(b)).map((title, index) => {
                            return (
                                <li key={index}><Link to={`/theres-blood-on-you/faces/${title.toLowerCase()}`}>{title}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </section>
            <Footer />
        </>
    )
}

export default Faces;