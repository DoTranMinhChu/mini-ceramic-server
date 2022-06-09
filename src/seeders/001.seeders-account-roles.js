'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AccountRoles',
      [
        {
          name: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AccountRoles', null, {});
  }
};
