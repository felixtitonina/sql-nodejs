const { static } = require("express");
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize: connection,
      })
  }
  /**
   * Aqui crio o relacionamento informando que existe varios address para um user
   * Coluna => user_id
   * Tabela Address
   */
  static associate(models){
  this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'})
  this.belongsToMany(models.User, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })     

  }
}

module.exports = User;
