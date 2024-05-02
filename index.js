const express = require('express');
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const app=express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const { notFound } = require('./middlewares/errorHandler');
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.request(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
