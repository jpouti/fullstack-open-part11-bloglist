const app = require('./server/app')
//const logger = require('./server//utils/logger')
const config = require('./server//utils/config')

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})