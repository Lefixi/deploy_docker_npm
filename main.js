const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Mon application fonctionne tres bien!!!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
