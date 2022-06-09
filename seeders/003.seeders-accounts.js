'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Accounts',
      [
        
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
