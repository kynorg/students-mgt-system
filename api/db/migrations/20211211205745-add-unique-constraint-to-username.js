'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      type: 'unique',
      fields: ['username'],
      name: 'unique_username_constraint',
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'unique_username_constraint')
  }
};
