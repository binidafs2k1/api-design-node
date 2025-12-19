import { app } from './server.js'
import ENV from './env.js'

app.listen(ENV.PORT, () => {
  console.log(`Server is running at ${ENV.PORT}`)
})
