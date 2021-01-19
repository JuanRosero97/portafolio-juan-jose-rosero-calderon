import React from 'react'
import {Container} from 'react-bootstrap'

import './footer.css'

const index = () => {

    return (
        <section id = "footer">
            <div className="footer">
                <Container>
                    <div class="col-md-10 offset-md-1 head">
                <div class="row">
                    <div class="col-6 row3col1">
                    <div class="row">
                        <ul class="footer-social">        
                            <li><a href="https://www.linkedin.com/in/juan-jos%C3%A9-rosero-calder%C3%B3n-27564b203/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="https://github.com/JuanRosero97" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></li>
                        </ul>                                    
                    </div>
                    </div>
                    <div class="col-6 row3col2">
                        <div class="design">
                            <span>Design by <strong>Juan Rosero</strong> using React.js and Bootstrap</span>	         	
                        </div>		                  
                    </div>
                </div> 
            </div>      
                </Container>
            </div>
    </section>
    )
}

export default index
