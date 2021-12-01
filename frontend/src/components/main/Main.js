import React, { useState, useEffect } from "react";
import './Main.css';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import family from '../img/family.png';
import health from '../img/health.png';
import MOH from '../img/MOH.png';
import qr from '../img/qr.png';
import barcode1 from '../img/barcode1.png';
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Main() {
  
  const [nationalId, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/user");
      const data = await response.json();
      const info = data.find((user) => user.nationalId === sessionStorage.getItem("userId"));
      setId(info.nationalId);
      setFirstName(info.firstName);
      setLastName(info.lastName);
    })();
  });
    
    return (
      <div>
        <Header/>
        <br></br>
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Card id="green" border="success" style={{ width: '19rem', border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <Card.Body>
                  <Card.Title id="immune"><img src={barcode1} style={{width: "40px", marginLeft: "1px"}}/><br></br>
                   Immune <br></br>                                                                                              
                   Last updated<br></br>
                   Wed, Nov 01:42 PM</Card.Title>
                </Card.Body>
              </Card>
              </Col>
            <Col xs={6} md={6} style={{  border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              <Row>
              
                
                
                <Col xs={6}>
                <h6 style={{ margin:"30px"}}>Name</h6> <h1 style={{fontSize:"20px" ,margin:"30px"}}>{firstName} {lastName}</h1>
                </Col>
                <Col xs={6}>
                <h6 style={{margin:"30px"}}>National ID Number </h6> <h1 style={{fontSize:"20px",margin:"30px"}}>{nationalId}</h1>
                </Col>
               
              </Row>
            </Col>
            <Col xs={6} md={3}>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={6} md={3}>
            <div className="mb-2">
            <Link to="/alert">
    <Button id="health" style={{ width: '19rem', paddingRight: "40px",textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={health} style={{ width: "30px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/>
 Health Condition <h6>Health status details and colors</h6>
     </Button>{' '}
     </Link>
    <Button id="family" style={{ width: '19rem', paddingLeft: "1px", textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={family} style={{ width: "30px", marginTop: "10px", marginRight: "30px" , marginBottom: "10px"}}/>
    Family Members and Sponsored Members
    </Button>{' '}
    <Button className="covid" style={{ width: '19rem', paddingRight: "50px", textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={MOH} style={{ width: "30px", marginTop: "10px", marginRight: "50px" ,paddingLeft: "1px"}}/>
    MOH COVID-19 <br></br>Dashboard
    </Button>{' '}
    <Button className="covid" style={{ width: '19rem', textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={qr} style={{ width: "30px", marginTop: "10px", marginRight: "10px" }}/>
    Use QR Code to visit the gathering place
    </Button>{' '}
  </div>
            </Col>
            <Col xs={6} md={6}>
               <Card style={{ border: 'black 1px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Text className="permit"><br></br> <br></br> <br></br><br></br> <br></br>
                <h3> No permits exist </h3>
                  </Card.Text><br></br> <br></br> <br></br> <br></br> <br></br>
                </Card.Body>
                <Card.Footer className="text-muted">1 days ago</Card.Footer>
              </Card>
            </Col>
            <Col xs={6} md={3}>
            </Col>
          </Row>
        <br></br>
<Row>
  <Col>
  </Col>
</Row>
        </Container>
        
<Footer/>
      </div>
    )
  }
