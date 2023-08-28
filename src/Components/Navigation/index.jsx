import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
    return (
        <>
            <nav id="navigation">
                <ul>
                    <li><Link to="/theres-blood-on-you/archive">Archive</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/theres-blood-on-you/work">Work</Link></li>
                    <li><Link to="/theres-blood-on-you/faces">Faces</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;