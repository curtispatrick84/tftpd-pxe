const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/test', (req, res) => {
  res.json({ oh: 'hai' })
})

app.listen(8069, () => console.log('At your service...'))
