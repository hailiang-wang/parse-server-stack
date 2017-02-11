const express = require('express')
const ParseServer = require('parse-server').ParseServer
const ParseDashboard = require('parse-dashboard');
const path = require('path')
const config = require('./config/environment')

const api = new ParseServer({
  databaseURI: config.app.mongoUri,
  cloud: __dirname + '/cloud/main.js',
  appId: config.app.appId,
  masterKey: config.app.masterKey, // Add your master key here. Keep it secret!
  serverURL: config.app.serverURL, // Don't forget to change to https if needed
  liveQuery: config.app.liveQuery,
  clientKey: config.app.clientKey,
  restAPIKey: config.app.restAPIKey,
  javascriptKey: config.app.javascriptKey,
  allowClientClassCreation: config.app.allowClientClassCreation, // Set to false to disable client class creation. Defaults to true.
  logLevel: config.app.logLevel
})

var dashboard = new ParseDashboard({
  apps: config.dashboard
}, config.PARSE_DASHBOARD_ALLOW_INSECURE_HTTP)

// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

const app = express()

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')))

// Serve the Parse API on the /parse URL prefix
app.use(config.appPath, api)

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard)

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.status(404).json({
    message: 'Forbidden',
    server: 'datacollection'
  })
})

var port = config.port
var httpServer = require('http').createServer(app)
httpServer.listen(port, function () {
  console.log('datacollection running on port ' + port + '.')
})
