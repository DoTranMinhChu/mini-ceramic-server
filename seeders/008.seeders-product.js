'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          price: {
            allowNull: false,
            type: Sequelize.FLOAT,
            validate: {
              min: 0
            }
          },
          description: {
            allowNull: false,
            type: Sequelize.TEXT
          },
          image: 'image001',


          category_id: 2,

          shop_id: 1,
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
