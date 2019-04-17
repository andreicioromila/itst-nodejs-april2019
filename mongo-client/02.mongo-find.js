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
      .find({id: 4})
      .toArray()
      .then(users => {
        console.log(users)
      })
      .then(() => client)
  })
  .then(client => client.close())
  .catch(err => {
    console.log(err)
  })