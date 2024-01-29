import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styles/card.css'

const PartCard = ({ part }) => {

    return (
        <>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="cardTitle">{part.name}</Card.Title>
                    <Card.Subtitle className="cardSubtitle mb-2 text-muted">{part.option1}</Card.Subtitle>
                    <hr />
                    <Card.Text className="cardDescription">{part.description}</Card.Text>
                    <div className="block"></div>
                    <Card.Text className="cardLocation">{part.option2}</Card.Text>
                    <hr/>
                    <Link to={`/edit-part/${part._id}`}><Button variant="danger" className="edit">Edit</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default PartCard