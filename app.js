const express = require('express')

const app = express()

app.server = app.listen('4000', () => {
  console.log('running on port 4000')
})