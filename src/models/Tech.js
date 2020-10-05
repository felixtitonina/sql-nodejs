const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
      })
  }
  static associate(models){
      // models.User => pertence a muito usuarios
  this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })     
  }
}

module.exports = Tech;
