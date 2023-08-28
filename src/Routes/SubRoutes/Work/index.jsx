import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/Navigation";
import "./index.css";

const Work = () => {
    useEffect(() => {
        document.title = "theresbloondonyou - WORK";
    }, []);

    return (
        <>
            <section id="work-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> WORK </h1></Link>
                    <Navigation />
                </header>
            </section>
        </>
    )
}

export default Work;