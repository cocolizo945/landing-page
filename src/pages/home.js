import React from "react"
import Arrow from "../assets/arrow"
import '../styles/home.css'


export default function Home(){
    return(
    <div className="Container">
        <h1 className="title-home">Evolving <br /> Experiences</h1>
        <div className="subtitle-home">
            Creating unique,innovative, modern and sophisticated <br/>
            software and everything according to your necesities</div>
            <button class="animated-button" onClick={() => {console.log("holaaa")}}>
            Contact us
            </button>
            
            <img src={require('./../assets/3d-spot.png')} alt="3d-spot" className="photo"/>
        <div className="partners-container">
            <div className="some-text">
                Some of our partners
            </div>
            <div className="logos-partners">
                <ul>
                    <li>Logo</li>
                    <li>Logo</li>
                    <li>Logo</li>
                    <li>Logo</li>
                </ul>
                <Arrow className="arrow"/>
            </div>
        </div>
            <div class="first-line">
                <span class="gradient-text">Level up</span> you
            </div>
            <div class="second-line">company or business</div>
        <div className="about-us">
        <div class="border-button" onClick={() => {console.log("holaaa")}}>
            About us
            </div>
            <div><b>Our mission is to empower business</b> with <br/>innovate, reliable, and scalable technology
             <br/>solutions thath drive grwoth, efficiency, and <br/>success.</div>
        </div>
        <div className="about-us">
        <div class="border-button" onClick={() => {console.log("holaaa")}}>
            What we offer
            </div>
            <div><b>Our mission is to empower business</b> with <br/>innovate, reliable, and scalable technology
             <br/>solutions thath drive grwoth, efficiency, and <br/>success.</div>
        </div>
        
        

    </div>
    )
}