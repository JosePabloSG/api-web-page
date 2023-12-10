import express, { json } from 'express'
import { createWebRouter } from './routes/routes.js'
import 'dotenv/config.js'

export const createApp = ({ WebModel }) => {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')
  app.use('/data', createWebRouter({ WebModel }))
  // arranque del servidor
  const PORT = process.env.PORT ?? 3000
  app.listen(PORT, () => {
    console.log(`Listening on Port http://localhost:${PORT}`)
  })
}