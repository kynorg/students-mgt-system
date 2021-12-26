'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-abcdef123456',
        username: 'admin',
        password: 'adminpass',
        isAdmin: true,
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', { username: 'admin' } )
  }
};
