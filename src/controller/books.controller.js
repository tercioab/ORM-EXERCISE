const bookService = require('../service/book.service');

const ERROR_MESSAGE = 'Algo deu errado'
const NOT_BOOK_ERROR = 'Book not found'

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll()
      return  res.status(200).json(books)
    } catch (e) {
        console.log(`erro log: ${e.message}`)
      return  res.status(500).json({ message: ERROR_MESSAGE })
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await bookService.getById(id);
        if (!books) return res.status(404).json({ message: NOT_BOOK_ERROR });
        return res.status(200).json(books)
    } catch (e) {
        console.log(`erro log: ${e.message}`);
      return  res.status(500).json({ message: ERROR_MESSAGE });
    }
};


const createBook = async (req, res) => {
    try {
        const { title, autor, pageQuantity } = req.body;
        const createdBooks = await bookService.createBook(title, autor, pageQuantity);
        return res.status(201).json(createdBooks);
    } catch (e) {
        console.log(`erro log: ${e.message}`);
       return res.status(500).json({ message: ERROR_MESSAGE })
    }
};

const updateBook = async (req, res) => {
    try {
        const {id} = req.params
        const { title, autor, pageQuantity } = req.body;
        const updateBook = bookService.updateBook(id, title, autor, pageQuantity)
        if (!updateBook) return res.status(404).json({ message: NOT_BOOK_ERROR });
        return res.status(200).json({ message: 'Livro atualizado com sucesso'})
    } catch (e) {
        console.log(`erro log: ${e.message}`);
     return   res.status(500).json({ message: ERROR_MESSAGE })
    }
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook
}