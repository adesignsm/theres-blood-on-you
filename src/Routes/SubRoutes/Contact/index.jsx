import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../sanity";
import Navigation from "../../../Components/Navigation";
import "./index.css";

import Footer from "../../../Components/Footer";

const Contact = () => {
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        document.title = "theresbloondonyou - CONTACT";

        sanityClient.fetch(`*[_type == "contactLinks"]{socialLinks, emailAddress, socialMedia}`).then((data) => {
            setContactData(data[0]);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <section id="contact-container">
                <header>
                    <Link to={"/"}><h1 className="return-home"> CONTACT </h1></Link>
                    <Navigation />
                </header>
                <div className="contact-links-container">
                    <ul>
                        {contactData && contactData.emailAddress && <li key={0}> <a href={`mailto:${contactData.emailAddress}`}> EMAIL </a> </li>}
                        {contactData && contactData.socialLinks && 
                            contactData.socialLinks.map((link, index) => {
                                return (
                                    <li key={link.key}>
                                        <a href={link.link}>{link.platform}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;