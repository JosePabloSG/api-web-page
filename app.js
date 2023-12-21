import express, { json } from 'express'
import { createWebRouter } from './routes/routes.js'
import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config.js'

export const createApp = ({ webModel }) => {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')
  app.use(corsMiddleware())
  app.use('/data', createWebRouter({ webModel }))
  const PORT = process.env.PORT ?? 3000
  app.listen(PORT, () => {
    console.log(`Listening on Port http://localhost:${PORT}`)
  })
}
