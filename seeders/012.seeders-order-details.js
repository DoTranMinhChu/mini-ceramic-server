'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderDetails',
      [
        {
          product_id: 2,
          quantity: 3,
          order_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: 4,
          quantity: 1,
          order_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: 4,
          quantity: 1,
          order_id: 2,
          status_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: 3,
          quantity: 1,
          order_id: 3,
          status_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: 4,
          quantity: 1,
          order_id: 3,
          status_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }


      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
