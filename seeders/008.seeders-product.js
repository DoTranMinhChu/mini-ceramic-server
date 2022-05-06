'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'Product 001',
          price: 20,
          description: 'Product description 001',
          image: 'image001',
          category_id: 2,
          shop_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Product 002',
          price: 12,
          description: 'Product description 002',
          image: 'image002',
          category_id: 2,
          shop_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Product 003',
          price: 15,
          description: 'Product description 003',
          image: 'image003',
          category_id: 1,
          shop_id: 2,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Product 004',
          price: 10,
          description: 'Product description 004',
          image: 'image004',
          category_id: 2,
          shop_id: 2,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Product 005',
          price: 18,
          description: 'Product description 005',
          image: 'image005',
          category_id: 2,
          shop_id: 3,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
