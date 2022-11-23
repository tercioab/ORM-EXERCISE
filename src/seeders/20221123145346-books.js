'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     
    await queryInterface.bulkInsert('Books', [
      {
        "title": "Mais esperto que o diabo",
        "autor": "Napoleon hill",
        "pageQuantity": "208",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "O segredo",
        "autor": "Rhonda Byrne",
        "pageQuantity": "198",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "O poder do hábito",
        "autor": "Charles Duhigg",
        "pageQuantity": "408",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }], {});
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Book', null, {});

  }
};
