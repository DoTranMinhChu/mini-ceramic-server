'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AccountStatuses',
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
    return queryInterface.bulkDelete('AccountStatuses', null, {});
  }
};
