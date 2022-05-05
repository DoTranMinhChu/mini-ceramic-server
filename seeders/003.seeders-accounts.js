'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Accounts',
      [
        {
          username: 'user001',
          password: 'pass001',
          fullName: 'I am User 001',
          avatar: 'abcdef12356',
          address: 'Address 001',
          phone: '00001',
          balance: 0,
          role_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user002',
          password: 'pass002',
          fullName: 'I am User 002',
          avatar: 'abcdef123567',
          address: 'Address 002',
          phone: '00002',
          balance: 50,
          role_id: 1,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'admin 001',
          password: 'pass001',
          fullName: 'I am Admin 001',
          avatar: 'abcdef123567',
          address: 'Address 00001',
          phone: '00000001',
          balance: 6,
          role_id: 2,
          status_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
