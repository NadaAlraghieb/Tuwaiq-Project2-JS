import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
import "../dashboard/dashboard.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Link} from 'react-router-dom';
import './OneInfo.css'


export default function OneInformation() {
  const params = useParams();
  const name = params.name;
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/user");
      const data = await response.json();
      const info = data.find((user) => user.nationalId === sessionStorage.getItem("userId"));
      const oneInfo = info.userInfo.find((oneInfo) => oneInfo.name === name);
      setData(oneInfo.data);
    })();
  }, []);
  return (
    <>
      <Header/>
      <Container className="myContainer">
        <Row md={3} className="card1">
          <Col >
          <Link to="/cardDash">
          <h6 style={{marginLeft: "20px"}}> Dashboard {">>"} </h6></Link>
            {data &&
              data.map((elem) => {
                console.log(name);
                if (name === "Driving_Licenses") {
                  return (
                    <Card className="card12">
                      <Card.Body  style={{ textAlign: "center" }}>
                        <Card.Text className="text">
                          <Row>
                            <Col className="text">License type</Col>
                            <Col className="text">{elem.type}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">License status</Col>
                            <Col className="text">{elem.state}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Issuing date</Col>
                            <Col className="text">{elem.releaseDate}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Expiry Date</Col>
                            <Col className="text">{elem.expiryDate}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                } else if (name === "National_Address") {
                  return (
                    <Card className="card12">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col className="text">Building Number</Col>
                            <Col className="text">{elem.buildingNumber}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Postal Code</Col>
                            <Col className="text">{elem.postalCode}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Additional Code</Col>
                            <Col className="text">{elem.additionalCode}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Unit Number</Col>
                            <Col className="text">{elem.unitNumber}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Short Title</Col>
                            <Col className="text">{elem.shortTitle}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                } else if (name === "Qiyas_Exam_Results") {
                  return (
                    <Card className="card12">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col className="text">Test date</Col>
                            <Col className="text">{elem.testDate}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Total Marks</Col>
                            <Col className="text">{elem.totalMarks}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Type Of Test</Col>
                            <Col className="text">{elem.typeOfTest}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">AppointmentNumber</Col>
                            <Col className="text">{elem.appointmentNumber}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Notes</Col>
                            <Col className="text">{elem.notes}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
                else if (name === "Passports") {
                  return (
                    <Card className="card12">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col className="text">Passport No</Col>
                            <Col className="text">{elem.nuPassport}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Passport Type</Col>
                            <Col className="text">{elem.passType}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Release Date</Col>
                            <Col className="text">{elem.date}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Release Place</Col>
                            <Col className="text">{elem.place}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Expiry Date</Col>
                            <Col className="text">{elem.dateE}</Col>
                          </Row>
                        </Card.Text>
                        <Card.Text>
                          <Row>
                            <Col className="text">Passport Statues</Col>
                            <Col className="text">{elem.statues}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
                
                else {
                  return (
                    <Card className="card12">
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Text>
                          <Row>
                            <Col className="text">Building Number</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
              })}
          </Col>
        </Row>
      </Container>
     <Footer/>
    </>
  );
}