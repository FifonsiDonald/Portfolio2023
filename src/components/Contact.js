import React from "react";

export default function Contact(props){
    return(
        <div className="contact-card">
            <span>{props.icon}</span>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}