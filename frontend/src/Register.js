import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

export default function Register() {
  
  return (
    <div className="Register">
      <img
        src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
        style={{
          width: "15rem",
          marginLeft: "40rem",
          marginBottom: "20px",
          marginTop: "10px",
          padding: "30px",
        }}
      />
      <Card
        style={{
          width: "23rem",
          marginLeft: "35rem",
          borderRadius: "2px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Card.Body>
          <Form >
            <Form.Group size="lg" controlId="email">
              <Form.Label
               style={{ marginLeft: "3px", marginBottom: "30px"}}
              >Register</Form.Label>
              <Link to="/">
              <Card.Link
                href="#"
                style={{ marginLeft: "13rem", color: "#2EAFA1", marginTop: "20px" }}>
                    Sign In
              </Card.Link>
              </Link>
              <Form.Control
                autoFocus
                type="nationalId"
                placeholder="Enter nationalId"
                
                
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="New password "
                type="password"
                
                
              /></Form.Group>
              <Form.Group size="lg" controlId="password">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Confirm the new password"
                type="password"
                
                
              />
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>
            </Form.Group>
            <br></br>
            <Link to="/">
            <Button
             variant="success"
              size="lg"
              type="submit"
              style={{ backgroundColor: "#2EAFA1", width: "300px", marginLeft: "19px" }}
             
            >
              Register
            </Button></Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}