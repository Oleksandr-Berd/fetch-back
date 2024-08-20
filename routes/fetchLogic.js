const express = require('express');
const {postData} = require('../controllers/postData');

const fetchLogicRoutes = express.Router()

fetchLogicRoutes.post("/", postData)

module.exports = { fetchLogicRoutes };