import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const menu = useRef();
    const MenuHandler = () => {
        menu.current.classList.toggle("activeMenu");
    }
    return (
        <div className="nav-wrapper" id="nav-wrapper">
            <div className="nav-logo">
                <a href="#">Zaph Tours</a>
            </div>

            <ul ref={menu} >
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><Link to="/trips">Trips</Link>                </li>
                <li><a href="#">Blogs</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <div className="nav-buttons">
                <div className="search">
                    <input type="text" placeholder="Search places" />
                    <i className="ri-search-line"></i>
                </div>
                <div className="call">
                    <i className="ri-phone-line"></i>
                    <p>+254 712 345678 <small>Call your travel agent</small></p>
                </div>
                <i className="ri-menu-2-line" onClick={MenuHandler} id="bars"></i>
            </div>
        </div>
    )
}