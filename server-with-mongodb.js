// server-with-mongodb.js
import { createApp } from './app.js'
import { WebModel } from './models/database/database.js'

createApp({ webModel: WebModel })
