const { Book } = require('../models')

const getAll = async () => {
    const books = await Book.findAll();
    return books;
};

const getById = async (id) => {
    const books = await Book.findByPk(id);
    return books;
};

const createBook = async ( title, autor, pageQuantity) => {
    const books = await Book.create({ title, autor, pageQuantity });
    return books;

}

const updateBook = async (id,  title, autor, pageQuantity) => {
    const [updatedBook] = await Book.update(
        {  title, autor, pageQuantity },
        { where: { id } },
    );
    return updatedBook;
};

const deleteBook = async (id) => {
    const book = await Book.destroy(
      { where: { id } },
    );

    return book;
  };



module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
}