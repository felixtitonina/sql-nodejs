/**
 * criar a conexão da database
 */

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

/**
 * Imortando model
 */
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;