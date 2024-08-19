const express = require('express');
const cors = require('cors');
const session = require('express-session');

const fetchLogicRoutes = require('./routes/fetchLogic');

const app = express();

app.use(cors({ origin: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your_secret_key_here",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use("/api", fetchLogicRoutes)

module.exports = app