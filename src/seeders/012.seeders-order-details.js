'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderDetails',
      [


      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
