import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";

import "./index.css";

const Null = () => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        document.title = "theresbloodonyou - null";
    }, []);

    const builder = imageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "nullImages"]{title, images[]}`).then((data) => {
            setImageData(data[0].images);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        let prevScrollY = window.scrollY;
        let str = document.querySelector(".return-home");

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > prevScrollY;
        
            if (isScrollingDown) {
                str.innerHTML += " NULL";
            } else {
                str.innerHTML = str.innerHTML.replace(" NULL", "");
            }
        
            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section id="null-container">
                <header>
                    <Link to={"/"}><h1 className={`return-home`}> NUll </h1></Link>
                </header>
                <div className="images-container">
                    {imageData.length &&
                        imageData.map((image, index) => {
                            if (image.asset && image.asset._ref) {
                                return (
                                    <img key={index} className="null-image" src={urlFor(image.asset._ref)} loading={"lazy"}/>
                                )
                            }
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Null;