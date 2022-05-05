'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductStatuses',
      [
        {
          name: 'Stocking',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Out of stock',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductStatuses', null, {});
  }
};
