import React, { Component } from "react";
import { Jumbotron, Button, CardDeck, Card, Form } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron >
          <Card.Img style={{ height: 180, width: 180, textAlign: "center" }} variant="top" src="./images/logo.jpg" />
        <h3>Welcome to SOS Text!</h3>
        <p>
          Schedule and send custom text messages automatically via SMS and never be stuck as the damsel in distress again.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>
        <CardDeck>
          <Card>
            <Card.Img style={{ height: 330, width: 408 }} variant="top" src="./images/woman-head-in-hands.jpg" />
            <Card.Body>
              <Card.Title>Stuck on Another Bad Date?</Card.Title>
              <Card.Text>
              Get SOS Text and never be trapped on a Saturday night again.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img style={{ height: 330, width: 408 }} variant="top" src="./images/run-away.jpg" />
            <Card.Body>
              <Card.Title>Plan Your Esacpe!</Card.Title>
              <Card.Text>
                Need an "escape call?" Send yourself an escape text instead with the push of a button! {' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img style={{ height: 330, width: 408 }} variant="top" src="./images/sail-away-woman.jpg" />
            <Card.Body>
              <Card.Title>Smooth Sailing from Here...</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        
      </div>
    )
  }
}

export default Home;