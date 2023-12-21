import { Router } from 'express'
import { WebController } from '../controllers/controller.js'

export const createWebRouter = ({ webModel }) => {
  const WebRouter = Router()
  const webControllerInstance = new WebController({ webModel })

  WebRouter.get('/', webControllerInstance.getAll)
  WebRouter.get('/:id', webControllerInstance.getById)
  WebRouter.post('/', webControllerInstance.create)
  WebRouter.put('/:id', webControllerInstance.update)
  WebRouter.delete('/:id', webControllerInstance.delete)

  return WebRouter
}
