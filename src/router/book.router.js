const express = require('express');
const bookControler = require('../controller/books.controller');

const router = express.Router();

router.get('/', bookControler.getAll)

module.exports = router;