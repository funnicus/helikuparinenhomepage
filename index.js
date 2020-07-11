const app = require('./app')
const http = require('http')
const config = require('./server/utils/config')

const server = http.createServer(app)

const hostname = '127.0.0.1';

const PORT = config.PORT || 3001
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`)
})