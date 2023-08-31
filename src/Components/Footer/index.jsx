import "./index.css";

import HEX from "../../Assets/Media/######.jpg";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="credits-container">
                    <h3>
                        developed by <a href="https://www.instagram.com/hexstudio.io"><img src={HEX} /></a>
                    </h3>
                </div>
            </footer>
        </>
    )
}

export default Footer;