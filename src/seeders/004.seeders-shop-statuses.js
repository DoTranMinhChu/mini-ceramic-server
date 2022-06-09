'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ShopStatuses',
      [
        {
          name: 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'unactive',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'remove',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ShopStatuses', null, {});
  }
};
