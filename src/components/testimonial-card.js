import React from "react";
import '../styles/testimonial-card.css'

export default function Testimonials({ title, description }){
    return(
        <div className="container-testimonial">
            <div className="content-testimonial">{description}</div>
            <hr/>
            <div className="title-testimonial">{title}</div>
        </div>
    )
}