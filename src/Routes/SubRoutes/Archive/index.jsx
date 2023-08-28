import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/Navigation";
import "./index.css";

const Archive = () => {
    useEffect(() => {
        document.title = "theresbloondonyou - ARCHIVE";
    }, []);

    return (
        <>
            <section id="archive-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> ARCHIVE </h1></Link>
                    <Navigation />
                </header>
            </section>
        </>
    )
}

export default Archive;