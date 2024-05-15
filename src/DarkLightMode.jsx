import { useState } from "react";
import "./DarkLightMode.css";



export function DarkLightMode({estateMode, setEstateMode}) {
    
    const changeColor = () => {
        setEstateMode(!estateMode);
    }

    return (
        <div className={estateMode? 'container' : 'notcontainer'} onClick={changeColor}>
            <h5>{estateMode? 'Dark mode' : 'Light mode'}</h5>
        </div>
    )
}
