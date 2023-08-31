import React, { useState, useEffect } from "react";
import sanityClient from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import "./index.css";

const MouseGallery = () => {
    const [imageData, setImageData] = useState([]);
    let images;

    let globalIndex = 0;
    let lastIndex = {x: 0, y: 0};
    let effectCount = 6;
    
    const activate = (image, x, y) => {
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.dataset.status = "active";

        lastIndex = {x, y};
    }

    const distFromLast = (x, y) => {
        return Math.hypot(x - lastIndex.x, y - lastIndex.y);
    }
    
    const handleMouseMove = (x, y) => {
        if (document.title === "theresbloodonyou" && imageData.length) {
            images = document.querySelectorAll(".image");

            if (distFromLast(x, y) > 100) {
                const lead = images[globalIndex % images.length];
                const last = images[(globalIndex - effectCount) % images.length];
    
                activate(lead, x, y);
        
                if (last) last.dataset.status = "inactive";
    
                globalIndex++;
            }
        } else {
            return;
        }
    }

    const builder = imageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "entryImages"]{title, images[]}`).then((data) => {
            setImageData(data[0].images);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    window.onmousemove = (e) => {
        handleMouseMove(e.clientX, e.clientY);
    };

    window.ontouchmove = (e) => {
        const touch = e.touches[0];
        handleMouseMove(touch.clientX, touch.clientY);
    };


    return (
        <>
            {imageData.length &&
                imageData.map((image, index) => {
                   return (
                    <img key={index} className="image" data-index={index} data-status="inactive" src={urlFor(image.asset._ref)}/>
                   )
                })
            }
        </>
    )
}

export default MouseGallery;