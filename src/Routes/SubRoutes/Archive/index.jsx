import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Navigation from "../../../Components/Navigation";
import "./index.css";

const Archive = () => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        document.title = "theresbloondonyou - ARCHIVE";
    }, []);

    const builder = imageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "archiveImages"]{title, images[]}`).then((data) => {
            setImageData(data[0].images);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="archive-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> ARCHIVE </h1></Link>
                    <Navigation />
                </header>
                <div className="images-container">
                    {imageData.length &&
                        imageData.map((image, index) => {
                            if (image.asset && image.asset._ref) {
                                return (
                                    <img key={index} className="archive-image" src={urlFor(image.asset._ref)} loading={"lazy"}/>
                                )
                            }
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Archive;