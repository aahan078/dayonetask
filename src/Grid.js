import React from 'react'
import '../src/grid.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Grid() {
  return (
    <div className='grid--1'>

<CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Rupin Pass</Card.Title>
          <Card.Text>
           Share your trek experiences and get featured on the main website
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/14200-Deoriatal_DC_Mt-Chaukhamba-Rhododendrons-Manasa-Gollapinni-Instagrammer.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Kuari Pass</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.prismic.io/indiahike/fb5abf4a-0170-4e1b-9f75-634a88982328_Chandrkhani+Pass_Akshay+Kevin_Indiahikes.jpg?auto=compress,format/100px160" />
        <Card.Body>
          <Card.Title>Chandra tal</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <h1 className='faq'>
    Frequenty Asked Questions
    </h1>

    
    </div>

    
  )
}
