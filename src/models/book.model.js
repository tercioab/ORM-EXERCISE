const Book = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
        autor: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
    });
  
    return Book;
  };
  
  module.exports = Book;