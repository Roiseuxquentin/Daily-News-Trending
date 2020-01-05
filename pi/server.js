const express = require('express')
const app = express()
const cors = require('cors')

const curl = require('curl')
const fs = require('fs') 

// const bodyParser = require('body-parser')
const Parser = require('rss-parser')

// Middleware
// app.use(bodyParser.urlencoded({ extended: true })) 
app.use(cors())
app.use(express.static('./public'))

app.get('/dok', (req,res) => {
    const method = 'dayData,paper,grec,nobel,joke,failles,'
    res.send(method)    
})
// app.get('/', (req, res) => res.send("yolo"))

app.get('/sante', (req,res) => {
  console.log('sante')
  curl.get('https://www.sentiweb.fr/rss/if/fr', 
    (err, response, body) => {
      console.log(body) 
      res.send(body) 
    })
})

app.get('/dayData', (req,res) => {
  fs.readFile('./data/dailyData.json', 'utf-8', (err, data) => { 
    if (err) throw err 

    res.send(JSON.stringify(data))    
  }) 
})

app.get('/paper', (req,res) => {
  fs.readFile('./data/news.json', 'utf-8', (err, data) => { 
    if (err) throw err 
    res.send(JSON.stringify(data))    
  }) 
})

app.get('/grec', (req,res) => {
  fs.readFile('./data/grec.json', 'utf-8', (err, data) => { 
    if (err) throw err 
    const dataTransform = JSON.parse(data)
    const grecRdm = dataTransform.grec[Math.floor(Math.random() * (0 - 320)) + 320]
    res.send(JSON.stringify({grec : grecRdm}))    
  }) 
})

app.get('/nobel', (req,res) => {
  fs.readFile('./data/nobel.json', 'utf-8', (err, data) => { 
    if (err) throw err 
    const dataTransform = JSON.parse(data)
    const prizeRdm = dataTransform.prizes[Math.floor(Math.random() * (0 - 100)) + 100]
    res.send(JSON.stringify({nobel : prizeRdm}))
  })
})

app.get('/joke', (req,res) => {
  fs.readFile('./data/joke.json', 'utf-8', (err, data) => { 
    if (err) throw err 
    const dataTransform = JSON.parse(data)
    const jokeRdm = dataTransform.joke[Math.floor(Math.random() * (0 - 95)) + 95]
    res.send(JSON.stringify({joke : jokeRdm}))
  })
})

app.get('/failles', (req,res) => {
  fs.readFile('./data/secu.json', 'utf-8', (err, data) => { 
    if (err) throw err 
    const dataTransform = JSON.parse(data)
    const xssRdm = () => dataTransform.xss[Math.floor(Math.random() * (0 - 110)) + 110]
    const dorksRdm = () => dataTransform.dorks[Math.floor(Math.random() * (0 - 600)) + 600]

    const payLoad = [ xssRdm() ,xssRdm() ,xssRdm() ,xssRdm() ]
    const dorks =  [ dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm() , dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm(), dorksRdm() ]

    res.send(JSON.stringify({payload : payLoad ,dorks : dorks}))
  })
})
app.listen(42333, () =>  curl.get('http://roiseux.fr', (err, response, body) => console.log(`ip public :${body} \nip local:????\nport :42333`) ) )
