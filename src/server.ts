import express from 'express'
import authRoutes from './routes/authRouters.ts'
import habitRouters from './routes/habitRouters.ts'
import userRouters from './routes/userRouters.ts'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { isTest } from '../env.ts'

const app = express()
app.use(
  morgan('dev', {
    skip: () => isTest(),
  })
)
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (req, res) => {
  res
    .status(200)
    .send('<button onClick={console.log("hjhj")}>Click me</button>')

  console.log('hjhj')
})

app.use('/api/auth', authRoutes)
app.use('/api/habits', habitRouters)
app.use('/api/users', userRouters)

export { app }

export default app
