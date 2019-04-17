const MongoClient =require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err){
    console.log(("Error while connecting"))
  }

  const db = client.db('test-driver')

  console.log('Succesfully connected')

  db.collection('Users').insertOne({
    id:23,
    name:'John'
  },(err,result)=>{
    if(err){
      console.log(err)
    } else {
      console.log(result)
    }
    client.close()
  })
})