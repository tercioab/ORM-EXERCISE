

const { sequelize, dataTypes, checkModelName, checkPropertyExists } = require('sequelize-test-helpers');

const BookModel = require('../../src/models/book.model');

describe('O model de User', () => {
    const User = BookModel(sequelize, dataTypes);
    const user = new User()

    describe('Possui o nome "Book"', () => {
        checkModelName(User)('Book');
    });

    describe('Possui as propriedades "title", "autor" e "pageQuantity" ', () => {
        ['title', 'autor', 'pageQuantity'].forEach(checkPropertyExists(user))
    })
})