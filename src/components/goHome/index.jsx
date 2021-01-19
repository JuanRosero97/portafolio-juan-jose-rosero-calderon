import {React, useState, useEffect} from 'react'
import { scroller } from "react-scroll"
import './gohome.css'



const Gohome = () => {
    const [display,setDisplay] = useState('none')

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 30 ? setDisplay('block') : setDisplay('none')  
        });
    }, []); 

    return (
        <div class="fixed-bottom" className= "divArrow"  style={{display: display}}>
            <a class="arrowButton" title="A Inicio" 
                            onClick={event => {
                                event.stopPropagation()
                                event.preventDefault()
                                scroller.scrollTo("home", {
                                    smooth: true,
                                    offset: -70,
                                    duration: 600})
                            }}><i class="fa fa-chevron-up"></i></a>
        </div>
    )
}

export default Gohome
