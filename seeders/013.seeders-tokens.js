'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Tokens',
            [


            ]
        );
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Tokens', null, {});
    }
};
