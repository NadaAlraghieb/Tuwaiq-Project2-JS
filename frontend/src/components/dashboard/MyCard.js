import React from "react";
import { Col, Card } from "react-bootstrap";
import "../dashboard/dashboard.css";

export default function MyCard(props) {
  return (
    <Col>
      <Card className="Cards" style={{  border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <Card.Body style={{ textAlign: "center" ,marginTop:"40px",marginBottom:"40px"}}>
          <img className="myImage" src={props.img} alt={props.title} />
          <hr />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{color:"black"}}>{props.number}</Card.Text>
         
        </Card.Body>
      </Card>
    </Col>
  );
}