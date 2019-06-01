import React, { Component } from "react";
import { Jumbotron, Button, CardDeck, Card, Form, Row, Col } from "react-bootstrap";

class Signup extends Component {
  render() {
    return (
      <div>
        <Jumbotron >
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  </Form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Sign Up</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Form>
                <Form.Group controlId="formFirstName">
                  <Form>
                    <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form>
                </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign-up
                  </Button>
                  </Form>
              </Card.Body>
            </Card>
          </CardDeck>
        </Jumbotron>
      </div>
    )
  }
}

export default Signup;