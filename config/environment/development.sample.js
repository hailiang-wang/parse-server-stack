'use strict'

module.exports = {
  app: {
    serverURL: 'http://localhost:1339/parse',
    mongoUri: 'mongodb://localhost:27017/datacollectiondb',
    masterKey: 'XXX',
    appId: 'datacollection'
  },
  dashboard: [{
    serverURL: 'http://localhost:1339/parse',
    appName: 'local:datacollection',
    appId: 'datacollection',
    masterKey: 'XXX'
  }]
}
