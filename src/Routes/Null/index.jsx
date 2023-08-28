import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Null = () => {
    useEffect(() => {
        document.title = "theresbloodonyou - null";
    }, []);
    return (
        <>
            <section id="null-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> NUll </h1></Link>
                </header>
            </section>
        </>
    )
}

export default Null;