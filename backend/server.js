const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
require("dotenv").config()
const bcrypt = require("bcrypt")
const db = require('./db/database')
const jwt = require("jsonwebtoken");

const { userRouter } = require('./routers/routes/userRouter');
const { permissionsRouter } = require("./routers/routes/permissionsRouter");

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use('/user',userRouter )
//
app.post("/user", (req, res) => {
    const { nationalId, password } = req.body;
  
    // search for the username in the database
    User.findOne({ nationalId: nationalId })
      // fill the role value with the right document from the roles collection
      .populate("role")
      .then((result) => {
  
        // check if a result is found
        if (result) {
  
          // compare the password sent in the body with the encrypted password in the database 
          bcrypt.compare(password, result.password, (err, result2) => {
            if (err) {
              console.log(err);
              res.json(err);
              return;
            }
            if (result2) {
              // put some information in the payload
              const payload = {
                id: result._id,
                nationalId: result.nationalId,
               
              };
  
              // put some options 
              const options = {
                expiresIn: "1h",
              };
  
              // save the secret environment variable inside a normal variable
              const secret = process.env.SECRET;
  
              // create a token
              const token = jwt.sign(payload, secret, options);
  
              // send a message and the token in the response
              res.status(200).json({ message: "user logged in", token: token });
  
              
            } else {
              res.status(403).json("password incorrect");
            }
          });
        } else {
          res.status(404).json("username incorrect");
        }
      })
      .catch((err) => {
        console.log(err);
        res.json(err.message);
      });
  });
  




app.use("/permissions", permissionsRouter);
app.use("/permissions", permissionsRouter);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});
