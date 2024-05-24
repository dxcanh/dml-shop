const express = require('express');
const app = express();
const connection = require('./Server/configs/ConnectDB');
const initRoute = require('./Server/routes/index');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

connection();

initRoute(app);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port', process.env.PORT || 5000);
})