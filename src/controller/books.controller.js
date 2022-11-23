const bookService = require('../service/book.service');

const ERROR_MESSAGE = 'Algo deu errado'
const NOT_BOOK_ERROR = 'Book not found'

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll()
        res.status(200).json(books)
    } catch (e) {
        console.log(`erro log: ${e.message}`)
        res.status(500).json({ message: ERROR_MESSAGE })
    }
};

const getById = async (req, res) => {
    try {
        const {id} = req.params
        const books = await bookService.getById(id)
        if(!books) return res.status(404).json({message: NOT_BOOK_ERROR})
    } catch (e) {
        console.log(`erro log: ${e.message}`)
        res.status(500).json({message: ERROR_MESSAGE})
    }
}

module.exports = {
    getAll,
    getById
}