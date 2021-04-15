import {React, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './resume.css'
import ResumeUi from './ResumeUi'

const education = [{title: "Ingeniero en Automática Industrial", date : "2015 - 2020", ubication : "Universidad del Cauca, Col" },
                    {title: "Bachiller Académico", date : "2010 - 2014", ubication : "I.E. Gabriela Mistral, Col"},
                    {title: "Educación Básica", date : "2010 - 2014", ubication : "I.E. Normal Superior, Col"},
                ]

const experience = [{title: "Desarrollador backend remoto", date : "01/21 - actual", ubication : "Fabioarias SF-CO, Bogotá - Col"},
                    {title: "Desarrollador web", date : "01/21 - 01/21", ubication : "Independiente, Popayán - Col"},
                    {title: "Web Master", date : "04/19 - 12/20", ubication : "MegaRobot Popayán, Popayán - Col"},
                    {title: "Desarrollador", date : "02/20 - 10/20", ubication : "Universidad del Cauca, Popayán - Col"},
                    {title: "Desarrollador", date : "08/18 - 03/19", ubication : "Universidad del Cauca, Popayán - Col"},
                    {title: "Desarrollador", date : "01/18 - 06/18", ubication : "Independiente, Popayán - Col"},
                ]

const Resume = () => {

    useEffect(() => {
        AOS.init({once: true});
      }, []); 
    
      return (
        <section id="resume">
            <div className="resume">
                <Container >
                    <div class="col-md-12 head">
                        <h5>Currículum</h5>
                        <h1>Acerca de mi formación</h1>
                        <h4 className= "lead"> Me caracterizo por ejecutar las actividades propuestas de manera responsable y rápida lo que me ha permitido
                        cumplir con los objetivos que me prongo.</h4>
                        <div class="row" data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-cubic">
                            <div class="col-md-6 col1" >
                                <h3 class="resume-title">Educación</h3>
                                {education.map((data, index)=> (
                                    <ResumeUi key = {index + 'col1'} title= {data.title} date = {data.date} ubication = {data.ubication}/>
                                ))}
                            </div>
                            <div class="col-md-6 col2">
                                <h3 class="resume-title">Experiencia Laboral</h3>
                                {experience.map((data, index)=> (
                                        <ResumeUi key = {index + 'col2'} title= {data.title} date = {data.date} ubication = {data.ubication}/>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Resume
