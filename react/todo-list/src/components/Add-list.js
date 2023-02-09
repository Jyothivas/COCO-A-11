import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function Add(props) {
  const User={
    name:'',
    email:''
  }

  const [userData, setUserData]=useState(User);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.userData=userData;
  }
  
  return (
    <div className="container text-center">
      <h1 className="display-4 my-4">Todo List</h1>
      <div className="row">
        <div className="col-8 offset-2">
          <Form onSubmit={handleSubmit}>
            <FormGroup floating>
              <Input
                name="name"
                placeholder="Username"
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({...userData,name:e.target.value})}
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
                value={userData.email}
                onChange={(e) =>setUserData({...userData,email:e.target.value})}

              />
              <Label for="examplePassword">
                Email
              </Label>
            </FormGroup>

            <Button color="success" type="submit" onClick={()=>{}}>
              Add
            </Button>
          </Form>
        </div>

      </div>
    </div>
  );
}
export default Add;