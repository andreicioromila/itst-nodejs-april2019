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
      .toArray()
      .then(result => {
        let myUser=result[0]
        return myUser
      })
      .then(user =>{
        console.log(user)
        return db
          .collection('Users')
          .deleteOne({_id:user._id})
      })
      .then(result =>{
        console.log(result)
      })
      .then(() => client)
  })
  .then(client => client.close())
  .catch(err => {
    console.log(err)
  })