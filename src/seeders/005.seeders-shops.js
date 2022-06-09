'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Shops',
      [
        

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};
