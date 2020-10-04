const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    },
    {
      sequelize,
    })
  }
  // belongsTo pertence a um
  // belongsToMany  pertence a muitos
  //relacionamento de models
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as :'user' })
  }
}
module.exports = Address;
