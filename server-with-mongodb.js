/* eslint-disable prettier/prettier */
// server-with-mongodb.js
import { createApp } from './app.js'
import { WebModel } from './models/database/database.js'

const webModelInstance = new WebModel()

createApp({ WebModel: webModelInstance })
