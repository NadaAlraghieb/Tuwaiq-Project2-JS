const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const { userRouter } = require('./routers/routes/userRouter');
const { permissionsRouter } = require("./routers/routes/permissionsRouter");

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use('/user',userRouter )





app.use("/permissions", permissionsRouter);
app.use("/permissions", permissionsRouter);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});
