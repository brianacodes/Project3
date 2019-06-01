import React, { Component } from "react";
import { Jumbotron, Button, CardDeck, Card, Form, Table } from "react-bootstrap";
import API from "../../utils/API";

class Portal extends Component {

  state = {
    messages: [],
    number: '',
    message: ''
  };

  componentDidMount() {
    this.getMessages()
  }

  getMessages() {
    API.getMessages()
      .then(res =>
        this.setState({ messages: res.data})
      )
      .catch(err => console.log(err));
  }

  handleMessageChoose = event => {
    const { dataset } = event.target;
    this.setState({
      message: dataset.message
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.number && this.state.message) {
      API.postMessage({
        number: this.state.number,
        message: this.state.message
      })
        .then(res => this.getMessages())
        .catch(err => console.log(err));
    }
    // alert("Message Sent!");
  };

  render() {
    return (
      <div>
        <Jumbotron >
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Template Messages</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Template Message</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.messages.map(message => (
                      <tr key={message._id}>
                        <td>{message.body}</td>
                        <td>{message.category}</td>
                        <td><Button onClick={this.handleMessageChoose} data-message={message.body} variant="outline-primary">Choose</Button></td>
                      </tr>
                    ))}
      
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>New Message</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control name="number" as="select" onChange={this.handleInputChange}>
                        <option value="13035555555">Mom</option>
                        <option value="13035555555">Dad</option>
                        <option value="13035555555">Bestie!</option>
                        <option value="13035555555">Boss Lady</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Type Message</Form.Label>
                      <Form.Control value={this.state.message} name="message" onChange={this.handleInputChange}  as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleFormSubmit}>Send Message</Button>
                  </Form> 
              </Card.Body>
            </Card>
          </CardDeck>
        </Jumbotron>
      </div>
    )
  }
}

export default Portal;