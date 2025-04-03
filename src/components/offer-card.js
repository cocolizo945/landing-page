import React from "react";
import '../styles/offer-card.css'

export default function Offercard({ icon , title, description }){
    return(
        <div className="container-card">
            <div className="title-card"><div>{icon}</div> <b>{title}</b></div>
            <div className="content-card">{description}</div>
        </div>
    )
}