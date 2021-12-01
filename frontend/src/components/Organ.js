import Header from './header/Header';
import Footer from "./footer/Footer";
import {Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function Organ() {
    return (
        <div>
             <Header/>
            <hr></hr>
            
            <h3 style={{  marginLeft: "6rem",color:"black", marginBottom: "50px", marginTop: "30px"}}> Organ Donation </h3>
      <Container
        style={{
          marginTop: "30px",marginLeft: "100px", padding: "40px",borderRadius: "10px",
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      > <h6 style={{color: "grey"}}> OrganDonationTerms </h6>
            
</Container>
<br></br>
<br></br>

 
<Button 
                    variant="outline-danger"
                    style={{
                     width: "20%", marginLeft: "22px", marginLeft: "410px",
                    }}
                    type="submit"
                  >
                    {" "}
                   <h6> Cancel </h6>{" "}
                  </Button>

                  <Button
                    variant="primary"
                    style={{
                     width: "20%", marginLeft: "22px",marginRight: "400px",
                    }}
                    type="submit"
                  >
                    {" "}
                   <h6> Ok </h6>{" "}
                  </Button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

            <Footer/>
        </div>
    )
}