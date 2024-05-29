import React from "react";
import "./about.css";
import Skills from "./Skills";

function About() {
    return (
        <>
            <div id="about">
                <p>Get To Know More</p>
                <h1>ABOUT</h1>
                <div className="maincon">
                    <img src="./image/aniketpro.jpg" alt="pro" />
                    <div className="aboutcon">
                        <div className="abouttext">
                            <Skills />
                        </div>
                        <p>
                            As a full-stack developer, I perceive myself as a digital architect,
                            bridging the realms of front-end finesse and back-end wizardry. With
                            a keen eye for design and a knack for problem-solving. Adaptability
                            is my forte. In a landscape where technologies evolve at lightning
                            speed.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
