import React from "react";
import "./services.css";
function Services() {
    return (
        <div id="services">
            <h1 style={{ color: "#d84cbc" }}>My Services</h1>
            <div className="myservices">
                <div class="cardSer">
                    <p class="cardSer-title">
                        <img
                            src="./image/application.png"
                            alt="dev"
                            style={{ width: "2.5rem" }}
                        />
                        Web Development
                    </p>
                    <p class="small-desc">
                        I've been immersed in web development for 2.5 years, crafting
                        digital experiences through code and creativity. From HTML to CSS,
                        JavaScript to frameworks like ReactJs and More.
                    </p>
                </div>
                <div class="cardSer">
                    <p class="cardSer-title">
                        <img
                            src="./image/paint-brush.png"
                            alt="brsh"
                            style={{ width: "2.5rem" }}
                        />
                        UI UX designer
                    </p>
                    <p class="small-desc">
                        Over the past 2.5 years, I've immersed myself in the dynamic realm
                        of UI/UX design, shaping digital interfaces with empathy and
                        innovation. From wireframes to prototypes.
                    </p>
                </div>
                <div class="cardSer">
                    <p class="cardSer-title">
                        <img
                            src="./image/mobile-development.png"
                            alt=""
                            style={{ width: "2.5rem" }}
                        />
                        App developer
                    </p>
                    <p class="small-desc">
                        In my one year of app development experience, I've navigated the
                        intricacies of mobile platforms, crafting intuitive interfaces and
                        robust functionalities.I've dived deep into Java crafting.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
