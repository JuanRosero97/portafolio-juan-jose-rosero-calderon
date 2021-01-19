import React from 'react'
import './portfolio.css'
import {Card, Button} from 'react-bootstrap'

const CardUi = ({img, title, description, link, info}) => {
    return (
        <Card className= "card-center">
                <div className = "overload">
                    <Card.Img className="cardImg" variant="top" src={img} alt="" id="placeholder"/>
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">{title}</Card.Title>
                        <Card.Text className="cardDescript">
                            {description}
                        </Card.Text>
                        {link === '' ? 
                        <Card.Text>
                            <small className="text-muted">{info}</small>
                        </Card.Text> : 
                            <Button className="cardButton" href={link} target="_blank" rel="noreferrer">Ver más</Button>
                        }                        
                </Card.Body>
        </Card>
    )
}

export default CardUi
