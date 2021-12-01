import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  FormGroup,
} from "react-bootstrap";
import axios from "axios";
import "./Permits.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
export default function Permits() {
  const [Permits, setPermits] = useState({});
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "/permissions/1010",
      data: {
        type: type,
        place: place,
        numberOfPeople: numberOfPeople,
      },
    })
      .then((response) => {
        console.log(response);
        setPermits(response.data.id);
        console.log(Permits);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
       <Header/>
      <h1 style={{marginLeft: "7rem",color:"#2EAFA1", marginBottom: "50px", marginTop: "30px"}}> Permitsst </h1>
      <Container
        style={{
          marginTop: "30px",marginLeft: "100px", padding: "40px",
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <Row>
          <Col>
            <Card id="permits-card-body">
              <h5> Permit type </h5>{" "}
              <Form onSubmit={handleClick}>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Governmental"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onClick={() => setType("Governmental")}
                    />
                    <Form.Check
                      inline
                      label="Commercial"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onClick={() => setType("Commercial")}
                    />
                    <Form.Check
                      inline
                      label="Personal"
                      type={type}
                      id={`inline-${type}-3`}
                      onClick={() => setType("Personal")}
                    />
                    <br></br>
                    <Form.Check
        inline
        label="fragment_gathering_permit_gathering_type_institutional_self_quarantine"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        onClick={() => setType("fragment_gathering")}
      />
                  </div>
                ))}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Place Name </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    style={{width: "47rem"}}
                    placeholder="Place name"
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Number of expected Visitors </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    style={{width: "47rem"}}
                    placeholder="Number of expected Visitors"
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                  />
                </Form.Group>{" "}
                <FormGroup>
                  <Button
                    variant="secondary"
                    style={{
                      backgroundColor: "#2EAFA1",  width: "20%", marginLeft: "22px"
                    }}
                    type="submit"
                  >
                    {" "}
                   <h6> Request Permit</h6>{" "}
                  </Button>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}