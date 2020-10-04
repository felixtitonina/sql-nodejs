/**
 * criar a conexão da database
 */

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

/**
 * Imortando model
 */
const User = require("../models/User");
const Address = require("../models/Address");

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models)
Address.associate(connection.models)

module.exports = connection;
