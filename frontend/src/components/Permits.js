import { Component } from "react";
import React, { useState, useEffect } from "react";
import './Permits.css';
 import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import cart from './img/cart.png';
import car from './img/medical.png';
import medical from './img/medical.png';
import sport from './img/sport.png';
import gathering from './img/gathering.png';
import help from './img/help.png';
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import tr1 from './img/tr1.png';
import MyPerCard from "./MyPerCard";
// import arro from './img/arro.png';
// import {Link,usePermi
// }  from "react-router-dom";
// const per=usePermi()
    export default function Permits() {
        const [data, setData] = useState(null);
        useEffect(() => {
          (async () => {
            const response = await fetch("/permissions");
            const data = await response.json();
            const info = data.find((user) => user.userId === "1010");
            setData(info.permission);
          })();
        }, []);
        return (
            <div>
               <Header/>
                
<Container>
<h1>Permits</h1>
  <Row>
    <Col>
    <Card className="myCard" >
        <img className="myImg" src={cart}/>
        <div style={{textAlign: "left", marginRight: "80px", marginLeft: "22px"}}>
        <h5> Supplies </h5>
        <h6> Request permit for supplies </h6>
        </div>
        <h1>{" > "}</h1>
</Card>
    </Col>
<Col>
    <Card className="myCard">
        <img className="myImg" src={car} alt="" />
    <div style={{textAlign: "left", marginRight: "20px", marginLeft: "20px"}}>
        <h5> Temporary permit <br></br>for a driver </h5>
        <h6> This service is only available to work or student permit holders </h6>
        </div>
        <h1>{" > "}</h1>
</Card>
</Col>
    <Col>
    <Card className="myCard">
        <img className="myImg" src={medical} alt="" />
        <div style={{textAlign: "left", marginRight: "50px", marginLeft: "20px"}}>
        <h5> Emergency Medical Permit </h5>
        <h6> This service is only for medical emergencies </h6>
        </div>
    <h1> {">"} </h1>
      
</Card>
    </Col>
    </Row>
  </Container>
<Container>
<Row>
  <Col>
  <Card className="myCard">
        <img className="myImg" src={sport} alt="" />
        <div style={{textAlign: "left", marginRight: "50px", marginLeft: "20px"}}>
        <h5> Permit to Practice Walking </h5>
        <h6> This service is for jogging permit in the authorized range </h6>
        </div>
        <h1>{">"} </h1>
</Card>  
  </Col>
<Col>
    <Card className="myCard">
        <img className="myImg" src={help} alt="" />
        <div style={{textAlign: "left", marginRight: "50px", marginLeft: "20px"}}>
        <h5> Humanitarian Cases </h5>
        <h6> Submit a request for humanitarian case </h6>
        </div>
        <h1> {">"} </h1>
</Card>
    </Col>
    <Col>
    <Link to ="/permissons" style={{textDecoration:'none ', color:'black'}}>
    <Card className="Card" style={{ border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <img className="myImg" src={gathering} alt="" />
        <div style={{textAlign: "left", marginRight: "50px", marginLeft: "20px"}}>
        <h5> Auto health status verification permits </h5>
        <h6> This permit is intended for officials of places where there is a gathering </h6>
        </div>
        <h1> {">"} </h1>
</Card></Link>
    </Col>
    </Row>
</Container>
<Container>
        <Row>
          <Col>
            <Card className="permits">
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>{" "}
                Current Permits
              </h6>
              {data !== 0 ? (
                <Row md={4}>
                  {data &&
                    data.map((elem) => {
                      console.log(elem.type);
                      return (
                        <MyPerCard
                          key={elem.type}
                          type={elem.type}
                          place={elem.place}
                          numberOfPeople={elem.numberOfPeople}
                        />
                      );
                    })}
                </Row>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-calendar-x "
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>{" "}
                  <div style={{ margin: "0 20px" }}>
                    <h5 id="h5"> No permits exist </h5>{" "}
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
    }