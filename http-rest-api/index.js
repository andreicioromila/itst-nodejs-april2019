const http = require('http')
const url = require('url')

let id = 0
let jokes = [{ id, joke: 'A horseman had a horse and the horse had nothing against it', punchline: '' }]

http.createServer((req, res) => {
  let path = url.parse(req.url).path
  console.log(path)
  if (path === '/jokes') {
    if (req.method === 'GET') {
      res.write(JSON.stringify(jokes))
      res.end()
    } else if (req.method === 'POST') {
      let postBody = ''
      req.on('data', data =>{
        postBody+=data
      })
      req.on('end',()=>{
        let joke=JSON.parse(postBody)
        id+=1
        jokes.push({id,joke:joke.joke,punchline:joke.punchline?joke.punchline:''})
        res.write(JSON.stringify(joke))
        res.end()
      })
    }
  } else {
    let newPath = path.split('/')
    console.log(newPath)
    let reqId = parseInt(newPath[2])
    let i
    let id=-99
    for(i=0;i<jokes.length;i++){
      if(jokes[i].id===reqId){
        id=i
        break
      }
    }
    if (id<0) {
      res.writeHead(404)
      res.end()
    } else {
      if(req.method==='GET') {
        res.write(JSON.stringify(jokes[id]))
        res.end()
      }else if(req.method==="PUT"){
        let putBody = ''
        req.on('data', data =>{
          putBody+=data
        })
        req.on('end',()=>{
          let joke=JSON.parse(putBody)
          jokes[id]={id:reqId,joke:joke.joke,
            punchline:joke.punchline?joke.punchline:''}
          res.write(JSON.stringify(jokes[id]))
          res.end()
        })

      }else if(req.method==="PATCH"){
        let patchBody = ''
        req.on('data', data =>{
          patchBody+=data
        })
        req.on('end',()=>{
          let joke=JSON.parse(patchBody)
          jokes[id]={id:reqId,joke:joke.joke?joke.joke:jokes[id].joke,
            punchline:joke.punchline?joke.punchline:jokes[id].punchline}
          res.write(JSON.stringify(jokes[id]))
          res.end()
        })

      }else if(req.method==='DELETE'){
        jokes.splice(id,1)
        res.writeHead(200)
        res.end()
      }
    }
  }
}).listen(8080)