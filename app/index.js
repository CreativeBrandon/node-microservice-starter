const path = require('path')

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const config = require('../config')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test')
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log.bind(console, 'connection successful');
})

app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))

// Pages
require('./pages').init(app)

// Migrations
require('./migrations').init(app, db)

// Error Handlers Last
require('./exceptions').init(app)

module.exports = app
