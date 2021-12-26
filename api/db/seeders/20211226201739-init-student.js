'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-bbcdef123456',
        matric: '100806020',
        dept: 'Mathematics',
        name: 'John Doe',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', { id: '1b9d6bcd-bbfd-4b2d-9b5d-bbcdef123456' });
  }
};
