'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderStatuses',
      [

        {
          name: 'Pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Confirmed',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cancel',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refunded',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shipped',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ready for delivery',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderStatuses', null, {});
  }
};
