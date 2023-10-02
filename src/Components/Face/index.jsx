import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Navigation from "../Navigation";
import Footer from "../Footer";

import "./index.css";

const Face = () => {
    const { face } = useParams();
    const builder = imageUrlBuilder(sanityClient);
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        document.title = `theresbloondonyou - FACES:${face}`;
    }, []);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "facesImages"]{facesTitle, images[]}`).then((data) => {
            let mutatedString = face.charAt(0).toUpperCase() + face.slice(1);
            data.map((face) => {
                console.log(face.facesTitle, mutatedString)
                if (mutatedString.toLowerCase() === face.facesTitle.toLowerCase()) {
                    setImageData(face.images);
                } else {
                    console.log("not found");
                }
            })
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="face-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> FACES: {face} </h1></Link>
                    <Navigation />
                </header>
                <div className="images-container">
                    {imageData.length &&
                        imageData.map((image, index) => {
                            if (image.asset && image.asset._ref) {
                                return (
                                    <img key={index} className="face-image" src={urlFor(image.asset._ref)} loading={"lazy"}/>
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

export default Face;