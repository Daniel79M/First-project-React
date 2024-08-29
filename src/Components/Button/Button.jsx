import React from "react";
import './Button.css';

export default function Button({text, onClick, type}) {

    //le 'props' est une proprieté qui permet de passé des donné d'un composant a un autre composant  
    // de mm aue la destructurtation
    return (
        <div>
                <button className="button" type={type}  onClick={onClick} >{text || "Opérations"}</button>
        </div>
    )
}
