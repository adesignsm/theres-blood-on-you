import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Navigation from "../Navigation";
import Footer from "../Footer";

import "./index.css";

const WorkSingle = () => {
    const { work } = useParams();
    const builder = imageUrlBuilder(sanityClient);
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        document.title = `theresbloondonyou - WORK:${work}`;
    }, []);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "workImages"]{workTitle, images[]}`).then((data) => {
            console.log(data);
            let mutatedString = work.charAt(0).toUpperCase() + work.slice(1);
            data.map((work) => {
                if (mutatedString.toLowerCase() === work.workTitle.toLowerCase()) {
                    setImageData(work.images);
                }
            })
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="work-single-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> WORK: {work} </h1></Link>
                    <Navigation />
                </header>
                <div className="images-container">
                    {imageData.length &&
                        imageData.map((image, index) => {
                            if (image.asset && image.asset._ref) {
                                return (
                                    <img key={index} className="work-image" src={urlFor(image.asset._ref)} loading={"lazy"}/>
                                )
                            }
                        })
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default WorkSingle;