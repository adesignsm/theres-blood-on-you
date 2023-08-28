import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/Navigation";
import "./index.css";

const Faces = () => {
    useEffect(() => {
        document.title = "theresbloondonyou - FACES";
    }, []);

    return (
        <>
            <section id="faces-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> FACES </h1></Link>
                    <Navigation />
                </header>
            </section>
        </>
    )
}

export default Faces;