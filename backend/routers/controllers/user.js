const express = require("express");
const { users } = require("../db");


//to get All the users

const getAllUser = (req, res) => {
  res.send(users);
};

// get one user info 
const getUser = (req, res) => {
  
  const { nationalId, password } = req.body;
  
  const foundUser = users.find((elem) => {
    
    return elem.nationalId == nationalId && elem.password == password;
  });
  
  if (foundUser) res.send(foundUser);
  else
    res
      .status(404)
      .send(
        "We couldn’t find an account matching the email and password you entered. Please check and try again."
      );
};


//to get all information to one user to dashboard

function getPersonInfo(req, res) {

  const result = users.find(({ id }) => id === parseInt(req.body.id));
  
  if (result) 
  res.send(result);
  else
    res.status(404).send("We couldn’t find an account.");
}

// get info by national id and firstName
const getInfo = (req, res) => {
  
  const { nationalId, firstName } = req.body;
  
  const foundUser = users.find((elem) => {
    
    return elem.nationalId == nationalId && elem.firstName == firstName;
  });
  
  if (foundUser) res.send(foundUser);
  else
    res
      .status(404)
      .send(
        "We couldn’t find an account matching the nationalId and name you entered."
      );
};

module.exports = { getAllUser, getUser, getPersonInfo,getInfo};
