import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import MouseGallery from "../../Components/MouseGallery";

const Entry = () => {
    useEffect(() => {
        document.title = "theresbloodonyou";
    }, []);

    return (
        <>
            <div id="entry-container">
                <div className="entry-navigation">
                    <Link to={"/theres-blood-on-you"}><h2 className="theres-blood-on-you">theres<span>blood</span>onyou</h2></Link>
                    <Link to={"/null-null-null"}><h2 className="null"><span>null</span>null null</h2></Link>
                </div>
            </div>
            <MouseGallery />
        </>
    )
}

export default Entry;