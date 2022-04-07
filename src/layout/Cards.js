import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import eduplaytion from '../images/eduplaytion.png'
import nasa from '../images/nasa.png'

function Cards() {
  return (
    <div className="cards container row">
        <h2 className="cards__heading">My projects</h2>
        <div className="cards__card col">
            <Card className="cards__card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={eduplaytion} alt="Project image" />
                <Card.Body>
                    <Card.Title>Eduplaytion</Card.Title>
                    <Card.Text>
                    First semester project, a sample site for Eduplaytion.
                    </Card.Text>
                    <Button className="cards__button" href="https://tasks.annikentorget.no/semester" variant="primary">Go to site</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="cards__card col">
            <Card className="cards__card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={nasa} alt="Project image" />
                <Card.Body>
                    <Card.Title>Nasa microsite</Card.Title>
                    <Card.Text>
                    A microsite we made for NASA as our last exam after the first year.
                    </Card.Text>
                    <Button className="cards__button" a href="https://projectexam.annikentorget.no/" variant="primary">Go to site</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Cards