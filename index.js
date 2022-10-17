const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.text());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public','index.html'))
})

app.get('/shirleyp', (req, res) => {
  res.sendFile(path.join(__dirname, './public','shirley.html'))
})

app.post('/comment', (req,res) =>{
  console.log('Got Body:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

