// FIXME: SERVER WITH MONGODB TERMINADO ESPERANDO PARA REVISION
import { createApp } from './app.js'
import { WebModel } from './models/database/database.js'

createApp({ webModel: WebModel })
