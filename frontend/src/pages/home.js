import React, { useRef } from "react"
import Arrow from "../assets/arrow"
import Code from "../assets/code"
import Cloud from "../assets/cloud"
import Devices from "../assets/devices"
import Infinite from "../assets/infinite"
import Network from "../assets/network"
import Offercard from "../components/offer-card"
import Testimonials from "../components/testimonial-card"
import ContactForm from "../components/contact-form"
import '../styles/home.css'


export default function Home(){

    const refs = {
        aboutUs: useRef(null),
        whatWeOffer: useRef(null),
        testimonials: useRef(null),
        contactUs: useRef(null),
        home: useRef(null),
    };

    // Función para hacer foco en un botón específico
    const handleFocus = (refName) => {
        console.log("here")
        if (refs[refName].current) {
            refs[refName].current.focus(); // Focalizar el botón usando la referencia
            refs[refName].current.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start', // Centrar el elemento en la pantalla
            });
        }
    };


    return(
    <div className="Container" >
        <h1 className="title-home">Evolving <br /> Experiences</h1>
        <div className="subtitle-home">
            Creating unique,innovative, modern and sophisticated <br/>
            software and everything according to your necesities</div>
            <button className="animated-button" onClick={() => handleFocus('contactUs')}>
            Contact us
            </button>
            
            <img src={require('../assets/3d-spot.png')} alt="3d-spot" className="photo"/>
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
            <div className="first-line">
                <span className="gradient-text">Level up</span> you
            </div>
            <div className="second-line">company or business</div>
        <div className="about-us" ref={refs.aboutUs} id="about">
        <div className="border-button" >
            About us
            </div>
            <div><b>Our mission is to empower business</b> with <br/>innovate, reliable, and scalable technology
             <br/>solutions thath drive grwoth, efficiency, and <br/>success.</div>
        </div>
        <div className="about-us" ref={refs.whatWeOffer} id="solutions">
        <div className="border-button">
            What we offer
            </div>
            <div className="card-container">
            <Offercard 
                icon={<Code />}
                title="Custom Software Development"
                description="Tailored software solutions designed to meet your business needs, from concept to deployment."
            />
            <Offercard 
                icon={<Cloud />}
                title="Cloud Solutions"
                description="Optimize, scale, and secure your infrastructure with cloud solutions that support seamless growth."
            />
            <Offercard 
                icon={<Devices />}
                title="Mobile App Development"
                description="Create responsive, high-performance mobile apps for Android and iOS that engage users effectively."
            />
            <Offercard 
                icon={<Network />}
                title="AI & Machine Learning"
                description="Utilize AI and machine learning to automate tasks and gain actionable insights for your business."
            />
            <Offercard 
                icon={<Infinite />}
                title="DevOps Services"
                description="Streamline software delivery by integrating development and operations for faster, reliable results."
            />
            </div>
        </div>
        <div className="about-us">
        <div className="border-button" onClick={() => {console.log("holaaa")}}>
            Testimonials
            </div>
            <div className="card-container" id="unique-container">
           <Testimonials
           title="Laura Smith, COO of NextGen Tech"
           description="&quot;From start to finish, Snowquest.io delivered exceptional service. Their development team is skilled, creative, and always willing to go the extra mile. The software they built for us has been a critical asset to our business growth.&quot;"
           />
           <hr style={{ width: "1px", height: "30vh", margin: "0 2vw"}} />
           <Testimonials
           title="James Wilson, Data Scientist"
           description="&quot;Snowquest.io helped us implement an AI solution that has transformed how we analyze data. Their machine learning models are accurate and have provided us with actionable insights. Their team is knowledgeable and a pleasure to work with&quot;"
           />
           <hr style={{ width: "1px", height: "30vh", margin: "0 2vw"}} />
           <Testimonials
           title="Michael Lee, Founder of FitLife"
           description="&quot;The mobile app developed by Snowquest.io exceeded our expectations. It’s user-friendly, visually stunning, and performs flawlessly. Since its launch, we’ve seen a 50% increase in user engagement. They’re our go-to for all things tech!&quot;"
           />
           </div>
        </div>
        <div className="about-us">
            <div className="border-button" ref={refs.contactUs}>
            Contact us
            </div>
            <ContactForm/>
        </div>
        
        

    </div>
    )
}