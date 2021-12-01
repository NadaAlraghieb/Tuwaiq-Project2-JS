import Header from './header/Header';
import Footer from "./footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {   
    Card,
    Col,
    Container,
    Row,
    Form,
    Button,
    FormGroup, } from 'react-bootstrap';

export default function Notifacations() {
    return (
        <div>
            <Header/>
            <hr></hr>
            <br></br>
<Container
style={{
          marginTop: "30px",marginLeft: "100px", padding: "40px",
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
          <Row>
              <Col>
              <Card id="permits-card-body">
                 <Form>
                  <Form.Label style={{ fontSize: "25px", marginLeft: "35px"}}> Notifications </Form.Label><br></br>
                  <br></br>
                
                <Button
                    variant="secondary"
                    style={{
                      backgroundColor: "#2EAFA1",  width: "20%", marginLeft: "22px", borderRadius: "20px"
                    }}
                    type="submit"
                  >
                    {" "}
                   <h6> Tawakkalna feeds </h6>{" "}
                  </Button>
                  <hr></hr> <br></br>
                  <hr></hr>
                <Form.Group 
                className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: "25px", marginLeft: "35px"}}> Null </Form.Label>{" "} <br></br>
                  <h6  style={{ fontSize: "20px", marginLeft: "35px"}}>We congratulate you on completing the first dose of the vaccine, and hope for your wellbeing. You may now view your health status in your health passport through Tawakkalna</h6>
                </Form.Group>{" "}
                <FormGroup>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

            <Footer/>
        </div>
    )
}