import React from 'react'
import "./contact.css"
function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT</h1>
            <p className='info'>Below are the Details to reach out me.</p>
            <div className="contactitem">
                <div className="conCircle">
                    <div className="circle">
                        <img src="./image/map.png" alt="img" />
                    </div>
                    <h3>ADDRESS</h3>
                    <p className='under'>Mumbai,India</p>
                </div>
                <div className="conCircle">
                    <div className="circle">
                        <img src="./image/gmail.png" alt="img" />
                    </div>
                    <h3>EMAIL ADDRESS</h3>
                    <p className='under'>modakaniket2000@gmail.com</p>
                </div>
                <div className="conCircle">
                    <div className="circle">
                        <img src="./image/phone.png" alt="img" />
                    </div>
                    <h3>PHONE NO.</h3>
                    <p className='under'>(+91)8689975917</p>
                </div>
                <div className="conCircle">
                    <div className="circle">
                        <img src="./image/cv.png" alt="img" />
                    </div>
                    <h3>RESUME</h3>
                    <a href="./image/Aniket_Modak_resume(L).pdf" download={"src/component/Aniket_Modak_resume(L).pdf"}><button className='btnCon'>Download CV</button></a>
                </div>
            </div>
            <div className="ques">
                <h2>Have a Question?</h2>
                <div className="btnc"><a href=""><button>Click Here</button></a></div>
            </div>

            <div className="allCon">
                <h3>Find Me on</h3>
                <div className="social">
                    <a href="https://github.com/AniketRModak/"> <img src="./image/github.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/AniketRmodak/"> <img src="./image/linkedin.png" alt="" /></a>
                    <a href="https://x.com/AniketModak8689?t=bQn5C-S_uUQS5v0ZxYtFEA&s=09"><img src="./image/twitter.png" alt="" /></a>
                    <a href="https://www.instagram.com/aniket_modak_?utm_source=qr&igsh=MWM0d3piNTF5Z253eQ=="> <img src="./image/instagram.png" alt="" /></a>

                </div>
            </div>
        </div>
    )
}

export default Contact
