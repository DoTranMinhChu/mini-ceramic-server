'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders',
      [
        {
          total: 46,
          account_id: 1,
          shop_id: 1,

          orderDate: new Date("2/1/2022"),
          shipDate: null,

          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          total: 10,
          account_id: 1,
          shop_id: 2,

          orderDate: new Date("5/2/2022"),
          shipDate: null,

          status_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          total: 25,
          account_id: 2,
          shop_id: 1,

          orderDate: new Date("2/2/2022"),
          shipDate: null,

          status_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
