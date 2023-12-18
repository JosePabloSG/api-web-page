import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const readJSON = (path) => {
  try {
    const jsonData = require(path)

    if (typeof jsonData !== 'object' || jsonData === null) {
      throw new Error(`El archivo en ${path} no contiene un objeto JSON válido.`)
    }

    return jsonData
  } catch (error) {
    throw new Error(`Error al leer el archivo JSON en ${path}: ${error.message}`)
  }
}

export { readJSON }
