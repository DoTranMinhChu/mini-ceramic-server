'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders',
      [
        

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
