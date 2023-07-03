import React, {useState} from "react";
import "../components/Header.css";
import logo from "../assets/logo.png";
import { FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <img src={logo} width='180px' alt="10x logo"/>
                </div>

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><a href="www.google.com">Start</a></li>
                        <li><a href="www.google.com">Work</a></li>
                        <li><a href="www.google.com">About</a></li>
                        <li><a href="www.google.com">Contact</a></li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href="https://www.youtube.com/channel/UCPoencq0sid5vKKvRFtf7Lw" target="_Sahil"><FaYoutube className="youtube"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCPoencq0sid5vKKvRFtf7Lw" target="_Sahil"><FaLinkedinIn className="linkedin"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCPoencq0sid5vKKvRFtf7Lw" target="_Sahil"><FaGithub className="github"/></a></li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                    <a href="/#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;