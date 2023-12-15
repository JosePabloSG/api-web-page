// server-with-mongodb.js
import { createApp } from './app.js';
import { WebModel } from './models/database/database.js';

// Crear una instancia de WebModel
const webModelInstance = new WebModel();

// Pasar WebModel a la función createApp
createApp({ WebModel: webModelInstance });
