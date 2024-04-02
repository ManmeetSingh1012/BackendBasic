// .env 
require('dotenv').config()

// below we are importing express , u can also use import statment as well
const express = require('express')

// created a app from express func , we will use app for all uses cases
const app = express()
// these are ports where it will listen the request
const port = 3000


// there are many things in req and res to know more see docs
app.get('/', (req, res) => {
   // when url will hit it will send or we see this output on our screen.
  res.send('Hello World!')
})

app.get('/login', (req,res)=>{
   res.send('<h1>please login at chai </h1>')
})

app.get('/backend')

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})