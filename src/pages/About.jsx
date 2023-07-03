import React from "react";
import "../components/Header.css";
import myProfilePicture from "../assets/me.jpeg";
import backgroundImage from "../assets/background.png";
import brandPfp from "../assets/logo.jpg";
import brandBackground from "../assets/brandBackground.png";


function About() {
    return(
        <>
            <section className="about-page">
                <h1 className="about-title">About</h1>
            
                    <div className="card">
                        <div className="background">
                            <img src={backgroundImage} alt="my background"/>
                        </div>
                        <div className="avatar-image">
                            <img src={myProfilePicture} alt="my avatar"/>
                        </div>
                        <div className="content">
                            <p className="profile-name">Mohammad Sahil</p>
                            I'm MERN Stack Engineer and Documentary Video Editor.
                            founder <strong>@10xwebdev</strong> and <strong>YouTuber</strong>
                        </div>
                    </div>
                    {/* <div className="card card2">
                        <div className="background">
                            <img src={brandBackground} alt="brand background"/>
                        </div>
                        <div className="avatar-image">
                            <img src={brandPfp} alt="brand avatar"/>
                        </div>
                        <div className="content">
                            <p className="profile-name">10X Web Dev</p>
                            10X Web Dev provide Web Development related learning content.
                            <strong> "Learn, Code, Conquer"</strong>
                        </div>
                    </div> */}
            </section>
        </>
    )
}

export default About;