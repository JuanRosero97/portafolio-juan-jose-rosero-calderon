import {React, useState, useEffect} from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import { scroller } from "react-scroll"

import './header.css'

const buttons = [{id:'b1', link:'home', text:'Inicio'},
                 {id:'b2', link:'about', text:'Sobre Mí'},
                 {id:'b3', link:'resume', text:'Currículum'},
                 {id:'b4', link:'portfolio', text:'Trabajos'},
                 {id:'b5', link:'contact', text:'Contacto'}]

const toppers = [500, 1200, 2100, 3500]

const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [clase, setClase] = useState({
        home: 'menu-active', about: ' ', resume: ' ' , portfolio: ' ' , contact: ' '
    })

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 30);

        if(window.scrollY < toppers[0] )
            setClase ({...clase, home:'menu-active', about: ' ', resume: ' ', portfolio: ' ' , contact: ' '}) 
        else if (window.scrollY >= toppers[0] && window.scrollY < toppers[1])
            setClase ({...clase, home: ' ', about: 'menu-active', resume: ' ', portfolio: ' ' , contact: ' '})
        else if(window.scrollY >= toppers[1] && window.scrollY < toppers[2])
            setClase ({...clase, home: ' ', about: ' ', resume: 'menu-active', portfolio: ' ' , contact: ' '})
        else if(window.scrollY >= toppers[2] && window.scrollY < toppers[3])
            setClase ({...clase, home: ' ', about: ' ', resume: ' ', portfolio: 'menu-active' , contact: ' '})
        else 
            setClase ({...clase, home: ' ', about: ' ', resume: ' ', portfolio: ' ' , contact: 'menu-active'})
      });
    }, []); 

    const returnClass = (text) =>{
        var name = ""
        text === 0 ? name = clase.home : text === 1 ? name = clase.about : 
        text === 2 ? name = clase.resume : text === 3 ? name = clase.portfolio : name = clase.contact
        return name
    }

    const handlerClick = (index) => {
        var name = []
        for (var i=0; i<buttons.length; i++){
            i === index ? name.push('menu-active') : name.push (' ')
        }
        setClase ({...clase, home: name[0], about: name[1], resume: name[2], portfolio: name[3], contact: name[4]})  
    }

    return (
        <Navbar collapseOnSelect expand="lg" className={scroll ? "black" : "transparent"} fixed = "top" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={"justify-content-center nav-menu"} style={{ flex: 1}}>
                {buttons.map((number,index) => (
                    <Nav.Item key= {index} className={returnClass(index) || " "}>
                        <Nav.Link key= {number.id} onMouseDown={event => event.stopPropagation()} onClick={event => {
                            event.stopPropagation()
                            event.preventDefault()
                            handlerClick(index)
                            scroller.scrollTo(number.link, {
                                smooth: true,
                                offset: -70,
                                duration: 600})
                          }}>
                            {number.text}
                        </Nav.Link>
                    </Nav.Item>
                ))}        
            </Nav>
            </Navbar.Collapse>            
        </Navbar>
    )
}

export default Header
