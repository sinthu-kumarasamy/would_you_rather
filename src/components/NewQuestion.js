import React, { Component } from "react";
import NavBar from "./NavBar";
import { Card, Button, Form,Divider } from "semantic-ui-react";

class NewQuestion extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Card style={{marginLeft:'600px',marginTop:'100px',fontSize:'20px',width:'600px'}}>
          <Card.Content>
            <Card.Header style={{textAlign:'center'}}>Create Question</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Header>Would You Rather</Card.Header>
            <Card.Description style={{padding:'3px'}}>
              <Form>
                <Form.Field>
                  <input placeholder="Enter Option One" />
                </Form.Field>
                <Divider horizontal>Or</Divider>
                <Form.Field>
                  <input placeholder="Enter Option Two" />
                </Form.Field>
                <div className="ui two buttons">
                  <Button
                    type="submit"
                    basic
                    color="blue"
                    onClick={(e) => this.handleButtonClick(e)}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Description>
            </Card.Content>
        </Card>
      </div>
    );
  }
}

export default NewQuestion;
