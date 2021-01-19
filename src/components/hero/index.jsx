import React from 'react'
import './hero.css'
import {Jumbotron, Container} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const hero = () => {
    return (
        <section id="home">
        <Jumbotron fluid alt="" id="placeholder">
            <Container>
                <h5>Hello, World!</h5>
                <h1>Juan José Rosero</h1>
                <div className="p">
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 70,
                  }}
                    onInit={(typewriter) => {                        
                        typewriter
                        .typeString('<span style="color: #f06000;"> Desarrollador</span>')
                        .typeString('<span style="color: #fff;"> - </span>')
                        .pauseFor(500)
                        .typeString('<span style="color: #f06000;"> Ingeniero en Autómatica Industrial</span>')
                        .pauseFor(3000)
                        .start();
                    }}
                />
	   			</div>
            </Container>
            <Container>
            <ul className="intro-social">        
                <li><a href="https://www.linkedin.com/in/juan-jos%C3%A9-rosero-calder%C3%B3n-27564b203/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="https://github.com/JuanRosero97" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></li>
            </ul> 
            </Container>
        </Jumbotron>
        </section>
    )
}

export default hero
