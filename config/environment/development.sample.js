'use strict'

module.exports = {
  app: {
    serverURL: 'http://localhost:1339/parse',
    mongoUri: 'mongodb://localhost:27017/datacollectiondb',
    masterKey: 'XXX',
    appId: 'datacollection'
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
