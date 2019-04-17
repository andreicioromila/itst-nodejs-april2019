const MongoClient = require('mongodb').MongoClient

MongoClient
  .connect('mongodb://localhost:27017')
  .then(client => {
    return {
      client,
      db: client.db('test-driver')
    }
  })
  .then(({ client, db }) => {
    return db
      .collection('Users')
      .find()
      .count()
      .then(result => {
        console.log(result)
      })
      .then(() => client)
  })
  .then(client => client.close())
  .catch(err => {
    console.log(err)
  })