import {React,useEffect} from 'react'
import {Container, ProgressBar} from 'react-bootstrap'
import AOS from 'aos'
import BarUi from './BarUi'
import 'aos/dist/aos.css'
import './about.css'

const skills = [{name: "React.js"   , percent: 80},
                {name: "HTML"       , percent: 60},
                {name: "CSS"        , percent: 70},
                {name: "Javascript" , percent: 65},
                {name: "Java"       , percent: 73}]

const About = () => {
    
    useEffect(() => {
        AOS.init({once: true});
      }, []); 

    return (
        <section id="about" >
        <Container >
            <h5 className = "aboutTitle">Sobre mí</h5>
            <h1 className = "introTitle">Permítame presentarme</h1>
            <Container >
                <div class="col-12 mb-3 mb-sm-0" className="rowContainer">
                    <div class="row">
                    <div class="col-md-4 ">
                        <div className="imgIntro"></div>
                    </div>
                    <div class="col-md-8">
                        <h4 className= "lead"> Soy una persona con habilidades de proactividad, comunicación efectiva, trabajo en equipo y capacidad de planificación y organización. Puedo trabajar
                        como <b>desarrollador Full Stack, desarrollador móvil, diseñador UI/UX y diseñador web.</b></h4>
                    </div>
                    </div>
                </div>
            </Container>
            <hr></hr>
            <div class="content" data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-cubic">
                <Container>
                    <div class="row">
                        <div class="col-md-6 col1" >
                            <h4>Datos de contacto</h4>
                            <ul>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>Página web:</strong> www.example.com</li>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>Ciudad:</strong> Popayán</li>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>Departamento:</strong> Cauca, Colombia</li>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>Email:</strong> juanrosero1407@gmail.com</li>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>Télefono:</strong> 321 581 ****</li>
                            <li><i class="fa fa-dot-circle-o"></i> <strong>GitHub:</strong> JuanRosero97</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col2">
                            <h4>Habilidades</h4>
                            <Container>
                                {skills.map((data, index)=> (
                                    <BarUi key = {index + 'PBskill'} name= {data.name} percent = {data.percent}/>
                                ))}
                            </Container>
                            
                        </div>
                    </div>
                </Container>
            </div>      
        </Container>
        </section>
    )
}

export default About
