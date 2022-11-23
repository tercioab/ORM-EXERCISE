const express = require('express');

const books = require('./controller/books.controller')
const app = express();

app.use(express.json());

app.use('/books', books.getAll )

module.exports = app;