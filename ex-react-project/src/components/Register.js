import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


import './Register.css';

function Register() {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdC, setPwdC] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }
  const pwdChangeHandler = (e) => {
    setPwd(e.target.value);
  }
  const pwdCChangeHandler = (e) => {
    setPwdC(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
      <div className="form-sign">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ emailChangeHandler } />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={ pwdChangeHandler }/>
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control type="password" placeholder="Password Confirm" onChange={ pwdCChangeHandler } />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary">
            가입
          </Button>
        </Form>
      </div>
  );
}

export default Register;
