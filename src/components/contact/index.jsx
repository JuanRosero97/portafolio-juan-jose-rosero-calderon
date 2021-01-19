import {React, useEffect} from 'react'
import AOS from 'aos'
import {Container} from 'react-bootstrap'
import FormUi from './FormUi'
import 'aos/dist/aos.css'
import './contact.css'

const Contact = () => {

    useEffect(() => {
        AOS.init({once: true});
      }, []); 

    return (  
        <section id="contact">
            <div className="contact">
                <Container>
                    <div  class="col-md-8 offset-md-2 head">
                        <h5>Contacto</h5>
                        <h1>Ponte en contacto conmigo</h1>
                        <h4 className= "lead"> Me encantaría que te pongas en contacto y que juntos pongamos en marcha
                        algo impresionante.</h4>
                    </div>
                        <div className = "col-md-10 offset-md-1"  data-aos="zoom-in"  data-aos-delay="400" data-aos-easing="ease-in-cubic">
                            <Container>
                            <div className = "row">
                                <div class="col-md-4 row2">                                    
                                        <div class="col-md-12 row2col1">
                                            <div class="contact-address">
                                                <h3>Dirección</h3>
                                                <p>Popayán, COL</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="col-md-12 row2col2">
                                            <div class="contact-phone">
                                                <h3>Teléfono Celular</h3>
                                                <p><span>+57 321 581 ****</span></p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="col-md-12 row2col3">
                                            <div class="contact-email">
                                                <h3>Email</h3>
                                                <p><span>juanrosero14@gmail.com</span></p>
                                            </div>
                                        </div>                                    
                                </div>
                                <div class="col-md-8 row1"> 
                                    <FormUi />
                                </div>
                            </div>
                            </Container>
                        </div>                    
                </Container>           
            </div> 
       </section>
    )
}

export default Contact
