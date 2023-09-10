import React, { useEffect, useState } from "react";
import sanityClient from "../../../sanity";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/Navigation";
import "./index.css";

import Footer from "../../../Components/Footer";

const Work = () => {
    const [work, setWorkData] = useState([]);

    useEffect(() => {
        document.title = "theresbloondonyou - WORK";
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "workImages"]{workTitle}`).then((data) => {
            const workData = data.map(item => item.workTitle);
            setWorkData(workData);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="work-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> WORK </h1></Link>
                    <Navigation />
                </header>
                <nav className="work-links-container navigation">
                    <ul>
                        {work.slice().sort((a, b) => a.localeCompare(b)).map((title, index) => {
                            return (
                                <li key={index}><Link to={`/theres-blood-on-you/work/${title.toLowerCase()}`}>{title}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </section>
            <Footer />
        </>
    )
}

export default Work;