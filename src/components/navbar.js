import './../styles/nav.css'
import React, { useRef } from "react"

export default function Navbar() 
{

    const refs = {
            aboutUs: useRef(null),
            whatWeOffer: useRef(null),
            home: useRef(null)
        };


    const handleFocus = (refName) => {
        console.log("here")
        if (refs[refName].current) {
            refs[refName].current.focus(); // Focalizar el botón usando la referencia
            refs[refName].current.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'center', // Centrar el elemento en la pantalla
                inline: 'nearest'
            });
        }
    };

    return (<nav className="nav">
        <a href="#home" className="site-title" onClick={() => window.scrollTo(0, 0)}>
        Snowquest.io 
        </a>
        <ul>
            <li>
               <a href="#about" onClick={() => handleFocus('aboutUs')}>About us </a>
            </li>
            <li>
               <a href="#solutions" onClick={() => handleFocus('whatWeOffer')}>Our Solutions </a>
            </li>
           
        </ul>
    </nav>
    )
}