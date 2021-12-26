'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: null,
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
