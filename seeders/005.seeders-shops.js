'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Shops',
      [
        {
          name: 'Shop 001',
          description: 'Description 001',
          owner_id: 2,
          address: 'Addrees 001',
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shop 002',
          description: 'Description 002',
          owner_id: 1,
          address: 'Addrees 002',
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shop 003',
          description: 'Description 003',
          owner_id: 1,
          address: 'Addrees 003',
          status_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};
