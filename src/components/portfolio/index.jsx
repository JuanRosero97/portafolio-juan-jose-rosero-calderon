import {React, useEffect} from 'react'
import {CardColumns, Container} from 'react-bootstrap'
import CardUi from './CardUi'
import AOS from 'aos'
import imgEMC from '../../img/EMC.jpeg'
import imgMERN from '../../img/mern.png'
import imgMiPapy from '../../img/mipapy.png'
import imgPop from '../../img/pop.png'
import imgMegaRobot from '../../img/megarobot.PNG'
import imgMrSami from '../../img/mrsami.PNG'
import 'aos/dist/aos.css'
import './portfolio.css'

const developments =   [
                        {img: imgMERN, link:'https://github.com/JuanRosero97/categories-mern', title:'MERN Stack', 
                         description: "Construí una API RESTful en Node.js usando express.js y MongoDB. Diseñé una base de datos donde se puede realizar CRUD gracias a un _id de identificación. En este caso, utilice Material Ui para el diseño FRONT-END."},
                        {img: imgMegaRobot, link:'', title:'Web Master', info:"No disponible",
                         description: "Diseñé y dí mantenimiento a la página web creada en Wordpress para un ecommerce."},
                        {img: imgEMC, link:'https://www.facebook.com/permalink.php?story_fbid=1626519460881991&id=436341623233120', title:'EMC.apk',
                         description: "Desarrollé una app en Android Studio para personas mayores de 65 años que padecen pérdida de Memoria a Corto Plazo (MCP)."},
                        {img: imgPop, link:'https://github.com/JuanRosero97/PopShow-android-app', title:'PopShow app',
                         description: "Desarrollé una app tanto para IOs como Android, donde se brindó soporte para español e inglés y se incluyó una BD en SQLite para realizar un CRUD a los sitios turisticos de Popayán."},
                        {img: imgMiPapy, link:'', title:'MiPapy.apk', info:'Independiente',
                         description: "Desarrollé una aplicación móvil en Thunkable para mejorar la comprensión de las operaciones matemáticas básicas para niños."},
                         {img: imgMrSami, link:'https://mrsamibot.com/', title:'Web Master',description: "Diseñé y dí mantenimiento a la página web creada en Wordpress para un ecommerce."}]

const Portfolio = () => {

    useEffect(() => {
        AOS.init({once: true});
      }, []); 
    
      return (
        <section id="portfolio">
            <div className="portfolio">
                <Container>
                <div class="row">
                    <div class="col-md-10 offset-md-1 head">
                        <h5>Trabajos</h5>
                        <h1>Acerca de mis desarrollos</h1>
                        <h4 className= "lead"> Estos son algunos de mis trabajos más recientes; en cada uno de ellos
                        he tenido experiencias increibles y me siento muy orgulloso de lo que pude realizar.</h4>
                        <CardColumns data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-cubic" className="cardColumn">
                            {developments.map((data, index)=> (
                              <CardUi key = {index} img= {data.img} title = {data.title} description = {data.description} 
                                       link = {data.link} info = {data.info}/>
                            ))}
                        </CardColumns>
                </div>
                </div>
            </Container>
            </div>
        </section>
    )
}

export default Portfolio
