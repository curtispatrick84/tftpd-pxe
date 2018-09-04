const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')

const app = express()
app.use(bodyParser.json({ type: 'application/json' }))
app.use(morgan('combined'))

const PXECFG = '/var/tftpboot/pxelinux.cfg'

app.get('/test', (req, res) => {
  res.json({ oh: 'hai' })
})

app.post('/pxeconfig', ({ body: { mac, os }}, res) => {
  if (typeof os !== 'undefined' && typeof mac !== 'undefined') {
    parsedMacAddress = `01-${mac.toLowerCase().replace(/:/g, '-')}`
    // first, remove the old file
    fs.unlink(`${PXECFG}/${parsedMacAddress}`, err => {})

    fs.createReadStream(`${PXECFG}/${os}.cfg`)
      .pipe(fs.createWriteStream(`${PXECFG}/${parsedMacAddress}`))

    res.json({ status: 'success' })
    return
  }
  res.sendStatus(422)
})

app.listen(8069, () => console.log('At your service...'))
