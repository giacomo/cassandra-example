require('dotenv').config();
const connection = require('../config/db_connection');
const Uuid       = require('cassandra-driver').types.Uuid;

const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(204).send(null);
});

router.post("/register", (req, res) => {
    res.status(204).send(null);
});

router.post("/books", (req, res) => {
    res.json({books: []});
});

module.exports = router;