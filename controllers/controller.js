export class WebController {
  constructor ({ webModel }) {
    this.webModel = webModel
  }

  getAll = async (req, res) => {
    const where = req.query
    const data = await this.webModel.getAll(where)
    if (!data) return res.status(404).json({ message: 'Not found' })
    res.json(data)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const data = await this.webModel.getById({ id })
    if (!data) return res.status(404).json({ message: 'Not found' })
    res.json(data)
  }

  create = async (req, res) => {
    const { body } = req
    const data = await this.webModel.create({ input: body })
    res.status(201).json(data)
  }

  update = async (req, res) => {
    const { body, params } = req
    const { id } = params
    const data = await this.webModel.update({ id, input: body })
    if (!data) return res.status(404).json({ message: 'Not found' })
    res.json(data)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const data = await this.webModel.delete({ id })
    if (!data) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  }
}
