//@ts-check

const MongoClient = require('mongodb').MongoClient
const ODataServer = require('simple-odata-server')
const Adapter = require('simple-odata-server-mongodb')
const http = require('http')

const configs = require('./configs')

const oDataModel = {
  entityTypes: {
    'Submission': {
      '_id': { 'type': 'Edm.String', key: true },
      'username': { 'type': 'Edm.String' },
    },
  },
  entitySets: {
    'zoj': {
      entityType: 'Submission',
    },
  },
}

function init() {
  const odataServer = ODataServer("http://localhost:5000")
    .model(oDataModel)

  MongoClient.connect(configs.mongoUrl, function (err, db) {
    odataServer.adapter(Adapter(function (cb) {
      cb(err, db.db(configs.db))
    }))
  })

  http.createServer(odataServer.handle.bind(odataServer)).listen(5000)
}

require('./test-seed')
init()