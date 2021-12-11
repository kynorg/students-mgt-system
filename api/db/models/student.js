'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    matric: DataTypes.STRING,
    name: DataTypes.STRING,
    dept: DataTypes.STRING,
    semester: DataTypes.STRING,
    session: DataTypes.STRING,
    image: DataTypes.STRING,
    qr_code: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};