const express = require('express')
const userrouter = require('./router/ekskuls')
const app = express()
const port = 1009
const connectDB = require ('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Test')
})

app.use(userrouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})