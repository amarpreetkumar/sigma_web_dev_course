const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  //next() is a function that, when called, executes the next middleware in the stack
  //If you don't call next(), the request will hang and the response will never be sent.
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('uuW')
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!')
})