const chalk = require('chalk')
const express = require('express')

const app = express()
const http = require('http')
const io = require('socket.io')(http)
//const rooms = require('./routes/room')

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/assets', {}))

const PORT = process.env.PORT || 3001

//app.use('/', rooms)

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', (socket) => {
	console.log('a user connected')
})

const server = app.listen(PORT, () => {
  const host = server.address().address
  const port = server.address().port

  console.info(chalk.green(`Chat app listening at`), chalk.blue(`http://${host}:${port}`))
})
