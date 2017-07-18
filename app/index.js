const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const app = express()

// Middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// View Engine
app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))

// Pages
require('./features').init(app)

// Error Handlers
require('./exceptions').init(app)

module.exports = app
