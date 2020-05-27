const { MongoClient, Server } = require('mongodb')

const configs = require('./configs')

function seed(collection, records) {
  MongoClient.connect(configs.mongoUrl, (err, db) => {
    if (err) throw err

    var dbo = db.db(configs.db)

    dbo.collection(collection)
      .insertMany(records, (err, res) => {
        if (err) throw err
        console.log("Number of documents inserted: " + res.insertedCount)
        db.close()
      })
  })
}

seed('zoj', [
  { username: 'u1' },
  { username: 'u2' },
  { username: 'u15' },
])