'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'firstName', { transaction: t }),
        queryInterface.removeColumn('Users', 'lastName', { transaction: t }),
        queryInterface.removeColumn('Users', 'email', { transaction: t }),
        queryInterface.addColumn('Users', 'username', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.addColumn('Users', 'password', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.removeColumn('Users', 'id', { transaction: t }),
        queryInterface.addColumn('Users', 'id', { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 }, { transaction: t })
      ])
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('Users', 'id', { type: Sequelize.INTEGER }, { transaction: t }),
        queryInterface.removeColumn('Users', 'username', { transaction: t }),
        queryInterface.removeColumn('Users', 'password', { transaction: t }),
        queryInterface.addColumn('Users', 'firstName', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.addColumn('Users', 'lastName', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.addColumn('Users', 'email', { type: Sequelize.STRING }, { transaction: t }),
      ])
    });
  }
};
