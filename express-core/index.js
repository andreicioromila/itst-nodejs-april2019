const express =require('express')
const body_parser=require('body-parser')
let app = express()

let id = 0
const jokes = [{ id, joke: 'A horseman had a horse and the horse had nothing against it', punchLine: '' }]

app.use((req,res,next)=>{
  console.log(`${req.method} : ${req.url}`)
    next()
})

app.use(body_parser.json())

const findJoke= (reqID)=>{
  let i
  let id=-99
  for(i=0;i<jokes.length;i++){
    if(jokes[i].id===reqID){
      id=i
      break
    }
  }
  return id
}

app.get('/jokes/:id',(req,res)=>{
  const index =findJoke(parseInt(req.params.id))

  if(index<0){
    res.status(404).end()
  }else{
    res.json(jokes[index])
  }
})

app.get('/jokes',(req,res)=>{
  res.json(jokes)
})

app.put('/jokes/:id',(req,res)=>{
  const index =findJoke(parseInt(req.params.id))

  if(index<0){
    res.status(404).end()
  }else{
    let joke={id:req.params.id,joke:req.body.joke,
      punchline:req.body.punchline?req.body.punchline:''}
      jokes[index]=joke
    res.json(jokes[index])
  }
})

app.patch('/jokes/:id',(req,res)=>{
  const index =findJoke(parseInt(req.params.id))

  if(index<0){
    res.status(404).end()
  }else{
    let joke={id:req.params.id,
      joke:req.body.joke?req.body.joke:jokes[index].joke,
      punchline:req.body.punchline?req.body.punchline:jokes[index].punchline}
    jokes[index]=joke
    res.json(jokes[index])
  }
})

app.delete('/jokes/:id',(req,res)=>{
  const index =findJoke(parseInt(req.params.id))

  if(index<0){
    res.status(404).end()
  }else{
    jokes.splice(index,1)
    res.status(204).end()
  }
})

app.post('/jokes',(req,res)=>{
  id+=1
  let joke={id,joke:req.body.joke,
    punchline:req.body.punchline?req.body.punchline:''}
    jokes.push(joke)
  res.json(joke)
})

app.listen(8080,()=>{
  console.log('API started on 8080')
})