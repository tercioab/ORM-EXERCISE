const bookService = require('../service/book.service');

const ERROR_MESSAGE = 'Algo deu errado'

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll()
        res.status(200).json(books)
    } catch (e) {
        console.log(`erro log: ${e.message}`)
        res.status(500).json({ message: ERROR_MESSAGE })
    }
};


module.exports = {
    getAll
}