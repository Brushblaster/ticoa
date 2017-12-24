const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('../config/config')
const User = require('./user')
const CommConf = require('./config')

mongoose.connect(config.dbAddress, {
  useMongoClient: true
})
  .catch(error => console.log(error))

module.exports = {
  CommConf: CommConf,
  User: User
}
