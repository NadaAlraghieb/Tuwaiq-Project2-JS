
import React, { useState, useEffect } from "react";
import MyCard from "./MyCard";
import {  Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../dashboard/dashboard.css";


export default function CardDash() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/user");
      const data = await response.json();
      const info = data.find((user) => user.nationalId === sessionStorage.getItem("userId"));
      setData(info.userInfo);
    })();
  }, []);
  return (
    <div className="App">
     <Header/>
      <Container>
        <Row md={4}>
          {data &&
            data.map((elem) => {
              const nameWithOutUnderscore = elem.name.replaceAll("_", " ");
              return (
                <Link
                  to={`/OneInformation/${elem.name}`}
                  style={{ textDecoration: "none", color: "#42AE9F" }}
                >
                  <MyCard
                    key={elem.name}
                    title={nameWithOutUnderscore}
                    img={elem.image}
                    number={elem.data.length}
                  />
                </Link>
              );
            })}
        </Row>
      </Container>
    <Footer/>
    </div>
  );
}
