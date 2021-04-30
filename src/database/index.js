import Sequelize from 'sequelize'
import dbConfig from '../config/database.js'
import User from'../models/User.js'



const connection = new Sequelize(dbConfig)
User.init(connection)


export default connection