import React,{ useState } from 'react';
import './Header.css';
import { Navbar, Button, Nav, NavDropdown, Form, Container, Offcanvas  } from 'react-bootstrap';
import {Link , useNavigate } from "react-router-dom"
import home1 from '../img/home1.png';
import permits from '../img/permits.png';
import report from '../img/report.png';
import noti from '../img/noti.png';
import organ from '../img/organ.jpg';
import dash1 from '../img/dash1.png';
import twlogo from '../img/twlogo.png';


function Header () {
  const [dark, setDark]= useState("");
  const nav=useNavigate()
  function myFunction() {
   setDark("gray")
 }
 

	return (
		<div>
		<Navbar style={{backgroundColor:dark}} bg="" expand={false}>
  <Container fluid>

  <Button variant="outline-dark" onClick={() => myFunction()}> Dark mode</Button>

  <NavDropdown  title="My Profile"  style={{  marginLeft:"70px"}} id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4" onClick={() => nav('/')}>Sign out</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown  title="Language" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action4">عربي</NavDropdown.Item>
            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Urdo</NavDropdown.Item>
          </NavDropdown>


         
              <img
               src={twlogo} alt="" 
               style={{width: "110px", height: "60px", marginLeft: "550px"}}/>
               
			   

  <Navbar.Toggle  style={{ marginRight:"100px"}} aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      >

               <img
               src={twlogo} alt="" 
               style={{width: "120px", height: "50px", marginLeft:"130px"}}/>


<Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body id="body">

        <Nav className="justify-content-left flex-grow-1 pe-3"> <br></br>
        <Link to="/main">
          <Button id="home" variant="" style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
           size="lg"> <img src={home1} style={{ width: "33px", marginTop: "10px", marginRight: "19px" ,marginLeft: "5px", marginBottom: "10px"}}/> Home </Button></Link>{' '} <br></br> <br></br>


		  <Link to="/permits">
      <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
       size="lg"> <img src={permits} style={{ width: "45px", marginTop: "10px", marginRight: "9px" ,marginLeft: "1px", marginBottom: "10px"}} /> Permits</Button></Link>{' '} <br></br> <br></br>
       
                 <Link to="/cardDash">
                <Button  id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
           size="lg"> <img src={dash1} style={{ width: "27px", marginTop: "10px", marginRight: "20px" ,marginLeft: "8px", marginBottom: "10px"}}/> Dashboard</Button></Link>{' '} <br></br> <br></br>

<Link to="/notifacations">
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
      size="lg"> <img src={noti} style={{ width: "28px", marginTop: "10px", marginRight: "20px" ,marginLeft: "7px", marginBottom: "10px"}}/> Notifications</Button></Link>{' '} <br></br> <br></br>

<Link to="/organ">
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
       size="lg"> <img src={organ} style={{ width: "46px", marginTop: "10px", marginRight: "10px" ,marginLeft: "1px", marginBottom: "10px"}}/> Organ Donation</Button></Link>{' '} <br></br> <br></br>


		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} 
       size="lg"> <img src={report} style={{ width: "30px", marginTop: "10px", marginRight: "20px" ,marginLeft: "11px", marginBottom: "10px"}}/> Reports</Button>{' '} <br></br>
    
      
      
        </Nav>
        </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>
	);
};


export default Header;
