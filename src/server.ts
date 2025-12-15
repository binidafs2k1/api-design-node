import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res
    .status(200)
    .send('<button onClick={console.log("hjhj")}>Click me</button>')
})

export { app }

export default app
