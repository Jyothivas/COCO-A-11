import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function Add(){
    
    return (
        <div className="container text-center">
      <h1 className="display-4 my-4">Todo List</h1>
      <div className="row">
        <div className="col-8 offset-2">
        <Form>
    <FormGroup floating>
      <Input
        name="name"
        placeholder="Username"
        type="text"
        />
      <Label for="exampleEmail">
        Username
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        />
      <Label for="examplePassword">
        Email
      </Label>
    </FormGroup>

    <Button color="success">
      Add
    </Button>
  </Form>
        </div>
      
    </div>
  </div>
  );
}
export default Add;