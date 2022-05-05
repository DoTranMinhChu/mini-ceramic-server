'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductCategories',
      [
        {
          name: 'Cate001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cate002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cate003',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
