'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      matric: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      dept: {
        type: Sequelize.STRING
      },
      semester: {
        type: Sequelize.STRING
      },
      session: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      qr_code: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};