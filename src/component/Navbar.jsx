import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
function Navbar() {

    return (
        <>
            <Headroom style={{ zIndex: "10" }}>
                <div className='nav'>
                    <div className="logo"><img className='logoimg' src="./image/logo.png" alt="" /><p>DESIGN BY <span>ANIKET</span></p></div>
                    <div className="item">
                        <ul><li><Link to="main" smooth={true} duration={500}>HOME</Link></li></ul>
                        <ul><li> <Link to="about" smooth={true} duration={500}>ABOUT</Link></li></ul>
                        <ul><li> <Link to="services" smooth={true} duration={500}>SERVICES</Link></li></ul>
                        <ul><li><Link to="project" smooth={true} duration={500}>PROJECT</Link></li></ul>
                        <ul><li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li></ul>
                    </div>
                    <Link to="contact" smooth={true} duration={500}><button className='Navbtn'>HIRE ME</button></Link>

                </div>
            </Headroom>
        </>
    )
}

export default Navbar