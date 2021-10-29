const express = require('express')

const app = express()
const port = 2368

app.get('/', (req, res) => {
  res.send('<h1>Works!</h1>')
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
