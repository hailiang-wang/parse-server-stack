'use strict'

var path = require('path'),
  _ = require('lodash')

var env = process.env.NODE_ENV || 'development'
env = env.toLowerCase()

var all = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../..'),
  port: 1339,
  // Usage
  // https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide#usage
  app: {
    appId: 'datacollection', // A unique identifier for your app.
    serverURL: 'http://localhost:1337/parse',
    mongoUri: 'mongodb://localhost:27017/parse', // Connection string URI for your MongoDB
    masterKey: '*MUST_DECLARE*', // A key that overrides all permissions. Keep this secret.
    clientKey: null, // The client key for your app. (optional)
    restAPIKey: null, // The REST API key for your app. (optional)
    javascriptKey: null, // The JavaScript key for your app. (optional)
    dotNetKey: null, // The .NET key for your app. (optional)
    liveQuery: {
      classNames: [] // List of classes to support for query subscriptions
    },
    // The default entry point for your Cloud Code is at ./cloud/main.js.
    // cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    sessionLength: 31536000, // one year,
    allowClientClassCreation: false, // Set to false to disable client class creation. Defaults to true.
    logLevel: 'info'
  },
  appPath: '/parse',
  kue: {
    prefix: 'dcq'
  },
  dashboard: {
    'apps': [
      {
        'serverURL': 'http://localhost:1339/parse',
        'appName': 'local:datacollection',
        'appId': 'datacollection',
        'masterKey': 'XXX'
      }
    ],
    'users': [
      {
        'user': 'admin',
        'pass': 'foo',
        'apps': [
          {
            'appId': 'datacollection'
          }
        ]
      }
    ],
    'PARSE_DASHBOARD_ALLOW_INSECURE_HTTP': true
  }
}
module.exports = _.merge(all, require('./' + env + '.js') || {})
