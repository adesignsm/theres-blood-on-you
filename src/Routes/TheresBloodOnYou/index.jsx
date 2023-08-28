import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import "./index.css";

const TheresBloodOnYou = () => {
    useEffect(() => {
        document.title = "theresbloondonyou - theresbloodonyou";
    }, []);

    return (
        <>
            <section id="theres-blood-on-you-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> THERESBLOODONYOU </h1></Link>
                    <Navigation />
                </header>
            </section>
        </>
    )
}

export default TheresBloodOnYou;