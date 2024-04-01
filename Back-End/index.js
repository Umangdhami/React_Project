require('dotenv').config();
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const route = require('./routes/route.js');
const app = express();
const port = process.env.PORT;
const cookie_parser = require('cookie-parser');
const mongoose = require('./database/db.js')


app.use(cors());
app.use(express.json());
app.use(cookie_parser());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json())

app.use('/', route);

app.listen(port, () => {
    console.log(`Server Run At port ${port}`);
});
