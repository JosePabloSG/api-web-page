export class WebController {
  constructor ({ webModel }) {
    this.webModel = webModel
  }

  getAll = async (req, res) => {
    try {
      const where = req.query
      const data = await this.webModel.getAll(where)
      res.json(data)
    } catch (error) {
      console.error('Error: ', error)
      res.status(500).send('Error interno del servidor')
    }
  }

  async getById (req, res) {
    try {
      const { id } = req.params
      const data = await this.webModel.getById({ id })
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
      const data = await this.webModel.create({ input })
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
      const updatedData = await this.webModel.update({ id, input })

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
      const deleted = await this.webModel.delete({ id })

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
