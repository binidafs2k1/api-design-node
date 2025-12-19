import { app } from './server.ts'
import ENV from './env.ts'

app.listen(ENV.PORT, () => {
  console.log(`Server is running at ${ENV.PORT}`)
})
