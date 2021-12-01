import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main/Main";
import CardDash from "./components/dashboard/cardDash";
//import Footer from "./components/footer/Footer";
import Login from "./components/Login";
//import Header from "./components/header/Header";
import OneInformation from "./components/dashboard/OneInformation";
import Permits from './components/Permits';
import Permissons from './components/Permissons';
import Alert from "./components/Alert";
import Register from "./Register";
import NoMach from "./NoMach";
import Noifactions from "./components/Notifacations"
import Organ from "./components/Organ"


const App = () => {
  return (
    <div className="App">
      

      <Routes>
         <Route path="/" element={<Login />} /> 
        <Route path="/Main" element={<Main />} />
        <Route path="/cardDash" element={<CardDash />} />
        <Route path="/OneInformation/:name" element={<OneInformation />}></Route>
        <Route path="/permits" element={<Permits/>} ></Route>
        <Route path="/permissons" element={<Permissons/>} />
        <Route path="/alert" element={<Alert/>} />
        <Route path="/notifacations" element={<Noifactions/>} />
        <Route path="/organ" element={<Organ/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="*" element={<NoMach replace to="/404" />} />

      </Routes>
      
    </div>
  );
};

export default App;
