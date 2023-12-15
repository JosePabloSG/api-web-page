/* eslint-disable prettier/prettier */

class WebController {
  constructor (WebModel) {
    this.WebModel = WebModel
  }

  async getAll (req, res) {
    try {
      const data = await this.WebModel.getAll()
      res.json(data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error interno del servidor')
    }
  }

  async getById (req, res) {
    try {
      const { id } = req.params
      const data = await this.WebModel.getById({ id })
      if (data) {
        res.json(data)
      } else {
        res.status(404).json({ message: 'Registro no encontrado' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Error interno del servidor')
    }
  }

  async create (req, res) {
    try {
      const { body: input } = req
      const data = await this.WebModel.create({ input })
      res.status(201).json(data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error interno del servidor')
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params
      const { body: input } = req
      const updatedData = await this.WebModel.update({ id, input })

      if (updatedData) {
        res.json(updatedData)
      } else {
        res.status(404).json({ message: 'Registro no encontrado' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Error interno del servidor')
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.params
      const deleted = await this.WebModel.delete({ id })

      if (deleted) {
        res.send('Registro eliminado exitosamente')
      } else {
        res.status(404).json({ message: 'Registro no encontrado' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Error interno del servidor')
    }
  }
}

export default WebController
