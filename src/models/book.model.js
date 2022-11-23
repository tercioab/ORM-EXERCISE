const UserModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    });
  
    return Book;
  };
  
  module.exports = UserModel;