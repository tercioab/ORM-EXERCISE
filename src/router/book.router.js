const express = require('express');
const bookControler = require('../controller/books.controller');

const router = express.Router();

router.get('/', bookControler.getAll);
router.get('/:id', bookControler.getById);
router.post('/', bookControler.createBook);
router.put('/:id', bookControler.updateBook);
router.delete('/:id', bookControler.deleteBook);


module.exports = router;